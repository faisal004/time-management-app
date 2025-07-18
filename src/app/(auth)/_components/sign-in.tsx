import { loginAction } from "@/actions/login-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SignIn() {
  return (
    <form
      action={loginAction}
    >
      <label>
        Email
        <Input name="email" type="email" />
      </label>
      <label>
        Password
        <Input name="password" type="password" />
      </label>
      <Button type="submit" className="w-full">Sign In</Button>
    </form>
  )
}