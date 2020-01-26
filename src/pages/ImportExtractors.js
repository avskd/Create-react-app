import React from "react";
import HeaderZone from "../components/HeaderZone";
import Body from "../components/emanate/body";
import GetExtractors from "../components/import/GetExtractors";



class ImportExtractors extends React.Component {

    render() {
        return (
            <div className="font-sans antialiased h-screen flex">
                < HeaderZone />
                < GetExtractors />

            </div>
        );
    }



}





export default ImportExtractors;