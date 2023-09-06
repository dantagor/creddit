import React from "react";
import { User } from "next-auth";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import UserAvatar from "./user-avatar";

function UserAccountNav({
  user,
}: {
  user: Pick<User, "name" | "image" | "email">;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={user} />
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}

export default UserAccountNav;
