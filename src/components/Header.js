import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack  } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { Link , useHistory   } from "react-router-dom";
import {useState , useEffect} from 'react';

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    // console.log('From here console is starting')
    // console.log(isLoggedIn);
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    // console.log(isLoggedIn); // Using !! to convert token to boolean
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");  
    window.location.reload();
  };


  const username = localStorage.getItem("username");
  // console.log(username);

  if(hasHiddenAuthButtons){
    return(
      <Box className="header">
        <Box className="header-title">
          <Link to="/">
            <img src="logo_light.svg" alt="QKart-icon"></img>
          </Link>
        </Box>
        
        <Button
            className="explore-button"
            startIcon={<ArrowBackIcon />}
            variant="text"
            onClick={() => history.push("/")}
        >
          Back to explore
          </Button>
      </Box>
    )

  }

    return (
      <Box className="header">
        <Box className="header-title">
          <Link to="/">
            <img src="logo_light.svg" alt="QKart-icon" />
            </Link>
        </Box>

        {children}

        <Stack direction="row" spacing={1} align-items="center">
          {  isLoggedIn ?  (
            <div className="header-right-component">
                  <Avatar src="avatar.png" alt={username}/>
                  <p className="username-text">{username}</p>

                  <Button type="primary" onClick={handleLogout}>
                    LOGOUT
                </Button>
           </div>
          ) : (
            <>
             <Button className="explore-button" variant="text" onClick={() => history.push("/login")}>
                LOGIN
             </Button>
             <Button className="button" variant="contained" onClick={() => history.push("/register")}>
                REGISTER
             </Button>
            </>
          )
        }
        </Stack>
        </Box>
    )
      }



export default Header;
