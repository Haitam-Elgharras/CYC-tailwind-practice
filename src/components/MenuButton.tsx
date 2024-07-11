import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

interface MenuButtonProps {
    showMenu: boolean;
    setShowMenu: (showMenu: boolean) => void;
}

const MenuButton = ({ showMenu, setShowMenu }: MenuButtonProps) => {

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth > 640)
            setShowMenu(false);
        };

        window.addEventListener("resize", handleResize);
    });

  return (
      <button
        className="hidden max-sm:block"
        onClick={() => setShowMenu(!showMenu)}
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
  );
};

export default MenuButton;
