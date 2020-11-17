import React from 'react';
import clinicstyles from "./cliniccard.module.css"


const ClinicCard = (props) => {
    return (
        <div className={clinicstyles.contentwrap} onClick={props.onClick} key={props.key}>
            <img src={props.src} alt="example" />
            <div className={clinicstyles.textwrap}>
                <h3>{props.name}</h3>
                <h5>{props.address}</h5>
                <div className={clinicstyles.contact}>
                    <p>{props.contact}</p>
                    <p>{props.timings}</p>
                </div>
            </div>
        </div>
    );
}
 
 
export default ClinicCard;