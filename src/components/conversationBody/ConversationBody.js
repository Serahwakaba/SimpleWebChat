import React, { Component } from "react";
import "./conversationBody.css";
import ChatContent  from "../chatContent/chatContent";
import Contacts from "../contactsList/contacts";



export default class ConversationBody extends Component{

    render() {
        return (
          <div className="main__chat">
          <Contacts />

          <ChatContent />
          
          </div>
        );
      }
}