import {Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link to="/">가지에 </Link>
          </li>
          <li>
            <Link to="h">희망의 말 </Link>
          </li>
          <li>
            <Link to="/e">새기어 놓고서</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </section>
  )
};

export default Layout;  