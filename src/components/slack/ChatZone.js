
import React from "react";

const DUMMY_DATA = [
    {
        senderID: 'perborgen',
        text: 'Hey, How is it going',
        time: '11:55'
    },
    {
        senderID: 'janedoe',
        text: 'Great! Job what about you ',
        time: '11:58'
    },
    {
        senderID: 'perborgen',
        text: 'Good to hear! I am great as well',
        time: '12:00'
    },
    {
        senderID: 'janedoe',
        text: 'What the status of the project',
        time: '12:01'
    }
]



class ChatZone extends React.Component {
    render() {

        return (
            <div className="flex-1 flex flex-col bg-white overflow-hidden">
                {/*  Top bar  */}
                <div className="border-b flex px-6 py-2 items-center flex-none">
                    <div className="flex flex-col">
                        <h3 className="text-grey-darkest mb-1 font-extrabold">#general</h3>
                        <div className="text-grey-dark text-sm truncate">
                            Chit-chattin' about ugly HTML and mixing of concerns.
                        </div>
                    </div>
                    <div className="ml-auto hidden md:block">
                        <div className="relative">
                            <input type="search" placeholder="Search" className="appearance-none border border-grey rounded-lg pl-8 pr-4 py-2" />
                            <div className="absolute pin-y pin-l pl-3 flex items-center justify-center">
                                <svg className="fill-current text-grey h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Chat messages --> */}
                <div className="px-6 py-4 flex-1 overflow-y-scroll">
                    {/* <!-- A message --> */}
                    {
                        DUMMY_DATA.map((message, index) => {

                            return (
                                <div key={index} className="flex items-start mb-4 text-sm">
                                    <div className="flex-1 overflow-hidden">
                                        <div>
                                            <span className="font-bold">{message.senderID}</span>
                                            <span className="text-grey text-xs">{message.time}</span>
                                        </div>
                                        <p className="text-black leading-normal">{message.text}</p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
                {/*  Footer bar  */}
                <div className="pb-6 px-4 flex-none">
                    <div className="flex rounded-lg border-2 border-grey overflow-hidden">
                        <span className="text-3xl text-grey border-r-2 border-grey p-2">
                            <svg className="fill-current h-6 w-6 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" /></svg>
                        </span>
                        <input type="text" className="w-full px-4" placeholder="Message #general" />
                    </div>
                </div>
            </div>

        )

    }
};

export default ChatZone