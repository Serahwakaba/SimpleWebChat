import React, { Component } from "react";
import "./contacts.css";


export default class Contacts extends Component{

    render(){
        return ( <div className="main__contacts">
        <button className="btn">
        <i className="fa fa-plus"></i>
        <span>New conversation</span>
      </button>
        
      
      </div>
          );
    }
}