import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import "./Profile.css"

const Profile = () => {
    const {user, isLoading} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div className="profile">
            <img src={user.picture} alt={user.name} className="profile-picture"/>
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">{user.email}</p>
        </div>

    );
};

export default Profile;
