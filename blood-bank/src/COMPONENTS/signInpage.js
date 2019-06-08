import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {createUser} from '../STORE/ACTION/action';
import LoginInPage from './login';
import './main.css';


const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
      height: 200, 
    },
    button: {
        margin: theme.spacing.unit,
      },
  });



  class SignInPage extends Component {
      constructor(){
          super();
          this.state = {
              email : '',
              userName : '',
              password : '',
            }
            
        }
        
        changeHandler = e => {
            this.setState({
                [e.target.id]: e.target.value,
            })
        } 
    
        _changeData = () => {
            console.log('event called', this.state);
            this.props.abc(this.state);
            this.setState({
                email : '',
                userName : '',
                password : '',
                })
        }

    render() {
        // console.log(this.state); OK        
        return( 
        <div> 
            

            
      <div id="form">
            <h1>SIGN IN</h1> 

            <TextField
            value = {this.state.input}
            onChange={this.changeHandler}
          id="userName"
          label="Username"
          className={this.props.textField}
          type="text"
          margin="normal"
          
        />
        <br />
            <TextField
            value = {this.state.input}
            onChange={this.changeHandler}
          id="email"
          label="Email"
          className={this.props.textField}
          type="email"
          margin="normal"
        />
        <br />
            <TextField
          value = {this.state.input}
          onChange={this.changeHandler}
          id="password"
          label="Password"
          className={this.props.textField}
          type="password"
          margin="normal"
        />
<br />

<Button onClick={this._changeData} variant="contained" color="primary" className={this.props.button}>
<i className="material-icons">add</i>
      </Button>

      <Button color="secondary" className={this.props.button}>
      <Link to="login" component={LoginInPage}> LOGIN</Link>
      </Button>

        </div>
       </div>
             )
            } 
        }

function mapDispatchToProp(dispatch){
    // console.log('dispatch ', dispatch)
        return({
            abc: (obj) => {                
                dispatch(createUser(obj)) 
            }
        })
    }
    
export default withStyles(styles)(connect(null,mapDispatchToProp)(SignInPage));
