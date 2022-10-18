import logo from './logo.svg';
import './App.css';
import Navigation from "./components/navigation/navigation";
import ConversationBody from "./components/conversationBody/chat";



function App() {
  return (
    <div className="__main">
    <Navigation />
    <ConversationBody />

    </div>
  );
}

export default App;
