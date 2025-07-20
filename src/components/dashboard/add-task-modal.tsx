"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddTaskForm from "@/components/dashboard/add-task-form";
import { Plus } from "lucide-react";
import { useState } from "react";

const AddTaskModal = () => {
   const [open,setOpen]=useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}> 
      <DialogTrigger asChild>
        <Button className="bg-[#E1EFFE] border-2 flex items-center gap-2 border-[#1A56DB] text-[#1A56DB] border-dotted hover:bg-[#1A56DB]/20">
          <Plus className="size-4" />
          <span>Add new task</span>
        </Button>
      </DialogTrigger>
      <DialogContent >
        <DialogHeader className="hidden">
          <DialogTitle>Add new task</DialogTitle>
        </DialogHeader>
        <AddTaskForm onClose={() => {setOpen(false)}} />
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskModal;
