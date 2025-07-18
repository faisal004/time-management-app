import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (

    <div className="flex flex-col container mx-auto items-center justify-center h-screen">
      <h1>Home</h1>
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button variant="default" size="lg" className="w-full">Sign Up</Button>
    </div>
  );
}
