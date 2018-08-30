import React from 'react';
import { css } from 'emotion';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const section = css`
   .title {
      font-size: 13px;
      margin: 10px 0;
   }
   .details {
      cursor: pointer;
      padding: 15px;
      margin-bottom: 25px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
   }
`;

export const AnimateModalWrapper = props => (
   <ReactCSSTransitionGroup
      transitionName={{
         enter: modalEnter,
         enterActive: modalEnterActive,
         leave: 'modal-leave',
         leaveActive: modalLeaveActive,
         appear: 'modal-appear',
         appearActive: 'modal-appearActive'
      }}
      transitionEnter={true}
      transitionEnterTimeout={500}
      transitionLeave={true}
      transitionLeaveTimeout={300}
      transitionAppear={false}
      transitionAppearTimeout={500}
   >
      {props.children}
   </ReactCSSTransitionGroup>
);

const modalEnter = css`
   /* opacity: 0; */
   transform: translateX(100%);
`;

const modalEnterActive = css`
   transition: all 500ms;
   transform: translateX(0);
   /* opacity: 1; */
`;

const modalLeaveActive = css`
   transition: all 500ms;
   transform: translateX(100%);
   /* opacity: 0; */
`;
