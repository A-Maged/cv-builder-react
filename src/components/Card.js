import React from 'react';
import { css } from 'emotion';

const Card = props => {
   return (
      <div className={cardStyle}>
         <div onClick={props.onClick} className="details">
            <h4 className="title">{props.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: props.details }} />
         </div>
      </div>
   );
};

const cardStyle = css`
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
export default Card;
