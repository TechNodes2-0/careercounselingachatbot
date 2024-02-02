"use server";
import React from "react";
import {getUserById} from '../../../../lib/actions/user.action';
// import { useRouter } from 'next/router';
import Link from "next/link";
import { auth } from "@clerk/nextjs";

// Dummy user data
const dummyUser = {
  img: "https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png",
  name: "John Doe",
  username: "johndoe123",
  discription: "Ui/Ux designer , web developer, AI/ML developer",
  email: "johndoe@example.com",
  skills: ["UI/UX Design", "Web Development", "AI/ML", "HTML", "CSS"],
  joinedAt: new Date().toISOString(), // Assuming current date for joinedAt
};

const ProfilePage = async({params,searchParams}) => {
  const {userId: clerkId} =auth();
  const userInfo = await getUserById({userId: params.id});
  return (
    <div className="px-10 pt-8 text-black w-full bg-gray-200 min-h-screen py-10  max-md:px-5">
      {userInfo ? (
        <div>
          <div className="max-w-3xl w-full mx-auto bg-white border-0 rounded-lg ">
            <div className="relative w-full border-0 rounded-sm">
              <img
                src="https://th.bing.com/th/id/OIP.5sZcGKaaTozYowjU7EZ2VgHaEo?rs=1&pid=ImgDetMain"
                alt=""
                className=" border-0 rounded-t-lg w-full h-64 max-md:h-44"
              />
              <img
                className="absolute  max-md:w-20 w-24 border-0 rounded-full -bottom-10 left-10  max-md:left-5"
                src={user.img}
                alt=""
              />
            </div>
            <div className="pt-14 pb-5 px-10  max-md:px-5">
              <p className="text-xl font-bold py-1"> {userInfo.user.name}</p>
              <p className="text-sm font-semibold py-1"> {dummyUser.discription}</p>
              <p className="text-sm font-medium text-gray-600 py-1">
                vadodara, Gujrat, India.
              </p>
              <div className="my-5 flex flex-row justify-items-start items-center">
                <Link href="/EditProfile" class="mr-4 bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Edit Profile
                </Link>
              </div>
            </div>
            {/* Add more profile information as needed */}
          </div>
          <div className="max-w-3xl w-full mx-auto bg-white p-5 my-5 border-0 rounded-lg px-10">
            <p className="text-lg font-semibold  py-1">Skills</p>
            <div className="flex flex-wrap py-2">
              {dummyUser.skills.map((skill, index) => (
                <div key={index} className="mr-4 text-xs text-gray-700">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
