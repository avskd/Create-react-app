import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faThList, faTicketAlt, faLockOpen, faEye, faChartArea } from '@fortawesome/free-solid-svg-icons'
class HeaderZone extends React.Component {

    render() {

        return (
            <div className="bg-indigo-darkest text-purple-lighter flex-none w-24 p-6 hidden md:block">
                <div className="cursor-pointer mb-4">
                    <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
                        <img src="https://pbs.twimg.com/profile_images/895274026783866881/E1G1nNb0_400x400.jpg" alt="" />
                    </div>
                </div>
                <div className="cursor-pointer mb-4">
                    <a href="/">
                        <div className="bg-indigo-lighter opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
                            <FontAwesomeIcon icon={faLockOpen} color="white" />
                        </div>
                        <div className="text-center text-white opacity-50 text-sm">Login</div>
                    </a>
                </div>
                <div className="cursor-pointer mb-4">
                    <a href="/Eamnet">
                        <div className="bg-indigo-lighter opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
                            <FontAwesomeIcon icon={faEye} color="white" />
                        </div>
                        <div className="text-center text-white opacity-50 text-sm">Eamnet</div>
                    </a>
                </div>
                <div className="cursor-pointer mb-4">
                    <a href="/ChatPage">
                        <div className="bg-indigo-lighter opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
                            <FontAwesomeIcon icon={faChartArea} color="white" />
                        </div>
                        <div className="text-center text-white opacity-50 text-sm">Chat</div>
                    </a>
                </div>
                <div className="cursor-pointer mb-4">
                    <a href="/GetExtractors">
                        <div className="bg-indigo-lighter opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
                            <FontAwesomeIcon icon={faChartArea} color="white" />
                        </div>
                        <div className="text-center text-white opacity-50 text-sm">Account Details</div>
                    </a>
                </div>
                <div className="cursor-pointer mb-4">
                    <a href="/GetRunningExtractors">
                        <div className="bg-indigo-lighter opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
                            <FontAwesomeIcon icon={faChartArea} color="white" />
                        </div>
                        <div className="text-center text-white opacity-50 text-sm">DrillDown</div>
                    </a>
                </div>
                <div className="cursor-pointer">
                    <div className="bg-white opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
                        <svg className="fill-current h-10 w-10 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" /></svg>
                    </div>
                </div>
            </div>
        )
    }
};



export default HeaderZone