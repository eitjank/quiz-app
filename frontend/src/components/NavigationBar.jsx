import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

function NavigationBar() {
    const {isAuthenticated, logout} = useAuth0();

    // Render the navbar only when user is authenticated
    if (!isAuthenticated) {
        return null;
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" sx={{
                    flexGrow: 1,
                    textDecoration: "none", // Remove underline
                    color: "inherit", // Use inherit color
                }}>
                    Quiz App
                </Typography>
                <Button color="inherit" component={Link} to="/profile">
                    Profile
                </Button>
                <Button color="inherit" onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;
