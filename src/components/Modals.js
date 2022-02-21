import React from 'react';
import Modal from './Modal';
import { useModal } from '../hooks/useModal';
import ContactForm from './ContacForm';
import SongSearch from './songSearch'
import ModalPortal from './ModalPortal';

const Modals = () => {

  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  const [isOpenSong, openModalSong, closeModalSong] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);


  return (
    <div>
        <h2>Modals</h2>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>        
            <h3>Modal 1</h3>
            <p>Hola ese es el contenido de mi modal 1</p>
            <img src="https://placeimg.com/400/400/animals" alt='Animals'/>
        </Modal>

        <button onClick={openModal2}>Modal 2</button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>        
            <h3>Modal 1</h3>
            <p>Hola ese es el contenido de mi modal 1</p>
            <img src="https://placeimg.com/400/400/animals" alt='Animals'/>
        </Modal>

        <button onClick={openModalContact}>Modal Contacto</button>
        <Modal isOpen={isOpenContact} closeModal={closeModalContact}>        
          <ContactForm/>
        </Modal>

        <button onClick={openModalSong}>Modal Canciones</button>
        <Modal isOpen={isOpenSong} closeModal={closeModalSong}>
          <SongSearch/>
        </Modal>

        <button onClick={openModalPortal}>Modal Portal</button>
        <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>Modal 1</h3>
            <p>Este es el contenido de un modal que carga en otro nodo del DOM diferente a donde carga nuestra app de React, gracias a un React Portal.</p>
            <img src="https://placeimg.com/400/400/tech" alt='tech'/>
        </ModalPortal>
    </div>
  )
}

export default Modals