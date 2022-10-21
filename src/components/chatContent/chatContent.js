import React, { Component, createRef } from "react";

import "./chatContent.css";
import Avatar from "../contactsList/avatar";
import ChatItem from "./chatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://images.unsplash.com/photo-1628144029346-8a98676311b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      type: "",
      msg: "Hi Wendy, How are you?",
    },
    {
      key: 2,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGNV_X1iEUX5A/profile-displayphoto-shrink_800_800/0/1635765669993?e=1671667200&v=beta&t=0OhwPs6MwV2Ej_aVHToHDX_RjqEABnMRHPOb5DhJ3Js",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGNV_X1iEUX5A/profile-displayphoto-shrink_800_800/0/1635765669993?e=1671667200&v=beta&t=0OhwPs6MwV2Ej_aVHToHDX_RjqEABnMRHPOb5DhJ3Js",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://images.unsplash.com/photo-1628144029346-8a98676311b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      type: "",
      msg: "Doing Greet too",
    },
    {
      key: 5,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGNV_X1iEUX5A/profile-displayphoto-shrink_800_800/0/1635765669993?e=1671667200&v=beta&t=0OhwPs6MwV2Ej_aVHToHDX_RjqEABnMRHPOb5DhJ3Js",
      type: "other",
      msg: "You really missed out on yesterdays ",
    },
    {
      key: 6,
      image:
        "https://images.unsplash.com/photo-1628144029346-8a98676311b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      type: "",
      msg: "Tell me how it all went",
    },
    {
      key: 7,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGNV_X1iEUX5A/profile-displayphoto-shrink_800_800/0/1635765669993?e=1671667200&v=beta&t=0OhwPs6MwV2Ej_aVHToHDX_RjqEABnMRHPOb5DhJ3Js",
      type: "other",
      msg: "Will call u later and tell the tea",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        if (this.state.msg !== "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://media-exp1.licdn.com/dms/image/C4D03AQGNV_X1iEUX5A/profile-displayphoto-shrink_800_800/0/1635765669993?e=1671667200&v=beta&t=0OhwPs6MwV2Ej_aVHToHDX_RjqEABnMRHPOb5DhJ3Js"
              />
              <p>Wendy Wangari</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}