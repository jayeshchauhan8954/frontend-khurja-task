// import React from 'react';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import { makeStyles } from '@mui/styles';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

// const Sidebar = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//         anchor="left"
//       >
//         <List>
//           <ListItem button>
//             <ListItemText primary="Home" />
//           </ListItem>
//           <ListItem button>
//             <ListItemText primary="About" />
//           </ListItem>
//           <ListItem button>
//             <ListItemText primary="Contact" />
//           </ListItem>
//         </List>
//       </Drawer>
//       <div className={classes.content}>
//         <h1>Main Content</h1>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react'

const Slidebar = () => {
  return (
    <div>
      <h1>Slidebar</h1>
    </div>
  )
}

export default Slidebar