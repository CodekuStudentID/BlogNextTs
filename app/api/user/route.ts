import { NextResponse } from "next/server";
import { data, ROLE } from "@/app/lib/data";

export async function GET() {
    return NextResponse.json({
        data: data,
        message: "successfully",
        status: 200
    });
}

export async function POST(request: Request) {
    const body = await request.json();
    let newUser = {
        id: data.length +1,
        nama: body.nama,
        alamat1: body.alamat1,
        alamat2: body.alamat2,
        is_active: body.is_active ?? true,
        contact: body.contact,
        role: body.role
    }
    data.push(newUser);

    return NextResponse.json({
        data: data,
        message: 'succesfully',
        status: 200
    });
}


/*
export async function GET() {
    let getAdmin = data.filter((user) => user.role === ROLE.ADMIN);
    return NextResponse.json({
        data: getAdmin,
        message: 'successfully',
        status: 200
    });
}
*/



































/*
export async function GET() {
    return NextResponse.json({
        message: "api route success to connect",
        status: 200
    });
}
*/
