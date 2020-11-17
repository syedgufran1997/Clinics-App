import React from 'react';
import ClinicCard from "../../components/ClinicCard/ClinicCard"
import homepagestyles from "./homepage.module.css"
import Searchbar from "../../components/SearchBar/SearchBar"
import dumData from "../../components/Dummydata/Data.json"
import Button from "../../components/Button/Button" 



const HomePage = (props) => {

    const data = dumData

    const navigateToAdminPage = () => {
        props.history.push("/admin_page")
    }

    const navigateToClinic = (item) => {
    props.history.push(`/clinic_page/${item.id}`);
    }  

    return (
        <div className={homepagestyles.contentwrap}>
            <div className={homepagestyles.heading} >
                <h1>The Greatest Wealth Is Health.</h1>
            </div>
            <div className={homepagestyles.cards}>
                <div className={homepagestyles.searchbar}>
                    <h1>Clinics For Your Care</h1>
                    <div className={homepagestyles.searchwrap}>
                        <Searchbar />
                    </div>
                    <div className={homepagestyles.adminButton}>
                  <Button
                    onClick={(e) => navigateToAdminPage(e)}
                    buttonName="Admin Page"
                    style={{
                      color: "white",
                      margin: "0.8em 2.5em",
                      boxShadow:"0px 1px 2.5px 2px grey"
                    }}
                  ></Button>
                </div>
                </div>
                <div className={homepagestyles.cardwrap} >
                    {data.map((item,id) => 
                    <div key={id}>
                    <ClinicCard key={id} src={item.img} name={item.name} address={item.address} contact={item.contact} timings={item.timings} onClick={() => navigateToClinic(item)} />
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}
 

  export default HomePage;
