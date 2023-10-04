import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { routhPath } from "../../constants/route";
function HeaderMenu(props) {
  return (
    <Menu
      id="basic-menu"
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.onClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
    <Link to={`${routhPath.categories}?category=popular`} style={{textDecoration:'none',color:'inherit'}}>
       <MenuItem onClick={props.onClose}>Popular</MenuItem>
    </Link>
    <Link to={`${routhPath.categories}?category=toprated`} style={{textDecoration:'none',color:'inherit'}}>
    <MenuItem onClick={props.onClose}>Top Rated</MenuItem>
    </Link>
    <Link to={`${routhPath.categories}?category=upcoming`} style={{textDecoration:'none',color:'inherit'}}>
    <MenuItem onClick={props.onClose}>Upcoming</MenuItem>
    </Link>

    </Menu>
  );
}
export default HeaderMenu;
