import React, { Component } from 'react';

import store from '../redux/store';
import templates from '../components/templates/';

class Preview extends Component {
   render() {
      const { form } = store.getState();

      const SelectedTemplateComponent = templates.filter(
         tmp => tmp.id === form.selectedTemplate
      )[0].template;

      return (
         <div className="preview">
            <SelectedTemplateComponent {...form} />
         </div>
      );
   }
}

export default Preview;
