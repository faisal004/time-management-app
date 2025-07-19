import { loginAction } from "@/actions/login-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SignIn() {
  return (
    <div className="flex flex-col space-y-5">
      <h1 className="text-[20px] font-bold">Welcome Back</h1>
      <form
        action={loginAction}
        className="flex flex-col space-y-4"
      >
        <label className="font-semibold text-sm">
          Email
          <Input name="email" type="email" required defaultValue="testemail@gmail.com" className="mt-2 font-normal" />
        </label>
        <label className="font-semibold text-sm ">
          Password
          <Input name="password" type="password" required defaultValue="password123" className="mt-2 font-normal" />
        </label>


        <div className="flex items-center space-x-2">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 border-gray-300 rounded "
          />
          <label htmlFor="remember" className="text-sm font-medium">
            Remember me
          </label>
        </div>
        <Button type="submit" className="w-full cursor-pointer">Sign in</Button>
      </form>
    </div>

  )
}