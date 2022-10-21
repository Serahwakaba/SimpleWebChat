import React from 'react';
import './App.css';
import Navigation from "./components/navigation/navigation";
import ConversationBody from "./components/conversationBody/ConversationBody";



function App() {
  return (
    <div className="__main">
    <Navigation />
    <ConversationBody />

    </div>
  );
}

export default App;
