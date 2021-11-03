import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  nav: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },

  logo: {
    marginLeft: ({ pathname }) => (pathname === '/' ? 'auto' : 0),
    marginRight: 'auto',
  },

  link: {
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: '400',
    color: theme.palette.text.primary,
    marginRight: theme.spacing(3),
  },
  activLink: {
    color: theme.palette.primary.main,
  },

  authBtn: {
    marginRight: theme.spacing(2),
    borderRadius: 25,
  },
}));

export default useStyles;
