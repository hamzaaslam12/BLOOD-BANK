import React, { Component } from "react";
import {connect} from 'react-redux';
import { getUser2, deleteUser2 } from '../STORE/ACTION/action';

class Receivers extends Component {

  componentDidMount() {
    // console.log("event runnig")
    this.props.getUsersR();
  }

deleteItem1 = (row) => {
console.log("user id: " + row.uid)

this.props.deleteUser3(row.uid)
}



render() {
  console.log(this.props.uio)
    return (

      <div>
        
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
          
          {this.props.uio.map((row) => {
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
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={() => this.deleteItem1(row)}>
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
    uio: state.root.userss
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    getUsersR: () => {
      dispatch(getUser2())
    },

    deleteUser3: (id) => {
      console.log('id user: ', id)
      dispatch(deleteUser2(id))
    },
  });
};

export default connect(mapStateToProp, mapDispatchToProps)(Receivers);
