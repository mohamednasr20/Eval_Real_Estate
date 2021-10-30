import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    borderRadius: '10px',
    width: (showMap) => (showMap ? 260 : 290),
    height: 346,
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 180,
    borderRadius: '10px',
  },
  flex: {
    display: 'flex',
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },

  subtitle: {
    marginRight: theme.spacing(1),
  },
  cardContent: {
    padding: theme.spacing(1),
  },
  favoriteIcon: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: '#ffffff',
    cursor: 'pointer',
  },
  chip: {
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(1),
  },
}));

export default useStyles;
