import { auth } from "@/auth";
import { SignOutButton } from "./_components/sign-out";
import { SignIn } from "./_components/sign-in";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      {session ? (
        <div>Signed in as {session.user?.email}

          <SignOutButton />
        </div>
      ) : (
        <div>
          <SignIn />

        </div>
      )}
    </div>
  );
}