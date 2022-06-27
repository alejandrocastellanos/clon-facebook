import React, {useState} from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import Mail from '@mui/icons-material/Mail';
import {AppBar, Avatar, Badge, Box, Fade, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import {Notifications} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}))

const Icons = styled(Box)(({theme})=>({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex",
    }
}))

const UserBox = styled(Box)(({theme})=>({
    display: "flex",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "none",
    }
}))

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: "none", sm: "block"}}}
                >
                    Facebook
                </Typography>
                <FacebookIcon
                    sx={{ display: { xs: "block", sm: "none"}}}
                />
                <Search><InputBase placeholder="search..."/></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{width:"30", height:"30"}}
                        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        onClick={e=>setOpen(true)}
                    />
                </Icons>
                <UserBox>
                    <Avatar
                        sx={{width:"30", height:"30"}}
                        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        onClick={e=>setOpen(true)}
                    />
                    <Typography variant="span">
                        Alejo C.
                    </Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    "aria-labelledby": "fade-button",
                }}
                open={open}
                onClose={e=>setOpen(false)}
                TransitionComponent={Fade}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}

export default Navbar;