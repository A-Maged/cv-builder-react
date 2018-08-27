import React from 'react';
import Editor from '../../components/editor';
import SelectTemplate from '../../components/editor/SelectTemplate';

const EditingPage = () => {
   return (
      <div className="row">
         <div className="col-sm-4">
            <Editor />
         </div>
         <div className="col-sm-8">
            <SelectTemplate styleClasses="col-xs-6  col-sm-4" />
         </div>
      </div>
   );
};

export default EditingPage;
