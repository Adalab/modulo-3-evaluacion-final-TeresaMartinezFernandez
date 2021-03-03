import React from "react";
import User from "./User";

function UserList(props) {
  const listElements = props.users.map((user) => {
    console.log(user);
    return (
      <li key={user.id}>
        <User user={user} />
      </li>
    );
  });
  return (
    <section>
      <ul className="cards">{listElements}</ul>
    </section>
  );
}
export default UserList;
