import { useState, useEffect } from "react";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();

        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="message">
        <div className="loader"></div>
        <h3>Loading Users...</h3>
        <p>Please wait while we fetch the data.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="message error">
        <h3>Something went wrong!</h3>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section>
      <div className="section-heading">
        <div>
          <h2>All Users</h2>
          <p>Manage and view user information</p>
        </div>

        <span className="count">
          Total Users: {users.length}
        </span>
      </div>

      <div className="user-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
}

export default UserList;