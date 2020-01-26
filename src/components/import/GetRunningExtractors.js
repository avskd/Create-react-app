import React from "react";
import { MDBDataTable, MDBBtn } from 'mdbreact';




class GetRunningExtractors extends React.Component {

    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    handleCheck(e) {
        alert(e.target);
    }


    componentDidMount() {
        let food_api = "e40154060a1d40bc84ac83f89494362bf24b5b8709064bef6e39aafa8e3667339d400ab7af9d76cbeff0b0c4798106fd4d1dbc2f15115baffe833fced3b2e5184e36578aa4ebffb91c0a46096d347872";
        let Deloitte_api = "1825f268a2b34e2bb23a024b2128a74f7f4542e0918fda097aacfdcddbf7e736405c66e1b165a83d093dca5c8bb58a3ee9814316006bc8b7fb807ff17e0e6ad671e791648163bad4c8b7600145ec93e7"
        let api = "f94246b42d8648039d3925905b37f0133b7697ecb0eeec2324316bf06036248b214120718f564a1b2d075a18e49f6e1839d0458eaa6b24f113c70e3a5086151cd491218cbdbca916c85af458766f448b"
        fetch(`https://api.import.io/maestro/crawlRun/inProgress?type=extractor&_apikey=${food_api}`)
            .then(res => res.json())
            .then((json) => {
                console.log(json)
                let jsonData = json.map(extractor => {
                    return {
                        name: extractor.name,
                        guid: extractor.guid,
                        nextCrawlRunId: extractor.nextCrawlRunId,
                        parentExtractorGuid: extractor.parentExtractorGuid,
                        isChained: extractor.isChained,
                        parentTriggered: extractor.parentTriggered
                    }
                });
                this.setState({
                    users: jsonData
                });
            })
            .catch(error => {
                console.log(error);
            });
    };




    render() {

        const data = {
            columns: [
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Extractor ID',
                    field: 'guid',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Parent Extractor',
                    field: 'parentExtractorGuid',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Crawl ID',
                    field: 'nextCrawlRunId',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Chained',
                    field: 'isChained',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Parent Triggered',
                    field: 'parentTriggered',
                    sort: 'asc',
                    width: 270
                }
            ],
            rows: [...this.state.users.map((data, i) => (
                {
                    name: data.name,
                    guid: data.guid,
                    duplicateOfExtractorId: data.duplicateOfExtractorId,
                    nextCrawlRunId: data.nextCrawlRunId,
                    parentExtractorGuid: data.parentExtractorGuid,
                    isChained: data.isChained === "false" ? "TRUE " : "FALSE",
                    parentTriggered: data.parentTriggered === 'false' ? "TRUE" : "FALSE"
                }
            ))]
        };

        console.log(data)


        return (
            <div className="flex-1 flex flex-col bg-white overflow-hidden">
                {/*  Top bar  */}
                <div className="border-b flex px-6 py-2 items-center flex-none">
                    <div className="flex flex-col">
                        <h3 className="text-grey-darkest mb-1 font-extrabold">Get All the Running Extractor Details</h3>
                    </div>
                    <div className="ml-auto hidden md:block">
                        <div className="relative">
                            <select className="form-control" id="sel1">
                                <option>Deloitte_API</option>
                                <option>Two_sigma_2_API</option>
                                <option>Two_sigma_1_API</option>
                                <option>Deloitte_API</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* <!-- Chat messages --> */}
                <div className="px-6 py-4 flex-1 overflow-y-scroll">
                    <MDBDataTable
                        title={data.rows.guid}
                        bordered
                        hover
                        data={data}
                    />
                </div>
                {/*  Footer bar  */}
                <div className="pb-6 px-4 flex-none">
                    <div className="flex rounded-lg border-2 border-grey overflow-hidden">
                        <span onClick={this.handleCheck} className="text-3xl text-grey border-r-2 border-grey p-2">
                            <svg className="fill-current h-6 w-6 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" /></svg>
                        </span>
                        <input type="text" className="w-full px-4" placeholder="Add API KEY" />
                    </div>
                </div>
            </div>

        )

    }
};

export default GetRunningExtractors



