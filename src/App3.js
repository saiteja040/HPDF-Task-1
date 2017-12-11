import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import "./App.css";
import Paper from 'material-ui/Paper';
import ListItem from 'material-ui/List/ListItem';
import MuiThemeProvider from 'material-ui/styles/getMuiTheme';
import AutoComplete from 'material-ui/AutoComplete'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import { blue500 } from 'material-ui/styles/colors';
const style = {
position:'fixed',
Top:0,
opacity:1,
height: 50,
width: 1516,
};
export default class ToolbarExamplesSimple extends React.Component {
constructor(props) {
super(props);
this.state = {
dataSource : [],
inputValue : '',
};
}
handleChange = (event, index, value) => this.setState({value});
render() {
return ( 
<nav>
   <Paper style={style} >
      <div position="fixed" top="0">
         <FlatButton disabled={true}/>
         <FlatButton style={{marginBottom:10}}
         href="#"
         label='home'
         icon={<img src="logo1.png" height="20" width="20"/>}
         />
         <FlatButton style={{marginBottom:10}}
         href="#"
         label="Notifications"
         icon={<img src="logo2.png" height="20" width="20"/>}
         />
         <FlatButton style={{marginBottom:10}}
         href="#"
         label="messages"
         icon={<img src="logo3.png" height="20" width="20"/>}
         />
         <FlatButton disabled={true}/>
         <FlatButton disabled={true}/>
         <FlatButton disabled={true}/>
         <a href="#"><img src="main.png"  height="20" width="25" /></a>
         <FlatButton disabled={true}/>
         <FlatButton disabled={true}/>
         <FlatButton disabled={true}/>
         <input type="text" id="input" placeholder="Search Twitter"/>
         <input type="image" src="search.png" id="input_img" width="10" height="10"/>
         <IconMenu
         iconButtonElement={
         <IconButton touch={true}>
            <Avatar src="profile.jpg" size={30} />
            />
         </IconButton>
         }
         >
         <Menu>
            <MenuItem primaryText="Sai teja " 
               secondaryText="saimahesh040"/>
            <Divider/>
            <MenuItem primaryText="Profile" leftIcon={<img src="dp.png"/>} />
            <MenuItem primaryText="Lists" leftIcon={<img src="list.jpg"/>} />
            <MenuItem primaryText="Moments" leftIcon={<img src="m.jpg" />} />
            <Divider />
            <MenuItem primaryText="Twiiter ads" leftIcon={<img src="t.png"/>} />
            <MenuItem primaryText="Analytics" leftIcon={<img src="a.png"/>} />
            <Divider />
            <MenuItem primaryText="Setting and privacy" />
            <MenuItem primaryText="Help Center" />
            <MenuItem primaryText="Keyboard shortcuts" />
            <MenuItem primaryText="Log out" />
            <Divider/>
            <MenuItem primaryText="Night mode" rightIcon={<img src="n.png"/>}/>
         </Menu>
         </IconMenu>
         <FlatButton style={{marginBottom:20,backgroundColor:blue500,borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,}}
            href="#"
            label="Tweet"/>
      </div>
   </Paper>
</nav>
);
}
}