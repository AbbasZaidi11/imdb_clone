import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
      <MenuItem onClick={props.onClose}>Popular</MenuItem>
      <MenuItem onClick={props.onClose}>Top Rated</MenuItem>
      <MenuItem onClick={props.onClose}>Upcoming</MenuItem>
    </Menu>
  );
}
export default HeaderMenu;
