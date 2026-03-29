import { useState, useEffect } from "react";

function APIFetch() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  return (
    <div>
      {users?.map((u) => (
        <li>
          {u.id} - {u.name}
        </li>
      ))}
    </div>
  );
}

export default APIFetch;
