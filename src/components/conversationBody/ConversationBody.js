import React, { Component } from "react";
import "./conversationBody.css";
import ChatContent  from "../chatContent/chatContent";
import Contacts from "../contactsList/contacts";
import UserProfile from "../userProfile/userProfile";



export default class ConversationBody extends Component{

    render() {
        return (
          <div className="main__chat">
          <ChatContent />
          <Contacts />
          <UserProfile />
           
          </div>
        );
      }
}