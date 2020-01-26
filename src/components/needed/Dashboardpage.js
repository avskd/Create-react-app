import React from 'react';

const Dashboardpage = () => {
    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>UCLS Portal</title>
            <link rel="shortcut icon" type="image/x-icon" href="./img/favicon.ico" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/dataTables.semanticui.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css" />
            <link rel="stylesheet" type="text/css" href="css/style.css?v=1.5" />

            <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"></script>
            <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
            <script src="https://cdn.datatables.net/1.10.19/js/dataTables.semanticui.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
            <script src="https://omnipotent.net/jquery.sparkline/2.1.2/jquery.sparkline.min.js"></script>
            <script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>
            <script src="js/data-generator.js?v=1.5"></script>

            <div className="ui fixed menu header">
                <div className="ui container">
                    <img className="logo" src="https://emanatewireless.github.io/ucls-demo-portal/img/logo.svg" />
                </div>
            </div>
            <div className="ui main-container">
                <div className="ui container">
                    <table className="ui celled table tag-table">
                        <thead>
                            <tr>
                                <th>Tag</th>
                                <th>Device Type</th>
                                <th>Make/Model</th>
                                <th>Asset ID</th>
                                <th>Last Heard</th>
                                <th>Usage State</th>
                                <th>Location</th>
                                <th>Usage History</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    );
};



export default Dashboardpage;