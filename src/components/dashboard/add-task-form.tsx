import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
const AddTaskForm = ({ onClose }: { onClose: () => void }) => {
    const handleClose = () => {
        onClose();
    }
    return (
        <div>
            <h2>Add Task</h2>
            <div className="flex flex-col space-y-2">
                <div>
                    Select Project
                    <Select>
                        <SelectTrigger className="w-full border border-gray-100">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-100">
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    Type of work
                    <Select >
                        <SelectTrigger className="w-full border border-gray-100">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-100">
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    Task deacrotipn
                    <Textarea />
                </div>


                <div className="grid grid-cols-2 gap-2 ">
                    <Button className="w-full">
                        Add Entry
                    </Button>
                    <Button className="bg-white border text-black border-gray-100 w-full hover:bg-gray-100" onClick={handleClose}>
                        Cancel
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default AddTaskForm