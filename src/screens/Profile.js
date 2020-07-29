import React from 'react';
import MyNavBar from "../components/NavBar";
import './Profile.css'
import DetailCard from '../components/DetailCard';

const Profile = () => {
    return (
        //The navbar goes first

        <div>
            <MyNavBar/>
            <div className = "Heading-Div">
                <h1 className = "Heading" >My Profile</h1>
            </div>
            <div className = "Personal-Info" >
                <img src = "https://i.picsum.photos/id/774/200/300.jpg?grayscale&hmac=QdzOEN_8AJQxwRykftr7U6ar482liO9cxD_c6y72eVs" className = "Profile-Pic" ></img>
            </div>
            <div className = "Details" >
                <DetailCard label = "Name" description = "Karan Batavia"  />
                <DetailCard label = "Email" description = "kbatavia12gmail.com"  />
                <DetailCard label = "Phone Number" description = "7741068892"  />
            </div>
        </div>
    );
}


export default Profile;
