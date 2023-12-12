import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <h1>React Learning Course</h1>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2023 Vite React App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
