import * as React from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
  Hidden,
  Fab,
  Box 
} from "@material-ui/core";
import {  KeyboardArrowUp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

/*Icons */
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';


import SideDrawer from "./SideDrawer";
import HideOnScroll from "./HideOnScroll";
import BackToTopBtn from "../BackToTopBtn";

const useStyles = makeStyles({
  backgroundHeader: {
    backgroundColor: "white"
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color:"#16253f"
  },
  logo: {
    fontFamily: "'Parisienne', cursive",
    fontSize: "1.3rem",
    color:"#16253f"
  },
  customeText: {
    '& span':{
      fontSize: "0.7rem",
      letterSpacing: "1.5px",
      opacity: 0.9,
      "&:hover &:active": {
        opacity: 1
      }
    }    
  },

  navIcons: {
    padding: "0 8px",
    color: "#16253f",
  }
});

const navLinks = [
  { title: `home`, path: `/` },
  { title: `watches`, path: `/watches` },
  { title: `handbags`, path: `/handbags` },
  { title: `sunglasess`, path: `/contact` },
  { title: `about us`, path: `/about-us` },
  { title: `payments`, path: `/payments` }
];

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar position="fixed" >
          <Toolbar className={classes.backgroundHeader}>
            <Container maxWidth="lg" className={classes.navDisplayFlex}>
              <Box edge="start" color="inherit" aria-label="home" display="flex" alignSelf="center" mr="auto">
                <Box component="span" color="primary" className={classes.logo}>
                  Laccy
                </Box>
              </Box >

              <Hidden smDown>
                <List
                  component="nav"
                  aria-labelledby="main navigation"
                  className={classes.navDisplayFlex}
                  
                >
                  {navLinks.map(({ title, path }) => (
                    <a href={path} key={title} className={classes.linkText}>
                      <ListItem button>
                        <ListItemText primary={title}  className={classes.customeText}/>
                      </ListItem>
                    </a>
                  ))}
                </List>
              </Hidden>

              <List component="nav"
                  aria-labelledby="main navigation"
                  className={classes.navDisplayFlex}>
              <ListItem>
                    <SearchOutlinedIcon className={classes.navIcons}/>
                    <LocalMallOutlinedIcon className={classes.navIcons}/>
                    <PersonOutlineOutlinedIcon className={classes.navIcons}/>
                  </ListItem>
              </List>

              <Hidden mdUp>
                <SideDrawer navLinks={navLinks} />
              </Hidden>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />

      <BackToTopBtn>
        <Fab color="primary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTopBtn>
    </React.Fragment>
  );
};
export default Header;
