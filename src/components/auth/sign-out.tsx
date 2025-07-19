"use client";
import { signOut } from "next-auth/react";

export function SignOutButton() {
  return <button onClick={() => signOut()} className="cursor-pointer w-full ">Sign Out</button>;
}