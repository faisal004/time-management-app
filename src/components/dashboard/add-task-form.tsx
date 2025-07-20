import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AddTaskForm = ({ onClose }: { onClose: () => void }) => {
    const [formData, setFormData] = useState({
        project: "",
        workType: "",
        description: "",
        hours: 1
    });

    const increaseHours = () => {
        setFormData(prev => ({
            ...prev,
            hours: Math.min(prev.hours + 1, 24)
        }));
    };

    const decreaseHours = () => {
        setFormData(prev => ({
            ...prev,
            hours: Math.max(prev.hours - 1, 0)
        }));
    };

    const handleSubmit = () => {
        if (!formData.project || !formData.workType || !formData.description.trim()) {
            alert("Please fill in all required fields");
            return;
        }

        console.log("Form Data Submitted:", {
            project: formData.project,
            workType: formData.workType,
            description: formData.description,
            hours: formData.hours,
            timestamp: new Date().toISOString()
        });

        setFormData({
            project: "",
            workType: "",
            description: "",
            hours: 1
        });

        alert("Entry added successfully!");
        onClose();
    };

    return (
        <div className=" space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 border-gray-200">Add New Entry</h2>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                    Select Project <span className="text-red-500">*</span>
                </label>
                <Select value={formData.project} onValueChange={(value) =>
                    setFormData(prev => ({ ...prev, project: value }))
                }>
                    <SelectTrigger className="w-full border border-gray-100">
                        <SelectValue placeholder="Choose a project" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-100">
                        <SelectItem value="project-1">E-commerce Website</SelectItem>
                        <SelectItem value="project-2">Mobile App Development</SelectItem>
                        <SelectItem value="project-3">Data Analytics Dashboard</SelectItem>
                        <SelectItem value="project-4">API Integration</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                    Type of Work <span className="text-red-500">*</span>
                </label>
                <Select value={formData.workType} onValueChange={(value) =>
                    setFormData(prev => ({ ...prev, workType: value }))
                }>
                    <SelectTrigger className="w-full border border-gray-100">
                        <SelectValue placeholder="Select work type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-100">
                        <SelectItem value="bug-fixes">Bug Fixes</SelectItem>
                        <SelectItem value="feature-development">Feature Development</SelectItem>
                        <SelectItem value="code-review">Code Review</SelectItem>
                        <SelectItem value="testing">Testing & QA</SelectItem>
                        <SelectItem value="documentation">Documentation</SelectItem>
                        <SelectItem value="meeting">Meeting</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                    Task Description <span className="text-red-500">*</span>
                </label>
                <Textarea
                    placeholder="Describe the task in detail..."
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="min-h-20 resize-none"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Hours Worked</label>
                <div className="flex w-32 items-center ">
                    <Button
                        size="sm"
                        className="w-10 h-8 rounded-l-full flex-1 bg-gray-200 hover:bg-gray-100 border border-gray-300 text-gray-800"
                        onClick={decreaseHours}
                        disabled={formData.hours <= 0}
                    >
                        −
                    </Button>
                    <div className="h-8  border w-full border-gray-300 flex items-center justify-center ">
                        <span className="text-sm font-semibold text-gray-800">{formData.hours}</span>

                    </div>
                    <Button
                        size="sm"
                        className="w-10 h-8 rounded-r-full flex-1 bg-gray-200 hover:bg-gray-100 border border-gray-300 text-gray-800"
                        onClick={increaseHours}
                        disabled={formData.hours >= 24}
                    >
                        +
                    </Button>
                </div>
            </div>

            <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <Button
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={handleSubmit}
                >
                    Add Entry
                </Button>
                <Button

                    className="flex-1 bg-white hover:bg-gray-100 border border-gray-300 text-gray-800"
                    onClick={onClose}
                >
                    Cancel
                </Button>
            </div>


        </div>
    );
};

export default AddTaskForm