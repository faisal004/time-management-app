import { loginAction } from "@/actions/login-action";

export function SignIn() {
  return (
    <form
      action={loginAction}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  )
}