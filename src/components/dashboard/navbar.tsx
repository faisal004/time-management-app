import { auth } from "@/auth";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown"
import { ChevronDownIcon } from "lucide-react";
import { SignOutButton } from "../auth/sign-out";
const Navbar = async () => {

    const session = await auth()
    return (
        <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center ">
                <span className="font-bold text-[24px] ">ticktock</span>

            </div>
            <div className=" text-[14px] w-full text-left px-5 ">Timesheets</div>
            <DropdownMenu >
                <DropdownMenuTrigger>
                    <div className="flex items-center gap-2 truncate">
                        <span className="text-[14px]">{session?.user?.name}</span>
                        <ChevronDownIcon className="size-4" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="border-0">

                    <DropdownMenuItem className="bg-white border-0"><SignOutButton /></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    );
};

export default Navbar;
