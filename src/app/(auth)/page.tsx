import { SignIn } from "./_components/sign-in";

export default async function Home() {

  return (
    <div className=" h-screen grid md:grid-cols-2 grid-cols-1  items-center justify-center ">
      <div className="md:mx-[72px] mx-[32px]">
        <SignIn />

      </div>
      <div className=" md:flex hidden flex-col items-center justify-center bg-[var(--brand-blue)] text-white gap-5 h-full  ">
        <div className=" flex flex-col items-center justify-center  max-w-[600px] mx-[72px] space-y-[12px] ">
          <h1 className="w-full text-left text-[40px] "> ticktock</h1>

          <p>
            Introducing ticktock, our cutting-edge timesheet web application designed to revolutionize how you manage employee work hours. With ticktock, you can effortlessly track and monitor employee attendance and productivity from anywhere, anytime, using any internet-connected device.
          </p>
        </div>

      </div>
    </div>
  );
}