import './Navbar.css';
import NavItem from "./NavItem";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavItem text={"Home"} link={""} />
        <NavItem text={"Become an Influencer"} link={"promote"} />
        <NavItem text={"Search Influencer"} link={"search"} />
        <NavItem text={"Posts"} link={"posts"} />
      </ul>
    </nav>
  )
}

export default Navbar;