import React, { useState, useEffect } from 'react';
import NavDrawer from './NavDrawer/NavDrawer';
import SearchField from '../SearchField/SearchField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/logo.png';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleChangeSearchType } from '../../actions/globalState';
import useStyles from './styles';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const dispatch = useDispatch();
  const classes = useStyles(location);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <div className={classes.grow}>
      <AppBar
        className={classes.nav}
        position="fixed"
        color={navbar ? 'inherit' : 'transparent'}
        elevation={navbar || location.pathname !== '/' ? 6 : 0}
      >
        <Container>
          <Toolbar>
            {isSmallScreen && (
              <div>
                <IconButton
                  className={classes.iconBtn}
                  size="medium"
                  onClick={() => setDrawerOpen(!drawerOpen)}
                  aria-label="open drawer"
                  color="inherit"
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </div>
            )}
            {isLargeScreen && location.pathname !== '/search' && (
              <div>
                <Link
                  to="/search"
                  className={`${classes.link} active`}
                  color="inherit"
                  onClick={() =>
                    dispatch(handleChangeSearchType('list-for-sale'))
                  }
                >
                  Buy
                </Link>
                <Link
                  to="/search"
                  className={classes.link}
                  color="inherit"
                  onClick={() =>
                    dispatch(handleChangeSearchType('list-for-rent'))
                  }
                >
                  Rent
                </Link>
                <Link
                  to="/search"
                  className={classes.link}
                  color="inherit"
                  onClick={() => dispatch(handleChangeSearchType('list-sold'))}
                >
                  Sold
                </Link>
              </div>
            )}

            <Link to="/" className={classes.logo}>
              <img src={logo} alt="oval logo" />
            </Link>
            {location.pathname === '/search' && <SearchField />}

            {isLargeScreen && (
              <div>
                <Link to="/" className={classes.link} color="inherit">
                  Advertise
                </Link>
                <Link to="/" className={classes.link} color="inherit">
                  Help
                </Link>
              </div>
            )}
            {isMobile && (
              <Button
                className={classes.authBtn}
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {isSmallScreen && (
        <NavDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      )}
    </div>
  );
};

export default Navbar;
