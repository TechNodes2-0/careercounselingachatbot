"use client";
import { updateUser, getUserById} from "@/lib/actions/user.action";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { auth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


const EditProfile = ({user}) => {
  const {educationLevel,std,interest,achievement}=user;
  const { control, register, handleSubmit,setValue,reset } = useForm({
    defaultValues: {
      educationLevel,
      std,
      interest,
      achievement,
    },
  });
const router = useRouter();
const {userId}=auth;



  const onSubmit = async(data) => {
    try {
      
    const{educationLevel,std,interest,achievement}=data;
    const updatedUser={...user,educationLevel,std,interest,achievement};
        await updateUser(updatedUser);
        reset();
        router.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-900">
      {/* Comment Form */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800 sm:text-3xl dark:text-white">
              Tell us about yourself?
            </h2>
          </div>

          {/* Card */}
          <div className="relative z-10 p-4 mt-5 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="education-level"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Level of Education:
                </label>
                <select
                  {...register("educationLevel")}
                  id="education-level"
                  className="block w-full p-4 mt-1 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 form-select"
                >
                  <option value="">Select</option>
                  <option value="secondary">Secondary Education</option>
                  <option value="higherSecondary">
                    Higher Secondary Education
                  </option>
                </select>
              </div>

              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="std"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Standard:
                </label>
                <select
                  {...register("std")}
                  id="std"
                  className="block w-full p-4 mt-1 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 form-select"
                >
                  <option value="">Select</option>
                  <option value="9">9th</option>
                  <option value="10">10th</option>
                  <option value="11">11th</option>
                  <option value="12">12th</option>
                </select>
              </div>

              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="interest"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Interest
                </label>
                <textarea
                  {...register("interest", { required: false, maxLength: 20 })}
                  id="interest"
                  className="block w-full px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="What is Your Interest?"
                />
              </div>

              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="achievement"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Achievement
                </label>
                <textarea
                  {...register("achievement")}
                  id="achievement"
                  className="block w-full px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Tell Us about your achievement"
                />
              </div>

              <div className="grid mt-6">
                <input
                  className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
