function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-top">
        <div className="avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <div>
          <h3>{user.name}</h3>
          <p>@{user.username}</p>
        </div>

        <span className="user-id">#{user.id}</span>
      </div>

      <div className="user-details">
        <p>
          <strong>Email:</strong>
          <span>{user.email}</span>
        </p>

        <p>
          <strong>Phone:</strong>
          <span>{user.phone}</span>
        </p>

        <p>
          <strong>Website:</strong>
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noreferrer"
          >
            {user.website}
          </a>
        </p>
      </div>
    </div>
  );
}

export default UserCard;