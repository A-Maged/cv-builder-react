import React from 'react';

import Modal from './';
import { AnimateModalWrapper } from './SideModal.css';

const SideModal = props => {
   return (
      <AnimateModalWrapper>
         {props.show && (
            <Modal popupClassNames="popup" onClose={props.closeModal}>
               {props.children}
               <button onClick={props.closeModal}>close</button>
            </Modal>
         )}
      </AnimateModalWrapper>
   );
};

export default SideModal;
