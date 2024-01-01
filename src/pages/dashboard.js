import * as React from 'react';
import {Routes, Route, useNavigate} from "react-router-dom"
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PostAddIcon from '@mui/icons-material/PostAdd';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import SwipeLeftOutlinedIcon from '@mui/icons-material/SwipeLeftOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Home, Logout, } from '@mui/icons-material';
import Post from './Post';
import Request from './AllRequest';
import About from './about';
import Termncondition from './termncondition';
import NewRequest from './newRequest';
import RejectRequest from './rejectRequest';
import Donation from './donation';
import Dashboard from './Home';
import SignIn from '../login/login';
// import PrivacyPolicy from './privacyPolicy';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [loginState,setloginState] =React.useState(true)


  React.useEffect(()=>{
    var login = localStorage.getItem("login")== null ? false:true
    console.log(login)
    setloginState(login)

  })

 

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const LogoutFunction = ()=>{
    localStorage.clear()
    navigate("/")
    
    console.log("test")
    setloginState(false)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <ListItem  disablePadding onClick={()=>navigate("/")}>
            <ListItemButton>
              <ListItemIcon>
                < Home/>
              </ListItemIcon>
              <ListItemText> Home </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>navigate("/post")}>
            <ListItemButton>
              <ListItemIcon>
                < PostAddIcon/>
              </ListItemIcon>
              <ListItemText> Post </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>navigate("/Request")}>
            <ListItemButton>
              <ListItemIcon>
                < RequestPageIcon/>
              </ListItemIcon>
              <ListItemText> Request </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>navigate("/newRequest")}>
            <ListItemButton>
              <ListItemIcon>
                < RequestPageIcon/>
              </ListItemIcon>
              <ListItemText> New Request </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>navigate("/rejectRequest")}>
            <ListItemButton>
              <ListItemIcon>
                < SwipeLeftOutlinedIcon/>
              </ListItemIcon>
              <ListItemText> Reject Request </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>navigate("/Donation")}>
            <ListItemButton>
              <ListItemIcon>
                < VolunteerActivismOutlinedIcon/>
              </ListItemIcon>
              <ListItemText> Donation </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>navigate("/Termncondition")}>
            <ListItemButton>
              <ListItemIcon>
                < GavelOutlinedIcon/>
              </ListItemIcon>
              <ListItemText> Term and Condition </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>navigate("/PrivacyPolicy")}>
            <ListItemButton>
              <ListItemIcon>
                < PolicyOutlinedIcon/>
              </ListItemIcon>
              <ListItemText>  Privacy Policy </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>navigate("/about")}>
            <ListItemButton>
              <ListItemIcon>
                < InfoOutlinedIcon/>
              </ListItemIcon>
              <ListItemText> About </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>LogoutFunction()}>
            <ListItemButton>
              <ListItemIcon>
               <LogoutOutlinedIcon/>
              </ListItemIcon>
              <ListItemText> Logout </ListItemText>
            </ListItemButton>
          </ListItem>

        
      
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (

    loginState?

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      
      
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Panal
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
         <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/post' element={<Post/>}></Route>
            <Route path='/Request' element={<Request/>}></Route>
            <Route path='/newRequest' element={<NewRequest/>}></Route>
            <Route path='/rejectRequest' element={<RejectRequest/>}></Route>
            <Route path='/Donation' element={<Donation/>}></Route>
            <Route path='/Termncondition' element={<Termncondition/>}></Route>
            {/* <Route path='/privacyPolicy' element={<PrivacyPolicy/>}></Route> */}
            <Route path='/about' element={<About/>}></Route>
            <Route path='/logout' element={<Logout/>}></Route>
         </Routes>
       
      </Box>
    </Box>
    :
    <SignIn/>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;