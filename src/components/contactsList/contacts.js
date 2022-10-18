import React, { Component } from "react";
import "./contacts.css";


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
    </div>
      
          );
    }
}