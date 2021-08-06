import React,{useState} from 'react';
import {BsHouse} from 'react-icons/bs';
import {SiDatadog} from 'react-icons/si';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'lightpink'
},
};
Modal.setAppElement('#root');
function refreshPage() {
    window.location.reload();
}
const Header = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <>
        <h1 id='color'><SiDatadog/></h1>
        <div id='startSlide'>
            <h1> Fun Dog <BsHouse/> </h1>
        </div>
        <div id='navbar'>
            <ul className='navlink'>
                <li href='#'><button className='btn' onClick={refreshPage}>Refresh</button></li>
                <li href='#'><button className='btn' onClick={() =>setModalIsOpen(true)}>Info</button></li>
            </ul>
        </div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles} >
            <h1>Welcome to Fun Dog House <BsHouse /></h1>
            <h2>hi, wrote this simple Web App for dog and puppy lovers. hope you like it.</h2>
            <hr></hr>
            <h2>Author:  Anagha</h2>
            <h2>Contact: anagha@gmail.com</h2>
            <p>Software: ReactJS REST-API</p>
            <p>Version: 6.0 July 2021</p>
            <p>Credit Images: 'https://dog.ceo/api/breeds/image/random/50' </p>
            <p>p/s:</p>
            <p>please contact me if you have any suggestions for this App.</p>
            <p>Do you like to learn Reactjs Programming? please contact me.</p>
            <div>
            <button className='btn' onClick={() => setModalIsOpen(false)}>Close</button>
            </div>
      </Modal>
        </>
    )
}

export default Header
