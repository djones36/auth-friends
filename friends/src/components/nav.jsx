import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Nav = () => {
  return (
    <Menu>
      <Menu.Item>
        <NavLink to="/friends">Private Route</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          onClick={() => {
            localStorage.removeItem("token");
            window.location = "/";
          }}
        >
          Log Out
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
// import React, { Component } from 'react'

// export default class MenuExampleBasic extends Component {
//   state = {}

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
//       <Menu>
//         <Menu.Item
//           name='editorials'
//           active={activeItem === 'editorials'}
//           onClick={this.handleItemClick}
//         >
//           Editorials
//         </Menu.Item>

//         <Menu.Item
//           name='reviews'
//           active={activeItem === 'reviews'}
//           onClick={this.handleItemClick}
//         >
//           Reviews
//         </Menu.Item>
//       </Menu>
//     )
//   }
// }
