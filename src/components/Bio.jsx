import React from 'react';
import profileIcon from '../assets/profileIcon.svg';
import { useState } from 'react';


const Bio = () => {

    const [userDetails, setUserDetails] = useState({
        name: "Billy Bobby Joe",
        about: "Building an instagram clone!"

    });

    const [editFormIsOpen, setEditFormIsOpen] = useState(false);

    const updateUserDetails= (event) => {
        event.preventDefault()
        setUserDetails({
            name: event.target.nameOfUser.value,
            about: event.target.aboutUser.value
        })

        setEditFormIsOpen(false);
    };

    const editForm = (
        <form className='edit-bio-form' onSubmit={ (e) => updateUserDetails(e) }>
            <input type="text" id='' name='nameOfUser' placeholder='Your name'></input>
            <input type="text" id='' name='aboutUser' placeholder='About you'></input>

            <br />

            <button type='button' className='cancel-button' onClick={() => setEditFormIsOpen(false)}>Cancel</button>
            <button type='submit'>Save</button>
        </form>
    )

    const editButton = <button onClick={() => setEditFormIsOpen(true)}>Edit</button>

    return (
        <section className="bio">
            <div className="profile-photo" role="button" title="Click to edit photo">
                <img src={profileIcon} alt="profile"></img>
            </div>
            <div className="profile-info">
                <p className="name">{userDetails.name}</p>
                <p className="about">{userDetails.about}</p>
                {editFormIsOpen ? editForm : editButton }
            </div>
        </section>
    )
}

export default Bio