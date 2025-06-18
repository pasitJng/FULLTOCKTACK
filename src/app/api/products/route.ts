import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
export async function GET(){
    try {
      const data = await prisma.product.findMany()
      return NextResponse.json({
        data: data
      })
    } catch (error) {
        return NextResponse.json({
          message:"Error"
        })
      }
}