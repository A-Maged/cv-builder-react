import React from 'react';
import Editor from '../../components/editor';

const EditingPage = () => {
   return (
      <div className="row">
         <div className="col-sm-4">
            <Editor />
         </div>
         <div className="select-template col-sm-8">
            <h4>select template</h4>
            <div className="row">
               {/* dummy data */}
               <img className="col-sm-4" src="/images/brooklyn.jpeg" alt="" />
               <img className="col-sm-4" src="/images/brooklyn.jpeg" alt="" />
               <img className="col-sm-4" src="/images/brooklyn.jpeg" alt="" />
               <img className="col-sm-4" src="/images/brooklyn.jpeg" alt="" />
               <img className="col-sm-4" src="/images/brooklyn.jpeg" alt="" />
            </div>
         </div>
      </div>
   );
};

export default EditingPage;
