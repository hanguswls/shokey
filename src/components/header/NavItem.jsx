import './NavItem.css';
import { Link } from "react-router-dom";

function NavItem(props) {
  const {
    text,
    link
  } = props;

  return (
    <li className="nav-item">
      <Link to={link}>
        {text}
      </Link>
    </li>
  )
}

export default NavItem;