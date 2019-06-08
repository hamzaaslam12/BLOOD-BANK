import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// import { getUser1, deleteUser1 } from '../STORE/ACTION/action';
import Donors from './DonorsList'
import Receivers from './ReceiversList'
import Form from './form'


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

class ShowList extends Component {
  

  // componentDidMount() {
  //   // console.log("event runnig")
  //   this.props.getUsers();
  // }



  // updateItem(id) {
  //   console.log(id)

  // // NOT GOING TO ANOTHER PAGE:
  // firebase.database().ref().child('users').updata()
  // //   this.setState({
  //   //     // name: this.props
  //   //   })
  //   // );
  //   // }
  // }  

  render() {
    // console.log(this.props.xyz)
    return (

      <div>
<br />  
<Button color="secondary" className={this.props.button}>
<Link to="/detail/form" component={Form}>
REGISTER YOURSELF
  </Link>

      </Button>
      
      <Button color="secondary" className={this.props.button}>
      <Link to="/detail/DonorsList" component={Donors}>
  DONORS LIST
  </Link>
      </Button>
      
      <Button color="secondary" className={this.props.button}>
      <Link to="/detail/ReceiversList" component={Receivers}>
  RECEIVERS LIST
  </Link>
      </Button>
{/* <h1>HELLO WORLD</h1> */}
      </div>
    )
  }

};

export default withStyles(styles)(ShowList); 