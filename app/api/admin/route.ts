import { NextResponse } from "next/server";
import { data, ROLE } from "@/app/lib/data";

export async function GET(){
    let admin = data.filter((user) => user.role === ROLE.ADMIN);
    return NextResponse.json({
        data: admin,
        message: 'successfully',
        status: 200
    });
}