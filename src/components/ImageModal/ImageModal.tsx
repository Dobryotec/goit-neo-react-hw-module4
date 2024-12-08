import Modal from 'react-modal';

import { IImageModalProps } from './imageModal.types';

import css from './ImageModal.module.css';

const ImageModal: React.FC<IImageModalProps> = ({ activeCard, closeModal, modalIsOpen }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={css.modal}
        overlayClassName={css.overlay}
        ariaHideApp={false}
      >
        <img className={css['modal-image']} src={activeCard} />
      </Modal>
    </div>
  );
};

export default ImageModal;
