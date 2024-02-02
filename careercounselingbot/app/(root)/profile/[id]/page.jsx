// "use server";
import React from "react";
import { getUserById } from "../../../../lib/actions/user.action";
import Link from "next/link";
import Image from "next/image";

const ProfilePage = async ({ params, searchParams }) => {
  const userInfo = await getUserById(params.id);
  console.log(userInfo);

  return (
    <div className="w-full min-h-screen px-10 py-10 pt-8 text-black bg-gray-200 max-md:px-5">
      <div>
        <div className="w-full max-w-3xl mx-auto bg-white border-0 rounded-lg ">
          <div className="relative w-full border-0 rounded-sm">
            <Image
              src="https://th.bing.com/th/id/OIP.5sZcGKaaTozYowjU7EZ2VgHaEo?rs=1&pid=ImgDetMain"
              alt=""
              className="w-full h-64 border-0 rounded-t-lg max-md:h-44"
              width={500}
              height={500}
            />
            <Image
              className="absolute w-24 border-0 rounded-full max-md:w-20 -bottom-10 left-10 max-md:left-5"
              src={userInfo?.picture || "default-profile-image-url"} // replace with the actual user picture field
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="px-10 pb-5 pt-14 max-md:px-5">
            <p className="py-1 text-xl font-bold capitalize">{userInfo.name}</p>
            <p className="py-1 text-sm font-semibold caption-top">
              {userInfo?.educationLevel}
            </p>
            <p className="py-1 text-sm font-medium text-gray-600">
              {userInfo?.std}
            </p>
            <div className="flex flex-row items-center my-5 justify-items-start">
              <Link
                href="/EditProfile"
                class="mr-4 bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Edit Profile
              </Link>
            </div>
          </div>
          {/* Add more profile information as needed */}
        </div>
        <div className="w-full max-w-3xl p-5 px-10 mx-auto my-5 bg-white border-0 rounded-lg">
          <p className="py-1 text-lg font-semibold">Skills</p>
          <div className="flex flex-wrap py-2">
            <div className="mr-4 text-xs text-gray-700">
              {/* {skill} */} Hiii
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
