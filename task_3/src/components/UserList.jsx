import React from "react";

const ChildComponent = ({users})=> {
    return (
        <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    )
}
export default ChildComponent;