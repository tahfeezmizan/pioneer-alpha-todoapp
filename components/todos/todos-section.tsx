import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { TaskManager } from "./task-manager";

export default function TodosSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-10">
        <div className="">
          <h2 className=" text-4xl font-semibold">Todos</h2>
          <div className="border w-16 border-blue-500"></div>
        </div>
        <Button
          variant={"ghost"}
          className="bg-blue-500 text-white text-base py-3 rounded-md flex items-center justify-center gap-2"
        >
          <Plus className="size-5" /> New Task
        </Button>
      </div>
      <TaskManager />
    </div>
  );
}
