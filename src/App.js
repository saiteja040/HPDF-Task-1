import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import ReactDOM  from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App3 from './App3'
import App2 from './App2'
const styles = {
  title: {
    cursor: 'pointer',
  },
};
const App = () => (
  
  <MuiThemeProvider>
    <div>
    <App3/>
    </div>
    <div>
    <App2/>
  </div>
  </MuiThemeProvider>

);ReactDOM.render(

  <App />,
  document.getElementById('app')
);

export default App;
