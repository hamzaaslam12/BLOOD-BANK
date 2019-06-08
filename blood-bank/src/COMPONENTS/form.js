import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addUser} from '../STORE/ACTION/action';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import './main.css';


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
      },
      formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
      },
  }); 

class Form extends Component {
    constructor(){
        super();
        this.state = {
        rEmail : '',
        rName : '',
        rLName : '',
        rContact : '',
        rAge : '',
        rAddress : '',
        rPassword : '',
        rBloodGroup: '',
        opt: '',
        }

    }

    changeHandler = e => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    } 

    _saveData = () => {
        console.log('event called', this.state);
        this.props.cvb(this.state);
        
        this.setState({
            rEmail : '',
            rName : '',
            rLName : '',
            rContact : '',
            rAge : '',
            rAddress : '',
            rPassword : '',
    })
    }

render() {
    return( 
    <div id="rForm" className="width"> 
        
        {/* <button><Link to="login" component={LoginInPage}> LOGIN PAGE </Link></button> */}
    <h1>REGISTER FORM</h1> 

       
    <TextField
          id="rName"
          value = {this.state.input}
          onChange={this.changeHandler}
          label="FIRST NAME"
          className={this.props.textField}
          type="text"
          name="NAME"
          margin="normal"
          variant="outlined"
        />

        <br />
    <TextField
          id="rLName"
          value = {this.state.input}
          onChange={this.changeHandler}
          label="LAST NAME"
          className={this.props.textField}
          type="text"
          name="LAST NAME"
          margin="normal"
          variant="outlined"
        />

        <br />
    <TextField
          id="rEmail"
          value = {this.state.input}
          onChange={this.changeHandler}
          label="Email"
          className={this.props.textField}
          type="email"
          name="Email"
          margin="normal"
          variant="outlined"
        />

        <br />
    <TextField
          type="password"
          id="rPassword"
          value = {this.state.input}
          onChange={this.changeHandler}
          label="PASSWORD"
          className={this.props.textField}
          name="Password"
          margin="normal"
          variant="outlined"
        />

        <br />
    <TextField
          type="number"
          id="rContact"
          value = {this.state.input}
          onChange={this.changeHandler}
          label="CONTACT NUMBER"
          className={this.props.textField}
          name="CONTACT NUMBER"
          margin="normal"
          variant="outlined"
        />

        <br />
    <TextField
          type="number"
          id="rAge"
          value = {this.state.input}
          onChange={this.changeHandler}
          label="AGE"
          className={this.props.textField}
          name="AGE"
          margin="normal"
          variant="outlined"
        />

        <br />
    <TextField
          id="rAddress"
          value = {this.state.input}
          onChange={this.changeHandler}
          label="ADDRESS"
          className={this.props.textField}
          type="text"
          name="ADDRESS"
          margin="normal"
          variant="outlined"
        />

        <br />
        <div onChange={this.changeHandler}>
        <Radio
        checked={this.state.opt === 'donor'}
        id="opt"
        onChange={this.changeHandler}
        color="secondary"
        name="gender"
        value='donor'
        />DONOR
        <Radio
        checked={this.state.opt === 'receiver'}
        onChange={this.changeHandler}
        color="secondary"
        id="opt"
        value='receiver'
          name="gender"
        />RECEIVER

  </div>

<br />
<h5>PLEASE SELECT BLOOD GROUP!</h5>
<select className='select' id="rBloodGroup" onChange={this.changeHandler}>
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <option value="B+">B+</option>
  <option value="B-">B-</option>
  <option value="AB+">AB+</option>
  <option value="AB-">AB-</option>
  <option value="O+">O+</option>
  <option value="O-">O-</option>
</select>
<br /> 
<br /> 

<Button onClick={this._saveData} variant="contained" color="primary" className={this.props.button}>
        REGISTER
      </Button>

   </div>
         )
        } 

}

function mapDispatchToProp(dispatch){
    // console.log('dispatch ', dispatch)
    return({
        cvb: (rObj) => {                
            dispatch(addUser(rObj)) 
        }
    })
}

export default withStyles(styles)(connect(null,mapDispatchToProp)(Form));
