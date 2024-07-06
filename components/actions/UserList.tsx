import { fetchUsers } from "@/actions/user";
import React from "react";
import DeleteButton from "./DeleteButton";

async function UserList() {
  const users = await fetchUsers();

  return (
    <div>
      {users.length === 0 && <div>user not found...</div>}
      {users.length !== 0 &&
        users.map((user) => (
          <div key={user.id} className="flex gap-4">
            {user.firstName} {user.lastName}
            <DeleteButton id={user.id} />
          </div>
        ))}
    </div>
  );
}

export default UserList;
