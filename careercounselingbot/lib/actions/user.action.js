"use server";
import { connectToDatabase } from "../../database";
import { User } from "../../database/user.model";

export const createUser = async (user) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log("Error creating user", error);
  }
};
