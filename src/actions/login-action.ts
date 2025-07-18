"use server";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "../../route";

export async function loginAction(formData: FormData) {
  await signIn("credentials", {
    formData,
    redirectTo: DEFAULT_LOGIN_REDIRECT
  });
}
