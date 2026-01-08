import { useEffect, useState } from "react";

function Users() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {

    fetch("https://dummyjson.com/users/6")
      .then(res => res.json())
      .then(setUser);

    document.title = `Count: ${count}`;

    console.log("Count updated:", count);

    return () => {
      console.log("Component unmounted");
    };
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>

      <hr />

      {user && <p>User: {user.firstName}</p>}
    </div>
  );
}

export default Users;
