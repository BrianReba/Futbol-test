"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";

type RegisterForm = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    console.log(data);
    const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
    })

    const json = await res.json()

    console.log(json)
  };

  return (
    <div className="flex justify-center items-center">
      <form
        action=""
        className="dark p-1 rounded-lg shadow-md flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Label htmlFor="name">Name (*)</Label>
        <Input
          className="mt-2 mb-4 bg-transparent rounded-full"
          type="text"
          id="name"
          placeholder="Name"
          {...register("name", {
            required: {
              value: true,
              message: "El nombre no puede estar vacío",
            },
          })}
        />
        {errors.name && (
          <div className="text-sm text-red-600 w-full truncate">
            <span>{errors.name?.message}</span>
          </div>
        )}
        <Label htmlFor="username">Username (*)</Label>
        <Input
          className="mt-2 mb-4 bg-transparent rounded-full"
          type="text"
          id="username"
          placeholder="Username"
          {...register("username", {
            required: {
              value: true,
              message: "El usuario no puede estar vacío",
            },
            maxLength: 20,
            minLength: 3,
          })}
        />
        {errors.username && (
          <div className="text-sm text-red-600 w-full truncate">
            <span>{errors.username?.message}</span>
          </div>
        )}

        <Label htmlFor="email">Email (*)</Label>
        <Input
          className="mt-2 mb-4 bg-transparent rounded-full"
          type="email"
          id="email"
          placeholder="Email"
          {...register("email", {
            required: {
              value: true,
              message: "El email no puede estar vacío",
            },
          })}
        />
        {errors.email && (
          <div className="text-sm text-red-600 w-full truncate">
            <span>{errors.email?.message}</span>
          </div>
        )}

        <Label htmlFor="password">Password (*)</Label>
        <Input
          className="mt-2 mb-4 bg-transparent rounded-full"
          type="password"
          id="password"
          placeholder="Password"
          {...register("password", {
            required: {
              value: true,
              message: "La contraseña no puede estar vacía",
            },
            validate: {
              uppercase: (value) =>
                /[A-Z]/.test(value) ||
                "Falta una mayúscula",
              lowercase: (value) =>
                /[a-z]/.test(value) ||
                "Falta una minúscula",
              number: (value) =>
                /[0-9]/.test(value) ||
                "Falta al menos un número",
              special: (value) =>
                /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value) ||
                "Falta un caracter especial",
            },
          })}
        />
        {errors.password && (
          <div className="text-sm text-red-600 w-full truncate">
            <span>{errors.password?.message}</span>
          </div>
        )}

        <div className="flex justify-center">
          <Button className="bg-blue-950 text-white px-4 py-2 rounded-md mt-4">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
