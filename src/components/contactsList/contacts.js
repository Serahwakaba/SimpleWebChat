import React, { Component } from "react";
import "./contacts.css";
import ContactListItems from "./contactListItems";


export default class Contacts extends Component{

    render(){
        return ( <div className="main__contacts">
        <button className="btn">
        <i className="fa fa-plus"></i>
        <span>New conversation</span>
      </button>
      <div className="chatlist__heading">
      <h2>Chats</h2>
      <button className="btn-nobg">
        <i className="fa fa-ellipsis-h"></i>
      </button>
    </div>
    <div className="chatList__search">
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