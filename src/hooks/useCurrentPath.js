import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useCurrentPath() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(false);

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    setCurrentPath(path);
  }, [location])

  return currentPath;
}

export default useCurrentPath;