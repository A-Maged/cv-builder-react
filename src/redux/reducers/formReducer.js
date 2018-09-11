import * as actionTypes from '../actions/actionTypes';
// data is populated for now to speed up development
let initialState = {
   name: 'mick ross',
   email: 'mick.ross@oulook.com',
   phone: '+201234567890',
   summary: `i'm a passionate web developer looking for gaining experience by working in a big firm like yours, i'm a passionate lawyer looking for gaining experience .`,
   education: `graduated from M.I.T in 2018 with a GBA of 3.8`,
   location: 'united states, nyc',
   website: 'A-MAGED.GITHUB.IO/SLEEPCODING-BLOG/',
   selectedTemplate: '1'
};

export default function formReducer(state = initialState, action) {
   switch (action.type) {
      case actionTypes.formEdit:
         return {
            ...state,
            ...action.value
         };

      default:
         return state;
   }
}
