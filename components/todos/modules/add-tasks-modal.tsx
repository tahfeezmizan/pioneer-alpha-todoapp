"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Calendar, Plus } from "lucide-react";

interface AddTaskFormData {
  title: string;
  date: string;
  priority: "extreme" | "moderate" | "low";
  description: string;
}

interface AddTaskModalProps {
  onSubmit?: (data: AddTaskFormData) => void;
  triggerClassName?: string;
  triggerVariant?: "icon" | "button";
}

export function AddTaskModal({
  onSubmit,
  triggerClassName = "",
  triggerVariant = "icon",
}: AddTaskModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, watch, reset, setValue } =
    useForm<AddTaskFormData>({
      defaultValues: {
        title: "",
        date: "",
        priority: "moderate",
        description: "",
      },
    });

  const priority = watch("priority");

  const handleFormSubmit = (data: AddTaskFormData) => {
    onSubmit?.(data);
    reset();
    setIsOpen(false);
  };

  const handleDelete = () => {
    reset();
    setIsOpen(false);
  };

  const handleGoBack = () => {
    setIsOpen(false);
    reset();
  };

  return (
    <>
      {/* Trigger Button */}
      {triggerVariant === "icon" ? (
        <Button
          onClick={() => setIsOpen(true)}
          className={`bg-blue-500 text-white text-base py-3 rounded-md flex items-center justify-center gap-2 ${triggerClassName}`}
        >
          <Plus size={32} /> New Task
        </Button>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className={`bg-blue-600 hover:bg-blue-700 text-white ${triggerClassName}`}
        >
          Add Task
        </Button>
      )}

      {/* Modal Backdrop and Content */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Add New Task
                </h2>
                <div className="h-0.5 bg-blue-500 w-24 mt-1"></div>
              </div>
              <button
                onClick={handleGoBack}
                className="text-foreground hover:text-gray-600 underline text-sm font-medium"
              >
                Go Back
              </button>
            </div>

            {/* Form Content */}
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="p-6 space-y-6"
            >
              {/* Title Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Title
                </label>
                <Input
                  {...register("title", { required: "Title is required" })}
                  placeholder="Enter task title"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Date Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Date
                </label>
                <div className="relative">
                  <Input
                    {...register("date", { required: "Date is required" })}
                    type="date"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Priority Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Priority
                </label>
                <div className="flex gap-8">
                  {[
                    { value: "extreme", label: "Extreme", color: "bg-red-500" },
                    {
                      value: "moderate",
                      label: "Moderate",
                      color: "bg-green-500",
                    },
                    { value: "low", label: "Low", color: "bg-yellow-500" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        value={option.value}
                        {...register("priority")}
                        className="w-4 h-4 accent-blue-500"
                      />
                      <div
                        className={`w-3 h-3 rounded-full ${option.color}`}
                      ></div>
                      <span className="text-sm text-foreground">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Task Description Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Task Description
                </label>
                <textarea
                  {...register("description")}
                  placeholder="Start writing here....."
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={6}
                />
              </div>

              {/* Footer Actions */}
              <div className="flex justify-between items-center pt-4">
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium"
                >
                  Done
                </Button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
                  aria-label="Delete task"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
