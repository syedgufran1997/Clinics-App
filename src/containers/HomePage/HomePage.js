import React from 'react';
import ClinicCard from "../../components/ClinicCard/ClinicCard"
import homepagestyles from "./homepage.module.css"
import Searchbar from "../../components/SearchBar/SearchBar"
import dumData from "../../components/Dummydata/Data.json"

const HomePage = (props) => {
    const data = dumData

    const navigateToClinic = (id) => {
    props.history.push("/clinic_page",{id});
    }  


    return (
        <div className={homepagestyles.contentwrap}>
            <div className={homepagestyles.heading} >
                <h1>The Greatest Wealth Is Health.</h1>
            </div>
            <div className={homepagestyles.cards}>
                <div className={homepagestyles.searchbar}>
                    <Searchbar />
                </div>
                <div className={homepagestyles.cardwrap}>
                    {data.map((item) => 
                    <ClinicCard name={item.name} address={item.address} contact={item.contact} timings={item.timings} onClick={(e) => navigateToClinic(item)} />
                    )}
                </div>
            </div>
        </div>
    );
}
 

  export default HomePage;
