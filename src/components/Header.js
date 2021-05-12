import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar} from "@material-ui/core";
import NotificationsNoneSharpIcon from "@material-ui/icons/NotificationsNoneSharp";
import ChatBubbleOutlineSharpIcon from "@material-ui/icons/ChatBubbleOutlineSharp";
import PowerSettingsNewSharpIcon from "@material-ui/icons/PowerSettingsNewSharp";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  searchInput: {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase placeholder="search" className={classes.searchInput} startAdornment={<SearchIcon fontSize="small" />}/>
          </Grid>

          <Grid item sm></Grid>

          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary" className={classes.btn}>
                <NotificationsNoneSharpIcon fontSize="small" />
              </Badge>
            </IconButton>

            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutlineSharpIcon fontSize="small" />
              </Badge>
            </IconButton>

            <IconButton>
              <PowerSettingsNewSharpIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}