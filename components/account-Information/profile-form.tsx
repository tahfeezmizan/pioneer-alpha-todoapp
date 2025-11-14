"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  contactNumber: string;
  birthday: string;
}

export function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      contactNumber: "",
      birthday: "",
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log("Form submitted:", data);
    // Handle form submission here
  };

  const onCancel = () => {
    reset();
  };

  return (
    <div className="border-2 border-gray-200 rounded-lg p-8 bg-white">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              First Name
            </label>
            <input
              type="text"
              {...register("firstName", {
                required: "First name is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Last Name
            </label>
            <input
              type="text"
              {...register("lastName", {
                required: "Last name is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Address and Contact Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Address
            </label>
            <input
              type="text"
              {...register("address", {
                required: "Address is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              {...register("contactNumber", {
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9\-\+$$$$\s]{10,}$/,
                  message: "Invalid contact number",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contactNumber.message}
              </p>
            )}
          </div>
        </div>

        {/* Birthday */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Birthday
          </label>
          <div className="relative">
            <input
              type="date"
              {...register("birthday", {
                required: "Birthday is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          {errors.birthday && (
            <p className="text-red-500 text-sm mt-1">
              {errors.birthday.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            type="submit"
            className="w-52 bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-md text-base font-medium"
          >
            Save Changes
          </Button>
          <Button
            type="button"
            onClick={onCancel}
            className="w-52 bg-[#8CA3CD] hover:bg-gray-500 text-white px-12 py-4 rounded-md text-base font-medium"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
