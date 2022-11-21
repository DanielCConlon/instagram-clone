import profileIcon from '../assets/profileIcon.svg';

const Bio = () => {

    const editForm = (
        <form className='edit-bio-form'>
            <input type="text" id='' placeholder='Your name'></input>
            <input type="text" id='' placeholder='About you'></input>

            <br />

            <button type='button' className='cancel-button'>Cancel</button>
            <button type='button'>Save</button>
        </form>
    )


    return (
        <section className="bio">
            <div className="profile-photo" role="button" title="Click to edit photo">
                <img src={profileIcon} alt="profile"></img>
            </div>
            <div className="profile-info">
                <p className="name">Billy Bobby Joe</p>
                <p className="about">Building an instagram clone!</p>
                <button>Edit</button>
                {editForm}
            </div>
        </section>
    )
}

export default Bio