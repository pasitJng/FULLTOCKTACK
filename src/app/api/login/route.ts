import { prisma } from "@/lib/prisma";
import { createHash } from "crypto";
import { sign } from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server";

interface LoginBody {
    email: string;
    password: string;
}

export async function POST(req: NextRequest){
    try {
        const body = await req.json() as LoginBody;
    
        if(!body) return NextResponse.json({
            message : "Body inVaild"
        })

        if(!body.email || !body.password) return NextResponse.json({
            massage : "Please enter email and password"
        })

        const hasPassword = createHash('sha256').update(body.password).digest('hex')
        console.log(hasPassword)
        const user = await prisma.user.findFirst({
            where: {
                email : body.email
            }
        })

        if(!user) return NextResponse.json({
            message : "email or password incorrect"
        })

        if(user.password !==  hasPassword) return NextResponse.json({
            message : "email or password incorrect"
        })

        const token_obj ={
            userId : user.id,
            email : user.email,
            username : user.username,
            role: "customer"
        }
        const token = sign({
            userId : user.id,
            email : user.email,
            username : user.username,
            role: "customer"
        }, process.env.JWT_KEY!, {
            expiresIn: "1h"
        })

        return NextResponse.json({
            token,
            ...token_obj
        })

    } catch (err) {
        console.log(err)
        return NextResponse.json({
            message : `Error ${err}`
        })
    }
}

