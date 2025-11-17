import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/league"> League</NavLink>
          <NavLink to="/team"> My Team</NavLink>
          <NavLink to="/players"> Players</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
