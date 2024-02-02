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
    <div className="px-10 mt-8">
      {user ? (
        <div className="mx-auto">
          <div className="relative w-full">
            <img
              src="https://th.bing.com/th/id/OIP.5sZcGKaaTozYowjU7EZ2VgHaEo?rs=1&pid=ImgDetMain"
              alt=""
            />
            <img
              className="absolute w-20 border-0 rounded-full -bottom-5 left-2"
              src={user.img}
              alt=""
            />
          </div>
          <h1 className="text-2xl font-bold mb-4">{user.name}'s Profile</h1>
          <p className="text-md font-semibold py-1"> {user.username}</p>
          <p className="text-sm font-medium  py-1"> {user.discription}</p>
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">Joined At:</span>{" "}
            {new Date(user.joinedAt).toLocaleString()}
          </p>
          {/* Add more profile information as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
