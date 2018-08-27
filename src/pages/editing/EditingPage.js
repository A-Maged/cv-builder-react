import React from 'react';
import Editor from '../../components/editor';
import SelectTemplate from '../../components/editor/SelectTemplate';

const EditingPage = () => {
   return (
      <div className="row">
         <div className="col-sm-4">
            <Editor />
         </div>
         <div className="select-template col-sm-8">
            <h4>select template</h4>
            <div className="row">
               <SelectTemplate styleClasses="col-sm-4 col-xs-6" />
            </div>
         </div>
      </div>
   );
};

export default EditingPage;
