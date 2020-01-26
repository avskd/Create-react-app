import React from "react";
import { MDBDataTable, MDBBtn } from 'mdbreact';

const data = {
    columns: [
        {
            label: 'Tag',
            field: 'mac',
            sort: 'asc',
            width: 100
        },
        {
            label: 'Device Type',
            field: 'deviceType',
            sort: 'asc',
            width: 270
        },
        {
            label: 'Make/Model',
            field: 'deviceModel',
            sort: 'asc',
            width: 200
        },
        {
            label: 'Asset ID',
            field: 'assetID',
            sort: 'asc',
            width: 6788
        },
        {
            label: 'Usage State',
            field: 'usageState',
            className: 'align-center',
            sort: 'asc',
            width: 100
        },
        {
            label: 'Location',
            field: 'location',
            sort: 'asc',
            width: 100
        },
        {
            label: 'statsType',
            field: 'statsType',
            sort: 'asc',
            width: 100
        },
        {
            label: 'Usage History',
            field: '',
            sort: 'asc',
            width: 100
        }

    ],

    rows: [
        {
            id: 1,
            deviceType: 'Ventilator',
            deviceModel: 'Phillips V60',
            mac: 'AC:23:3F:FA:3A:DD',
            location: '3rd Depot',
            assetID: 'VP-432214',
            usageState: checkButton("IDLE"),
            statsType: 2
        },
        {
            id: 2,
            deviceType: 'Ventilator',
            deviceModel: 'Phillips V60',
            mac: 'AC:23:3F:FA:3A:DF',
            assetID: 'VP-783215',
            location: '2rd Depot',
            usageState: checkButton("ACTIVE"),
            statsType: 2
        },
        {
            id: 3,
            deviceType: 'Ventilator',
            deviceModel: 'Phillips V60',
            mac: 'AC:23:3F:FA:3A:03',
            assetID: 'VP-108975',
            location: 'Room CC-190',
            usageState: checkButton("IDLE"),
            statsType: 2
        },
        {
            id: 4,
            deviceType: 'Ventilator',
            deviceModel: 'Phillips V60',
            mac: 'AC:23:3F:FA:3A:42',
            assetID: 'VP-873503',
            location: 'Room CA-231',
            usageState: checkButton("ACTIVE"),
            statsType: 2
        },
        {
            id: 5,
            deviceType: 'Ventilator',
            deviceModel: 'Phillips V60',
            mac: 'AC:23:3F:FA:3A:57',
            assetID: 'VP-258907',
            location: 'Room CA-124',
            usageState: checkButton("ACTIVE"),
            statsType: 2
        },
        {
            id: 6,
            deviceType: 'Crash Cart',
            deviceModel: 'Harloff 6400',
            mac: 'AC:23:3F:FA:3A:0E',
            assetID: 'CC-127',
            location: 'PACU-West',
            usageState: checkButton("NEEDS SERVICE"),
            statsType: 1
        },
        {
            id: 7,
            deviceType: 'Crash Cart',
            deviceModel: 'Harloff 6400',
            mac: 'AC:23:3F:FA:3A:19',
            assetID: 'CC-089',
            location: 'OR-8',
            usageState: checkButton("READY"),
            statsType: 1
        },
        {
            id: 8,
            deviceType: 'Crash Cart',
            deviceModel: 'Harloff 6400',
            mac: 'AC:23:3F:FA:3A:C3',
            assetID: 'CC-023',
            location: 'Preop-1',
            usageState: checkButton("READY"),
            statsType: 1
        },
        {
            id: 9,
            deviceType: 'Crash Cart',
            deviceModel: 'Harloff 6400',
            mac: 'AC:23:3F:FA:3A:65',
            assetID: 'CC-075',
            location: 'Cardiac-2',
            usageState: checkButton("READY"),
            statsType: 1

        },
        {
            id: 10,
            deviceType: 'Crash Cart',
            deviceModel: 'Harloff 6400',
            mac: 'AC:23:3F:FA:3A:BB',
            assetID: 'CC-021',
            location: 'Core-1',
            usageState: checkButton("READY"),
            statsType: 1
        },
        {
            id: 10,
            deviceType: 'Crash Cart',
            deviceModel: 'Harloff 6400',
            mac: 'AC:23:3F:FA:3A:BB',
            assetID: 'CC-021',
            location: 'Core-1',
            usageState: checkButton("READY"),
            statsType: 1
        }
        ,
        {
            id: 10,
            deviceType: 'Crash Cart',
            deviceModel: 'Harloff 6400',
            mac: 'AC:23:3F:FA:3A:BB',
            assetID: 'CC-021',
            location: 'Core-1',
            usageState: checkButton("READY"),
            statsType: 1
        }
    ]
};


function checkButton(state) {
    let button = "";
console.log(state)
    if (state === "READY") {
        button = <MDBBtn color="purple" rounded size="sm" className="btn btn-success" >READY</MDBBtn>
    } else if (state === "NEEDS SERVICE") {
        button = <MDBBtn color="purple" rounded size="sm" className="btn btn-danger" >NEEDS SERVICE</MDBBtn>
    } else if (state === "ACTIVE") {
        button = <MDBBtn color="purple" rounded size="sm" className="btn btn-primary" >ACTIVE</MDBBtn>
    } else if (state === "IDLE") {
        button = <MDBBtn color="default" rounded size="sm" className="btn btn-warning" >IDLE</MDBBtn>
    }
    return button;
}


const Body = () => {
    return (
        <div id="background" className="container-fluid">
            <div className="tableCase">
                <MDBDataTable
                    title="fsgdfhg"
                    bordered
                    hover
                    data={data}
                />
            </div>
        </div>

    );
};


export default Body;