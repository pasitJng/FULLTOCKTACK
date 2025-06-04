import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest){
    const products = [
  {
    id: 1,
    name: 'เก้าอี้',
    price: '$119.99',
    image: 'https://th.bing.com/th/id/OIP.b2ZqiL9LnYhw97B-_0g9ZwHaHa?cb=iwc2&rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    name: 'เก้าอี้',
    price: '$149.99',
    image: 'https://spacescollection.com/wp-content/uploads/2023/02/Furniture-Chairs-Carl-Hansen-Chair-Oval-937_2.png',
  },
  {
    id: 3,
    name: 'เก้าอี้',
    price: '$99.99',
    image: 'https://th.bing.com/th/id/OIP.dNOz_qKIm8gifqbrpssYMAHaJT?cb=iwc2&rs=1&pid=ImgDetMain',
  },
]

    return NextResponse.json({
        data : products
    })
}