import React from "react";
import EditProfile from "../../../components/shared/forms/EditProfile";
import { getUserById } from "../../../lib/actions/user.action";
import {auth} from "@clerk/nextjs";
export default  async function page() {
  const {userId} = auth();

  const userInfo = await getUserById(userId);
  return (
    <div>
      <EditProfile user={userInfo} />
    </div>
  );
}
