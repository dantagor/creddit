import React from "react";
import { User } from "next-auth";
import { Avatar, AvatarFallback } from "./ui/avatar";

function UserAvatar({ user }: { user: Pick<User, "name" | "image"> }) {
  return (
    <Avatar>
      {user.image ? (
        <div className=""></div>
      ) : (
        <AvatarFallback></AvatarFallback>
      )}
    </Avatar>
  );
}

export default UserAvatar;
