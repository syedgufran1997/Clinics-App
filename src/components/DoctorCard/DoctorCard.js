import React from 'react';
import doctorstyles from "./doctorcard.module.css"
import HospitalImage from "../../assets/Images/medical-min.jpg"

const ClinicCard = (props) => {
    return (
        <div className={doctorstyles.contentwrap} onClick={props.onClick}>
            <img src={HospitalImage} alt="example" />
            <div className={doctorstyles.textwrap}>
                <h3>{props.name}</h3>
                <p>{props.contact}</p>
                <h5>{props.address}</h5>
                <p>{props.timings}</p>
            </div>
        </div>
    );
}
 
 
export default ClinicCard;