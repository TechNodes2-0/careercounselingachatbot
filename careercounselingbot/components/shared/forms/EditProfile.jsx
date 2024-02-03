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
    <div className="bg-gray-100">
      {/* Comment Form */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800 sm:text-3xl dark:text-black">
              Update Your Information
            </h2>
          </div>

          {/* Card */}
          <div className="relative z-10 p-4 mt-5 bg-white shadow-lg border rounded-xl sm:mt-10 md:p-10 dark:bg-white dark:border-gray-300">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="education-level"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Level of Education:
                </label>
                <select
                  {...register("educationLevel")}
                  id="education-level"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Standard:
                </label>
                <select
                  {...register("std")}
                  id="std"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Interest
                </label>
                <textarea
                  {...register("interest", { required: false, maxLength: 20 })}
                  id="interest"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                 placeholder="What is Your Interest?"
                />
              </div>

              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="achievement"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Achievement
                </label>
                <textarea
                  {...register("achievement")}
                  id="achievement"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
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
