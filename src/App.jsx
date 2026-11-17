import Header from "./components/Header";
import UserList from "./components/UserList";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="container">
        <UserList />
      </main>

      <footer>
        <p>
          © 2026 User Management Dashboard 
          
        </p>
      </footer>
    </div>
  );
}

export default App;