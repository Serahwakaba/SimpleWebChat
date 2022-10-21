import React, { Component } from "react";
import "./contacts.css";
import ContactListItems from "./contactListItems";


export default class Contacts extends Component{
    allChatUsers = [
        {
          image:
            "https://media-exp1.licdn.com/dms/image/C4D03AQGNV_X1iEUX5A/profile-displayphoto-shrink_800_800/0/1635765669993?e=1671667200&v=beta&t=0OhwPs6MwV2Ej_aVHToHDX_RjqEABnMRHPOb5DhJ3Js",
          id: 1,
          name: "Wendy Wangari",
          active: true,
          isOnline: true,
        },
        {
          image:
            "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          id: 2,
          name: "Charles Njuguna",
          active: false,
          isOnline: false,
        },
        {
          image:
            "https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          id: 3,
          name: "Amos Mathu",
          active: false,
          isOnline: false,
        },
        {
          image:
            "https://images.unsplash.com/photo-1504199367641-aba8151af406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          id: 4,
          name: "James Njuguna",
          active: false,
          isOnline: true,
        },
       
      ];

      constructor(props) {
        super(props);
        this.state = {
          allChats: this.allChatUsers,
        };
      }

    render(){
        return ( <div className="main__contacts">
    
      <div className="contactlist__heading">
      <h2>Whatsaap</h2>
  
    </div>
    <div className="contactList__search">
    <div className="search_wrap">
      <input type="text" placeholder="Search Here" required />
      <button className="search-btn">
        <i className="fa fa-search"></i>
      </button>
    </div>
  </div>
  <div className="contactList__items">
  {this.state.allChats.map((item, index) => {
    return (
      <ContactListItems
        name={item.name}
        key={item.id}
        animationDelay={index + 1}
        active={item.active ? "active" : ""}
        isOnline={item.isOnline ? "active" : ""}
        image={item.image}
      />
    );
  })}
  
  </div>
  </div>
      
          );
    }
}