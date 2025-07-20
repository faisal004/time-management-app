import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
 
    DropdownMenuTrigger,
} from "@/components/ui/dropdown"
import { Ellipsis } from "lucide-react"
const EditOrDelete = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center">
                <Ellipsis className='text-gray-500 size-4' />

            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200" align="end">

                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default EditOrDelete