function Header() {
  return (
    <header className="header">
      <div>
        <h1>User Management</h1>
        <p>API Integration using React useEffect</p>
      </div>
      <span className="api-status">
        <span className="status-dot"></span>
        API Connected
      </span>
    </header>
  );
}

export default Header;