import { Outlet, Link } from 'react-router-dom'

const Layout = (props) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pages">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet></Outlet>
    </>
  )
}

export default Layout