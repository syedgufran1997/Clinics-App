import React from 'react';
import clinicstyles from "./clinicstyles.module.css"
import Hospital1 from "../../assets/Images/hospital1-min.jpg" 
import dumData from "../../components/Dummydata/Data.json"
import DoctorCard from "../../components/DoctorCard/DoctorCard"

const Clinic = () => {

    const data = dumData

    return (
        <>
        <div className={clinicstyles.contentwrap}>
            <div className={clinicstyles.clinicdetails}>
            <h1>Fortis Hospital</h1>
                <img src={Hospital1} alt="example" />
                <div className={clinicstyles.detailswrap}>
                   
                    <div className={clinicstyles.about}>
                    <h3>About :</h3>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                    </div>

                    <div className={clinicstyles.address}>
                    <h3>Address</h3>
                    <h4> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </h4>
                    </div>

                    <div className={clinicstyles.contact}>
                    <h3>Contact :</h3>
                    <h4>9663367311</h4>
                    </div>

                   <div className={clinicstyles.timings}>
                   <h3>Timings :</h3>
                    <h4>Open 24 hours</h4>
                   </div>

                   <div className={clinicstyles.reviews}>
                       <h3>Reviews :</h3>
                       <div className={clinicstyles.comment}>
                       <h4>Lorem Epsum</h4>
                       <h5>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</h5>
                       <h4>Lorem Epsum</h4>
                       <h5>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</h5>
                       <h4>Lorem Epsum</h4>
                       <h5>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</h5>
                       <h4>Lorem Epsum</h4>
                       <h5>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</h5>
                       <h4>Lorem Epsum</h4>
                       <h5>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</h5>
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