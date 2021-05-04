import React from 'react';
import clsx from 'clsx';

import logo from './logo.svg';
import './App.css';
//Drawer
import Drawer from '@material-ui/core/Drawer';
//AppBar and Toolbar
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//Icons
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MenuIcon from '@material-ui/icons/Menu';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
//ListComponent
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
//Utils
import Typography from '@material-ui/core/Typography';
//<div>Icons made by <a href="" title="mynamepong">mynamep
import { ReactComponent as JoyIcon } from './joystick.svg';
import { ReactComponent as MovieIcon } from './popcorn.svg';
//Surface
import Grid from '@material-ui/core/Grid'
//theme
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



 // class App extends React.Component {
 //  constructor(props) {
 //    super(props);
 //
 //    this.state = {
 //            activepanel: 'panel1',
 //            sidebar: false,
 //            lastname:'',
 //            result: [],
 //            result2: [],
 //            result3: [],
 //            result4: [],
 //            result5: [],
 //            result6: [],
 //            result7: []
 //
 //
 //
 //
 //          }
 //          this.toggleDrawer=this.toggleDrawer.bind(this);
 //
 //
 //
 //
 //  }

// toggleDrawer () {
//   if (this.state.sidebar) {
//  				this.setState({ sidebar: false }) ;
//       }  	else {
//      this.setState({ sidebar: true }) ;
//   };
//
//  }
//
//
//
//  componentDidMount() {
// 	 }
//     render() {
//onClick={this.toggleDrawer}

  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

  export default function App() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };
		return (
    <div className={classes.root}>

<CssBaseline />
<AppBar
  position="fixed"
  className={clsx(classes.appBar, {
    [classes.appBarShift]: open,
  })}
>
  <Toolbar>
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      className={clsx(classes.menuButton, {
        [classes.hide]: open,
      })}
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" noWrap>
      Mini variant drawer
    </Typography>
  </Toolbar>
</AppBar>



     <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>

              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
          <ListItem >
              <ListItemIcon>
                 <WhatshotIcon />

             </ListItemIcon>
              <ListItemText primary={"Лента"} />
          </ListItem>
          <ListItem >
              <ListItemIcon>
                 <TrendingUpIcon />
             </ListItemIcon>
              <ListItemText primary={"Рейтинги"} />
          </ListItem>
          <ListItem >
              <ListItemIcon>
                 <SubscriptionsIcon />

             </ListItemIcon>
              <ListItemText primary={"Подписки"} />
          </ListItem>

          <Divider/>

          <ListItem >
                  <ListItemIcon>
                    <JoyIcon style={{height:'24px',      width: '24px'}} />

                 </ListItemIcon>
                  <ListItemText primary={"Подписки"} />
              </ListItem>
          <ListItem >
                      <ListItemIcon>
                        <MovieIcon style={{height:'24px',      width: '24px'}} />

                     </ListItemIcon>
                      <ListItemText primary={"Подписки"} />
          </ListItem>

          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Grid container spacing={4}>

               <Grid item xs={6} sm={8}>
                 <Paper className={classes.paper}>xs=6 sm=3</Paper>
               </Grid>
               <Grid item xs={6} sm={3}>
                 <Paper className={classes.paper}>
                 <List>

                     <ListItem >

                       <ListItemText primary={"Сомневаюсь, что доля КП во вложениях в фильм больше 50%, соответственно, не им решать."} />
                     </ListItem>
                     <ListItem >

                       <ListItemText primary={"Сомневаюсь, что доля КП во вложениях в фильм больше 50%, соответственно, не им решать"} />
                     </ListItem>

                 </List>
                 </Paper>
               </Grid>
   </Grid>
        </main>







  </div>
);
}









//
//   );
// }
// }






// export default App;
