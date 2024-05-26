import React, { useState } from 'react';
import { Link} from 'react-router-dom'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../styles/Dropdown.css"
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function DropdownMenu({rendernewTop,setrendernewTop}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = async () => {
    try{
      await signOut(auth);
      setrendernewTop(false);
      navigate("/");
      console.log("Logged out successfully");

    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div className="dropdown" id='dropdown'>
        <div className="dropdown-button">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
            <AccountCircleIcon/>
            </button>
            <p>{rendernewTop ? "LogOut" : "LogIn"}</p>
        </div>
     
 
      {rendernewTop ? (isOpen && (
        <ul className="dropdown-menu" >
          <li>
            <Link to="/" className="dropdown-item" onClick={handleLogOut}>
              SignOut
            </Link>
          </li>

        </ul>
      )
      ): (isOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/login" className="dropdown-item">
              Login
            </Link>
          </li>

          <li>
            <Link to="/register" className="dropdown-item">
              Register
            </Link>
          </li>
        </ul>
      ))
    }
    </div>
  );
}

export default DropdownMenu;