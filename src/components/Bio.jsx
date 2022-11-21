import React from 'react';
import profileIcon from '../assets/profileIcon.svg';
import { useState } from 'react';
import getPhotoUrl from 'get-photo-url';
import { db } from '../dexie'
import { useEffect } from 'react';

const Bio = () => {

    const [userDetails, setUserDetails] = useState({
        name: "Billy Bobby Joe",
        about: "Building an instagram clone!"

    });

    const [editFormIsOpen, setEditFormIsOpen] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(profileIcon);

    useEffect(() => {
        const setDataFromdb = async () => {
            const userDetailsFromDb = await db.bio.get('info');
            const profilePhotoFromDb = await db.bio.get('profilePhoto');
            userDetailsFromDb && setUserDetails(userDetailsFromDb);
            profilePhotoFromDb && setProfilePhoto(profilePhotoFromDb)
        }

        setDataFromdb()
    })

    const updateUserDetails= async (event) => {
        event.preventDefault()

        const objectData = {
            name: event.target.nameOfUser.value,
            about: event.target.aboutUser.value
        }

        setUserDetails(objectData)

        await db.bio.put(objectData, 'info')

        setEditFormIsOpen(false);
    };

    const updateProfilePhoto = async () => {
        const newProfilePhoto = await getPhotoUrl('#profilePhotoInput');
        setProfilePhoto(newProfilePhoto);

        await db.bio.put(newProfilePhoto, 'profilePhoto')
    }

    const editForm = (
        <form className='edit-bio-form' onSubmit={ (e) => updateUserDetails(e) }>
            <input type="text" id='' name='nameOfUser' defaultValue={userDetails?.name} placeholder='Your name'></input>
            <input type="text" id='' name='aboutUser' defaultValue={userDetails?.about} placeholder='About you'></input>

            <br />

            <button type='button' className='cancel-button' onClick={() => setEditFormIsOpen(false)}>Cancel</button>
            <button type='submit'>Save</button>
        </form>
    )

    const editButton = <button onClick={() => setEditFormIsOpen(true)}>Edit</button>



    return (
        <section className="bio">

            <input type='file' accept='image/*' name='photo' id='profilePhotoInput'></input>
            <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
                <div className="profile-photo" role="button" title="Click to edit photo">
                    <img src={profilePhoto} alt="profile"></img>
                </div>
            </label>

            <div className="profile-info">
                <p className="name">{userDetails.name}</p>
                <p className="about">{userDetails.about}</p>
                {editFormIsOpen ? editForm : editButton }
            </div>
        </section>
    )
}

export default Bio