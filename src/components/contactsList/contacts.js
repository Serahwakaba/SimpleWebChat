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
            "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
          id: 2,
          name: "Charles Njuguna",
          active: false,
          isOnline: false,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
          id: 3,
          name: "Amos Mathu",
          active: false,
          isOnline: false,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
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
        <button className="btn">
        <i className="fa fa-plus"></i>
        <span>New conversation</span>
      </button>
      <div className="contactlist__heading">
      <h2>Chats</h2>
      <button className="btn-nobg">
        <i className="fa fa-ellipsis-h"></i>
      </button>
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