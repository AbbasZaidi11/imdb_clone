import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { logoURL } from "../../constants/constant";
import MenuIcon from "@mui/icons-material/Menu";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//Components
import HeaderMenu from "./HeaderMenu";

const StyledToolBar = styled(Toolbar)`
  background-color: #121212;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;
  & > * {
    padding-left: 16px;
    padding-right: 16px;
  }
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }
  & > p {
    font-size: 14px;
    font-weight: 600;
  }
`;
const InputSearchBar = styled(InputBase)`
  background: white;
  height: 30px;
  width: 55%;
  border-radius: 5px;
`;
const Logo = styled("img")({
  width: 64,
});

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <StyledToolBar>
        <Logo src={logoURL} alt="logo" />
        <Box onClick={handleClick}>
          <MenuIcon />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu anchorEl={anchorEl} open={open} onClose={handleClose} />
        <InputSearchBar />
        <Box>
          <Typography>IMDb</Typography>
          <Typography>Pro</Typography>
        </Box>
        <Box>
          <BookmarkAddIcon />
          <Typography>Watchlist</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMoreIcon />
        </Box>
      </StyledToolBar>
    </AppBar>
  );
}
export default Header;
