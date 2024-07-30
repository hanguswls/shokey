import useCurrentPath from '../../hooks/useCurrentPath';
import './NavItem.css';
import { Link } from "react-router-dom";

function NavItem(props) {
  const {
    text,
    link
  } = props;
  const currentPath = useCurrentPath();

  return (
    <li className={"nav-item " + (currentPath === link ? "active" : "")}>
      <Link to={"/" + link}>
        {text}
      </Link>
    </li>
  )
}

export default NavItem;