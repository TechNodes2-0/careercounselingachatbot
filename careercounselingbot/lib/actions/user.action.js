"use server";
import { connectToDatabase } from "../../database";
import User from "../../database/user.model";

export const createUser = async (user) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log("Error creating user", error);
  }
};

export async function updateUser(clerkId, user) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log("Error deleting user", error);
  }
}

export async function deleteUser(clerkId) {
  try {
    await connectToDatabase();

    const deletedUser = await User.findOneAndDelete({ clerkId });

    if (!deletedUser) throw new Error("User deletion failed");
    return JSON.parse(JSON.stringify(deletedUser));
  } catch (error) {
    console.log("Error deleting user", error);
  }
}
