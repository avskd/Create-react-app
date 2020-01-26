export default function uclsData() {
  console.log("Data")
    const macList = [{
        id: 1,
        deviceType: 'Ventilator',
        deviceModel: 'Phillips V60',
        mac: 'AC:23:3F:FA:3A:DD',
        location: '3rd Depot',
        assetID: 'VP-432214',
        usageState: '<span class="ui green label">IDLE<span>',
        statsData: getRangeData(-1, 100, 30),
        statsType: 2
    },
    {
        id: 2,
        deviceType: 'Ventilator',
        deviceModel: 'Phillips V60',
        mac: 'AC:23:3F:FA:3A:DF',
        assetID: 'VP-783215',
        location: '2rd Depot',
        usageState: '<span class="ui blue label">ACTIVE<span>',
        statsData: getRangeData(-1, 100, 30),
        statsType: 2
    },
    {
        id: 3,
        deviceType: 'Ventilator',
        deviceModel: 'Phillips V60',
        mac: 'AC:23:3F:FA:3A:03',
        assetID: 'VP-108975',
        location: 'Room CC-190',
        usageState: '<span class="ui green label">IDLE<span>',
        statsData: getRangeData(-1, 100, 30),
        statsType: 2
    },
    {
        id: 4,
        deviceType: 'Ventilator',
        deviceModel: 'Phillips V60',
        mac: 'AC:23:3F:FA:3A:42',
        assetID: 'VP-873503',
        location: 'Room CA-231',
        usageState: '<span class="ui blue label">ACTIVE<span>',
        statsData: getRangeData(-1, 100, 30),
        statsType: 2
    },
    {
        id: 5,
        deviceType: 'Ventilator',
        deviceModel: 'Phillips V60',
        mac: 'AC:23:3F:FA:3A:57',
        assetID: 'VP-258907',
        location: 'Room CA-124',
        usageState: '<span class="ui blue label">ACTIVE<span>',
        statsData: getRangeData(-1, 100, 30),
        statsType: 2
    },
    {
        id: 6,
        deviceType: 'Crash Cart',
        deviceModel: 'Harloff 6400',
        mac: 'AC:23:3F:FA:3A:0E',
        assetID: 'CC-127',
        location: 'PACU-West',
        usageState: '<span class="ui red label">NEEDS SERVICE<span>',
        statsData: getRangeBarData(-1, 20, 25).concat(1, 1, 1, 1, 1),
        statsType: 1
    },
    {
        id: 7,
        deviceType: 'Crash Cart',
        deviceModel: 'Harloff 6400',
        mac: 'AC:23:3F:FA:3A:19',
        assetID: 'CC-089',
        location: 'OR-8',
        usageState: '<span class="ui green label">READY<span>',
        statsData: getRangeBarData(-1, 20, 25).concat(0, 0, 0, 0, 0),
        statsType: 1
    },
    {
        id: 8,
        deviceType: 'Crash Cart',
        deviceModel: 'Harloff 6400',
        mac: 'AC:23:3F:FA:3A:C3',
        assetID: 'CC-023',
        location: 'Preop-1',
        usageState: '<span class="ui green label">READY<span>',
        statsData: getRangeBarData(-1, 20, 25).concat(0, 0, 0, 0, 0),
        statsType: 1
    },
    {
        id: 9,
        deviceType: 'Crash Cart',
        deviceModel: 'Harloff 6400',
        mac: 'AC:23:3F:FA:3A:65',
        assetID: 'CC-075',
        location: 'Cardiac-2',
        usageState: '<span class="ui green label">READY<span>',
        statsData: getRangeBarData(-1, 20, 25).concat(0, 0, 0, 0, 0),
        statsType: 1

    },
    {
        id: 10,
        deviceType: 'Crash Cart',
        deviceModel: 'Harloff 6400',
        mac: 'AC:23:3F:FA:3A:BB',
        assetID: 'CC-021',
        location: 'Core-1',
        usageState: '<span class="ui green label">READY<span>',
        statsData: getRangeBarData(-1, 20, 25).concat(0, 0, 0, 0, 0),
        statsType: 1
    }
    ];

    function getRangeBarData(max, min, range) {
        let sData = [];
        for (let i = 0; i < range; i++) {
            let num = getRandomInt(min, max);
            if (num >= 2) {
                num = 0;
            }
            sData.push(num);
        }
        return sData;
    }

    function getRangeData(max, min, range) {
        let sData = [];
        for (let i = 0; i < range; i++) {
            let num = getRandomInt(min, max);
            sData.push(num);
        }
        return sData;
    }

    let currData = [];
    currData = generateTags();

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomDevice() {
        const max = deviceList.length - 1;
        const index = getRandomInt(0, max);
        return deviceList[index];
    }

    function getRandomTimeStamp() {
        const durationGap = getRandomInt(0, 1000 * 60 * 15);
        const newDate = new Date().getTime() - durationGap;
        let dateToShow = moment(newDate).format('MM/DD/YY h:mm A');
        let dateTohide = moment(newDate).format('YYMMDDHHmm');
        return {
            display: `<span class="hide">${dateTohide}</span>${dateToShow}`,
            timestamp: newDate
        };
    }

    function getUsageState() {
        const max = usageState.length - 1;
        const index = getRandomInt(0, max);
        return usageState[index].name;
    }

    function getLocation() {
        const max = locations.length - 1;
        const index = getRandomInt(0, max);
        return locations[index];
    }

    function generateTags() {
        for (let i = 0; i < macList.length; i++) {
            const id = new Date().getTime();
            const lastSeen = getRandomTimeStamp();
            macList[i].lastSeen = lastSeen.display;
            macList[i].lastSeenTimestamp = lastSeen.timestamp;
            if (macList[i].statsType === 2) {
                macList[i].report = `<div data-id="${macList[i].id}" class="ui icon button" data-content="Download usage report"><span class="line-spark" values="${macList[i].statsData}">Loading..</span></div>`;
            } else {
                macList[i].report = `<div data-id="${macList[i].id}" class="ui icon button" data-content="Download usage report"><span class="bar-spark" values="${macList[i].statsData}">Loading..</span></div>`;
            }
        }
        return macList;
    }

    function getNewDate(timestamp) {
        const index = getRandomInt(0, 5);
        if (index !== 3) {
            return false;
        }
        let dateToShow = moment(timestamp + 1000 * 60).format('MM/DD/YY h:mm A');
        let dateTohide = moment(timestamp + 1000 * 60).format('YYMMDDHHmm');
        return {
            display: `<span class="hide">${dateTohide}</span>${dateToShow}`,
            timestamp: timestamp + 1000 * 60
        };
    }

    function refreshData() {
        for (let i = 0; i < currData.length; i++) {
            const newLastSeen = getNewDate(currData[i].lastSeenTimestamp);
            if (newLastSeen) {
                currData[i].lastSeen = newLastSeen.display;
                currData[i].lastSeenTimestamp = newLastSeen.timestamp;
            }
        }
        return currData.slice();
    }

    function getData() {
        return currData.slice();
    }

    function downloadCSV(id) {
        let tag = getTagByID(id);
        let name = tag.mac.replace(/\:/g, '_');
        let time = new Date();
        let min = time.getMinutes();
        let rem = Math.floor(min % 5)
        let endDate = moment(time).subtract(rem, 'm').toDate();
        let mainData = tag.statsData.slice().reverse();
        let rows = [];
        for (let i = endDate, count = 0; count < 30; i = i - (5 * 60 * 1000), count++) {
            rows.push([
                moment(i).format('MM/DD/YY h:mm A'),
                mainData[count]
            ]);
        }
        rows.unshift(['Timestamp', 'Utilization']);
        let csvContent = "data:text/csv;charset=utf-8," +
            rows.map(e => e.join(",")).join("\n");
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `${name}_report.csv`);
        document.body.appendChild(link);

        link.click();
    }

    function getTagByID(id) {
        for (const tag of currData) {
            if (tag.id === +id) {
                return tag;
            }
        }
        return false;
    }

    return {
        getData: getData,
        refreshData: refreshData,
        downloadCSV: downloadCSV,
    };

}