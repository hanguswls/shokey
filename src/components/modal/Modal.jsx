import { createPortal } from 'react-dom';
import useModal from '../../hooks/useModal';
import './Modal.css';
import closeBtn from '/close_btn.png';

function Modal({title, contents}) {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  return createPortal (
    <dialog className='modal' onClick={closeModal}>
      <div className='modal-contents' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h2 className='modal-title'>{ title }</h2>
          <img src={closeBtn} className='modal-close-btn' onClick={closeModal} />
        </div>
        { contents }
      </div>
    </dialog>,
    document.body
  );
}

export default Modal;