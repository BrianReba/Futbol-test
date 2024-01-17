import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function POST(request: Request) {
  const data = await request.json();

  console.log(data);
  const user_found = await db.user.findFirst({
    where: {
      OR: [
        {
          email: data.email,
        },
        {
          username: data.username,
        },
      ],
    },
  });
  console.log(user_found);

  if (user_found && user_found.email === data.email) {
    return NextResponse.json(
      {
        message: "El email ya esta registrado en la base de datos!",
      },
      {
        status: 400,
      }
    );
  } else if (user_found && user_found.username === data.username) {
    return NextResponse.json(
      {
        message: "El username ya esta registrado en la base de datos!",
      },
      {
        status: 400,
      }
    );
  }

  const new_user = await db.user.create({
    data,
  });
  console.log(new_user);

  return NextResponse.json("Registered!");
}
