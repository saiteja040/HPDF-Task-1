import React from 'react';
import Paper from 'material-ui/Paper';
import "./App.css";
import { black, blue500 } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import { IconButton } from 'material-ui/IconButton';
import Divider from'material-ui/Divider';
import { IconMenu } from 'material-ui';
import { pink100 } from 'material-ui/styles/colors';
import { RaisedButton } from 'material-ui/RaisedButton';
import FlatButton from'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { spacing } from 'material-ui/styles';
import {BottomNavigationItem,BottomNavigation}from 'material-ui/BottomNavigation/BottomNavigationItem'
const style = {
height: 230,
width: 315,
marginLeft:95,
marginBottom:5,
marginTop:60
};
const styles={
height: 500,
width: 315,
margin: 20,
marginLeft:94
};
const styles1={
height: 1000,
width: 650,
marginLeft:10
};
const PaperExampleSimple = () => (
<div id="wrapper">
   <div id="first">
      <Paper style={style}>
         <div >
            <Paper style={{height:110,backgroundColor:blue500}}>
               <a>
                  <img id="profile" src="profile.jpg"/>
                  <p id="link"><b >Sai Teja</b><br/>@saimahesh040</p>
               </a>
            </Paper>
            <Paper style={{height:120}}>
               <div id="main">
                  <div id="tweet">
                     <a href="">
                        <p>Tweet<br/><b>4</b></p>
                     </a>
                  </div>
                  <div id="following">
                     <a href="">
                        <p>following<br/><b> 32</b></p>
                     </a>
                  </div>
                  <div id="followers">
                     <a href="">
                        <p>followers<br/><b>10</b></p>
                     </a>
                  </div>
               </div>
            </Paper>
         </div>
      </Paper>
      <Paper style={styles}>
         <p id="trend"><b>Trends for you.</b><a>Change</a></p>
         <p><b><a href="">#TEDTalksIndiaNayiSoch</a><br/></b>27.7K Tweets</p>
         <p><b><a href="">#TSKWithSunTV</a><br/></b>1,733 Tweets</p>
         <p><b><a href="">#INDvGER</a><br/></b>2,591 Tweets</p>
         <p><b><a href="">#KalakkuMachaanMaking</a><br/></b></p>
         <p><b><a  href="">#BanBeefInMeghalaya</a><br/></b>1,405 Tweets</p>
         <p><b><a href="">#HelloAudioLaunch</a><br/></b>@SamanthaPrabuFC is Tweeting about this</p>
         <p><b><a href="">JANASENA REVOLUTION</a><br/></b>28.6K Tweets</p>
         <p><b><a href="">#GhajinikanthFirstLook</a><br/></b></p>
         <p><b><a href="">#VelaikkaranSetMaking</a><br/></b></p>
      </Paper>
   </div>
   <div id="second">
      <div>
         <Paper style={{marginTop:60,width:650,height:60,marginLeft:10}}>
            <Avatar src="profile.jpg" size={40} style={{marginLeft:20,marginTop:10}}/>
            <textarea id="input1" placeholder="What's happening?" />
         </Paper>
      </div>
      <div>
         <Paper style={styles1}>
            <div>
               <div style={{height:1000,width:70,float:'left'}}>
                  <Avatar  src="sony1.png" size={60}/>
               </div>
               <div float="left">
                  <p><b>SonyMusic</b>@Sony_india.3h</p>
                  <p>With the power of 5.1 channel surround sound, who wouldn’t get immersed in
                     the picture? Presenting the <a href="" color="green">#SonyHomeTheatre</a> HT-RT3, whose rear speakers,
                     subwoofer & sound bar join forces to deliver authentic cinematic surround 
                     sound. Know more:<a href="" color='green'> https://goo.gl/jqgYQN</a> 
                  </p>
                  <img src="sony.jpg" width="580"/>
               </div>
            </div>
         </Paper>
      </div>
   </div>
   <div id="third">
      <Paper style={{width:300,height:400,marginLeft:30,marginTop:60}}>
         <p><b><a>Who to follow</a></b><a href="">.Refresh</a><a href="">.View all</a></p>
         <div>
            <div style={{height:1000,width:70,float:'left'}}>
               <Avatar  src="sony1.png" size={60}/>
               <Divider/>
               <br/>
               <Avatar  src="HP.png" size={60}/>
               <Divider/>
               <br/>
               <Avatar src="MI.png" size={60}/>
            </div>
            <div float="left">
               <a href="">
                  <p><b>Sony_india</b>@Sony_india</p>
               </a>
               <button type="submit">follow</button>
               <Divider/>
               <a href="">
                  <p><b>HP</b>@HP_india</p>
               </a>
               <button type="submit">follow</button>
               <Divider/>
               <a href="">
                  <p><b>MI</b>@MI_india</p>
               </a>
               <button type="submit">follow</button>
               <Divider/>
            </div>
         </div>
      </Paper>
      <Paper style={{width:300,height: 150,marginLeft:30,marginTop:20}}>
      <a href="">
         <p><b>Find people you know</b><br/>import your contacts from gmail</p>
      </a>
      </Paper>
   </div>
</div>
);
export default PaperExampleSimple;