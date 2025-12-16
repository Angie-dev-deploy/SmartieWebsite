import {useEffect} from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import PropTypes from 'prop-types';

import Aos from 'aos';
import 'aos/dist/aos.css';

import "../styles/ImagesScrollModal.css";

function ImagesScrollModal(props) {
  const {isOpen, toggle, className, images } = props;

  useEffect(() => {
    Aos.init({ duration: 500, once: true });
  }, []);

  return (
    <div>
      
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className={className}
        backdrop={true}

      >
        <ModalHeader>
            <div className='images-modal-title'>
                <p className='images-modal-title-text'>Pictures From Our Activities</p>
            </div>
            
        </ModalHeader>
        <ModalBody>
            <div className='modal-images-scroll-container'>
                {images.map((image, index) => (
                    <div key={index} className='modal-image-item'>
                        <img src={image} alt={`Activity ${index + 1}`} className='modal-image'/>
                    </div>
                ))}
            </div>
        </ModalBody>
        <ModalFooter>
          <Button className="close-button" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

ImagesScrollModal.propTypes = {
  className: PropTypes.string,
};

export default ImagesScrollModal;