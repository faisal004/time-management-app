"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown"
import { Ellipsis } from "lucide-react"

interface EditOrDeleteProps {
    onDelete: () => void
}

const EditOrDelete = ({ onDelete }: EditOrDeleteProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger >
                <Ellipsis className="text-gray-500 size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 w-32" align="end">

                <DropdownMenuItem
                    onSelect={(e) => {
                        e.preventDefault()
                    }}
                    className="cursor-pointer"
                >
                    Edit
                </DropdownMenuItem>

                <DropdownMenuItem
                    onSelect={(e) => {
                        e.preventDefault()
                        if (confirm('Are you sure you want to delete this entry?')) {
                            onDelete()
                        }
                    }}
                    className="text-red-500 cursor-pointer focus:text-red-500"
                >
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default EditOrDelete