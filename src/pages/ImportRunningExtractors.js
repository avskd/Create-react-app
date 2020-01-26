import React from "react";
import HeaderZone from "../components/HeaderZone";
import Body from "../components/emanate/body";
import GetRunningExtractors from "../components/import/GetRunningExtractors";



class ImportRunningExtractors extends React.Component {

    render() {
        return (
            <div className="font-sans antialiased h-screen flex">
                < HeaderZone />
                < GetRunningExtractors />

            </div>
        );
    }



}





export default ImportRunningExtractors;