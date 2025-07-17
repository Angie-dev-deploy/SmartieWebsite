import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import PropTypes from 'prop-types';

import "../styles/PartnerModal.css";

function PartnerModal(props) {
  const {isOpen, toggle, className, partnerName, partnerCountry, partnerFlag, partnerDescription, phone, email, contactPerson } = props;

  return (
    <div>
      
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className={className}
        backdrop={true}

      >
        <ModalHeader>
            <div className='modal-title'>
                <p className='modal-partner-name'>{partnerName}</p>
            </div>
            <div className='modal-partner-country'>
                <img src={partnerFlag} alt={`${partnerCountry} Flag`} className='modal-partner-flag' />
                <p className='modal-partner-country-name'>{partnerCountry}</p>
            </div>
        </ModalHeader>
        <ModalBody>
            <div className='modal-partner-details'>
               
                <div className='modal-partner-details'>
                    <p>Phone:</p> <p>{phone}</p>
                    <p>Email:</p> <p>{email}</p>
                    <p>Contact Person:</p> <p>{contactPerson}</p>
                </div>

                
            </div>
            <div className="modal-partner-description">
              {partnerDescription.split('\n').map((line, idx) =>
                line.trim() === '' ? <br key={idx} /> : <p key={idx}>{line}</p>
              )}
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

PartnerModal.propTypes = {
  className: PropTypes.string,
};

export default PartnerModal;