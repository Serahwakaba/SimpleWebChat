import React, { Component } from "react";
import "./contacts.css";


export default class Contacts extends Component{

    render(){
        return ( <div className="main__contacts">
        <button className="btn">
        <i className="fa fa-plus"></i>
        <span>New conversation</span>
      </button>
      <h2>Chats</h2>
      <button className="btn-nobg">
        <i className="fa fa-ellipsis-h"></i>
      </button>
      
      </div>
          );
    }
}