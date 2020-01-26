import React from "react";
import HeaderZone from "../components/HeaderZone";
import Sidebar from "../components/slack/Sidebar";
import ChatZone from "../components/slack/ChatZone";
import "../styles/App.css"


class ChatPage extends React.Component {

    render() {
        return (
            <div className="font-sans antialiased h-screen flex">
                <HeaderZone />
                <Sidebar />
                <ChatZone />
            </div>
        )
    }

}

export default ChatPage;