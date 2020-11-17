import React from 'react';
import clinicstyles from "./clinicstyles.module.css"
import dumData from "../../components/Dummydata/Data.json"
import DoctorCard from "../../components/DoctorCard/DoctorCard"

const Clinic = (props) => {

    const data  = dumData

    // const myData = () => {
    //     {data.filter(item => item.name === item.id).map((clinic) => <li>{clinic.name}</li>)}
    // }

    const {match: {params}} = props;

    return (
        <>
        {console.log("params id :- ", `${params.id}`)}


        <div className={clinicstyles.contentwrap}>
            <div className={clinicstyles.clinicdetails} >
                <h1>{data[params.id - 1].name} </h1>
                <img src={data[params.id - 1].img} alt="example" />
                <div className={clinicstyles.detailswrap}>
                   
                    <div className={clinicstyles.about}>
                        <h3>About :</h3>
                        <p>{data[params.id - 1].about}</p>
                    </div>

                    <div className={clinicstyles.address}>
                    <h3>Address</h3>
                    <h4>{data[params.id - 1].address}</h4>
                    </div>

                    <div className={clinicstyles.contact}>
                    <h3>Contact :</h3>
                    <h4>{data[params.id - 1].contact}</h4>
                    </div>

                   <div className={clinicstyles.timings}>
                   <h3>Timings :</h3>
                    <h4>{data[params.id - 1].timings}</h4>
                   </div>

                   <div className={clinicstyles.reviews}>
                       <h3>Reviews :</h3>
                       <div className={clinicstyles.comment}>
                       <h4>Lorem Epsum</h4>
                       <h5>Lorem ipsum, or lipsum as it is sometimes known, </h5>
                       <h4>Lorem Epsum</h4>
                       <h5>Lorem ipsum, or lipsum as it is sometimes known, </h5>
                       <h4>Lorem Epsum</h4>
                       <h5>Lorem ipsum, or lipsum as it is sometimes known, </h5>
                       </div>
                   </div>

                </div>
            </div>
        
            <div className={clinicstyles.clinicdoctors}>
                <h1>Doctors For You</h1>
                <div className={clinicstyles.doctorsCard}>
                    {data.map((item) => 
                    <DoctorCard name={item.doctor} address={item.address} contact={item.contact} timings={item.timings}  />
                    )}
                </div>
            </div>
        </div>
       
        </>
    );
}
 
 
export default Clinic;