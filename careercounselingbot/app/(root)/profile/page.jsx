"use client";
import React from "react";
// import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

// Dummy user data
const dummyUser = {
  img: "https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png",
  name: "John Doe",
  username: "johndoe123",
  discription: "Ui/Ux designer , web developer, AI/ML developer",
  email: "johndoe@example.com",
  joinedAt: new Date().toISOString(), // Assuming current date for joinedAt
};

const ProfilePage = () => {
  // const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // const fetchUser = async () => {
    //   try {
    //     const response = await axios.get(`/api/user/${router.query.id}`); // Assuming you have an API route to fetch user data
    //     setUser(response.data);
    //   } catch (error) {
    //     console.error('Error fetching user:', error);
    //   }
    // };

    // if (router.query.id) {
    //   fetchUser();
    // }

    // Set dummy user data
    setUser(dummyUser);
  }, []);

  return (
    <div className="px-10 mt-8 text-black w-full">
      {user ? (
        <div className="max-w-3xl">
          <div className="relative w-full border-0 rounded-sm">
            <img
              src="https://th.bing.com/th/id/OIP.5sZcGKaaTozYowjU7EZ2VgHaEo?rs=1&pid=ImgDetMain"
              alt=""
              className=" border-0 rounded-md"
            />
            <img
              className="absolute w-20 border-0 rounded-full -bottom-10 left-5"
              src={user.img}
              alt=""
            />
          </div>
          <div className="py-10">
            <p className="text-lg font-bold py-1"> {user.username}</p>
            <p className="text-sm font-medium  py-1"> {user.discription}</p>
            <p className="text-sm font-medium text-gray-600">
              vadodara, Gujrat, India.
            </p>
            <div className="my-10">
              <p>
                <span className="font-semibold">Email:</span> {user.email}
              </p>
            </div>
          </div>
          {/* Add more profile information as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
