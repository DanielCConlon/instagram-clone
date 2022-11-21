import pexel1 from '../assets/pexels1.jpeg';
import pexel2 from '../assets/pexels2.jpeg';
import pexel3 from '../assets/pexels3.jpeg';
import pexel4 from '../assets/pexels4.jpeg';
import pexel5 from '../assets/pexels5.jpeg';

const Gallery = () => {

    return (
        <>
            <input type="file" name='photo' id="addPhotoInput"></input>
            <label htmlFor="addPhotoInput">
                <i className="add-photo-button fas fa-plus-square"></i>
            </label>

            <section className='gallery'>
                <div className="item">
                    <img src={pexel1} className="item-image" alt=""></img>
                    <button className='delete-button'>Delete</button>
                </div>

                <div className="item">
                    <img src={pexel2} className="item-image" alt=""></img>
                    <button className='delete-button'>Delete</button>
                </div>

                <div className="item">
                    <img src={pexel3} className="item-image" alt=""></img>
                    <button className='delete-button'>Delete</button>
                </div>

                <div className="item">
                    <img src={pexel4} className="item-image" alt=""></img>
                    <button className='delete-button'>Delete</button>
                </div>

                <div className="item">
                    <img src={pexel5} className="item-image" alt=""></img>
                    <button className='delete-button'>Delete</button>
                </div>
            </section>
        </>
    )
}

export default Gallery