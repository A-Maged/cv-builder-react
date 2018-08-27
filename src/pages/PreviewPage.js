import React, { Component } from 'react';

import store from '../redux/store';
import templates from '../components/templates/';

class Preview extends Component {
   render() {
      const { form } = store.getState();

      const SelectedTemplate =
         (templates[form.selectedTemplate] &&
            templates[form.selectedTemplate].template) ||
         templates[0].template;

      return (
         <div className="preview">
            <SelectedTemplate {...form} />
         </div>
      );
   }
}

export default Preview;
