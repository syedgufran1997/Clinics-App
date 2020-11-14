import React from 'react';
import adminStyles from "./adminstyles.module.css"
import AdminCard from "../../components/DoctorCard/DoctorCard"
import dummyData from "../../components/Dummydata/Data.json"
const Admin = () => {

    const AdminData = dummyData

    return (
        <div className={adminStyles.contentwrap}>
            <h1>List Of Users Signed Up</h1>
            <div className={adminStyles.cardwrap} >
                {AdminData.map((item) => 
                <AdminCard name={item.doctor} contact={item.email} address={item.address} />
                 )}
            </div>
        </div>
    );
}
 
 
export default Admin;