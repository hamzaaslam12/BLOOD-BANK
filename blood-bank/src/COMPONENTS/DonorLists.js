import React, { Component } from "react";
import {connect} from 'react-redux';
import './main.css';
import { getUser1, deleteUser1, filterUser } from '../STORE/ACTION/action';

class Donors extends Component {
  constructor(){
    super();
    this.state = {
      donors: []
    }
  }

 
  componentWillReceiveProps(nextProps){
    console.log(this.props.xyz) //empty
    console.log(nextProps) 
    if(nextProps.xyz !== this.props.xyz){
      this.setState({donors: nextProps.xyz})
    }
  }

  componentDidMount() {
    // console.log("event runnig")
    this.props.getUsers();
  }

  deleteItem = (row) => {
      console.log("user id: " + row.uid)
  
      this.props.deleteUser(row.uid)
    }


    onSelectBox = e => {
      console.log("select ", e.target.value)
      let group = e.target.value
      
      // this.props.uio.filter(checkDonor(e.target.value))
      console.log(group)
      if(group === "A+"){
        let arr = this.props.xyz.filter((donor) =>  { return (donor.bloodGroup === "A+" || donor.bloodGroup === "A-" || donor.bloodGroup === "O+" || donor.bloodGroup === "O-")});    
             console.log(arr)
             this.setState({
               donors: arr
             })
          }
          else if(group === "A-"){
            let arr = this.props.xyz.filter((donor) =>  { return (donor.bloodGroup === "A-" || donor.bloodGroup === "O-")});    
            console.log(arr)
            this.setState({
              donors: arr
            })
          }
          else if(group === "B+"){
            let arr = this.props.xyz.filter((donor) =>  { return (donor.bloodGroup === "B+" || donor.bloodGroup === "B-" || donor.bloodGroup === "O+" || donor.bloodGroup === "O-")});    
            console.log(arr)
            this.setState({
              donors: arr
            })
          }
          else if(group === "B-"){
            let arr = this.props.xyz.filter((donor) =>  { return (donor.bloodGroup === "B-" || donor.bloodGroup === "O-")});    
            console.log(arr)
            this.setState({
              donors: arr
            })
          }
          else if(group === "AB+"){
            let arr = this.props.xyz;    
            console.log(arr)
            this.setState({
              donors: arr
            })
          }
          else if(group === "AB-"){
            let arr = this.props.xyz.filter((donor) =>  { return (donor.bloodGroup === "A-" || donor.bloodGroup === "O-" || donor.bloodGroup === "B-" || donor.bloodGroup === "AB-")});    
            console.log(arr)
            this.setState({
              donors: arr
            })
          }
          else if(group === "O+"){
            let arr = this.props.xyz.filter((donor) =>  { return (donor.bloodGroup === "O+" || donor.bloodGroup === "O-")});    
            console.log(arr)
            this.setState({
              donors: arr
            })
          }
          else if(group === "O-"){
            let arr = this.props.xyz.filter((donor) =>  { return (donor.bloodGroup === "O-")});    
            console.log(arr)
            this.setState({
              donors: arr
            })
          }
            else if(group === "ALL"){
            let arr = this.props.xyz;
            console.log(arr);

            this.setState({
              donors: arr
            })
            }
    
    
        // console.log(arr)
        // this.setState({donors: arr});
      // this.props.filterUser1(e.target.value)
    }
    
render() {
  console.log(this.props.xyz)
    return (

      <div className='select'>

        <br />
<select className='select' onChange = {this.onSelectBox}>
  <option value="ALL">ALL</option>
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

        <table class="mdl-data-table mdl-js-data-table mdl-data-table--mdl-shadow--2dp">
        <thead>
    <tr>
      <th>NAME</th>
      <th>LAST NAME</th>
      <th>EMAIL</th>
      <th>FUNCTIONS</th>
    </tr>
  </thead>



  <tbody>
          
  {this.state.donors && this.state.donors.map((row) => {
            return(
          <tr key={row.uid}>
            <td class="mdl-data-table__cell--non-numeric">
          
              <li class="mdl-list__item mdl-list__item--two-line">
                <span class="mdl-list__item-primary-content">
                  <i class="material-icons mdl-list__item-avatar">person</i>
                  <span>{row.name}</span>
                </span></li>
            </td>
            <td class="mdl-data-table__cell--non-numeric">
          
              <li class="mdl-list__item mdl-list__item--two-line">
                <span class="mdl-list__item-primary-content">
                  <span>{row.lName}</span>
                </span></li>
            </td>
          
            <td class="mdl-data-table__cell--non-numeric">
          
              <li class="mdl-list__item mdl-list__item--two-line">
                <span class="mdl-list__item-primary-content">
                  <span>{row.email}</span>
                </span></li>
            </td>
           
            <td class="mdl-data-table__cell--non-numeric">
          
              <li class="mdl-list__item mdl-list__item--two-line">
                <span class="mdl-list__item-primary-content">
                  <span>
                 {/* Clored raised button */}
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={() => this.deleteItem(row)}>
          DELETE
          </button>
          
                  </span>
                </span></li>
            </td>
          
          </tr>
            )
          })} 
          
          </tbody> 
        </table>
      </div>
    )
};
}

// function mapDispatchToProp(dispatch){
//   // console.log('dispatch ', dispatch)
//   return({
//       jkl: (obj2) => {
//         console.log(obj2)             
//           dispatch(loginUser(obj2)) 
//       }
//   })
// }
function mapStateToProp(state) {
  return ({
    xyz: state.root.users
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    getUsers: () => {
      // console.log(getUser1())
      dispatch(getUser1())
    },

    deleteUser: (id) => {
      console.log('id user: ', id)
      dispatch(deleteUser1(id))
    },
    
    filterUser1: (opt) => {
      console.log(opt)
      dispatch(filterUser(opt))
    }

  });
};

export default connect(mapStateToProp, mapDispatchToProps)(Donors);
