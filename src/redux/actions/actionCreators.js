import * as actionTypes from './actionTypes';

export const formNameChanged = value => ({
   type: actionTypes.formNameChanged,
   value
});

export const formEmailChanged = value => ({
   type: actionTypes.formEmailChanged,
   value
});

export const formPhoneChanged = value => ({
   type: actionTypes.formPhoneChanged,
   value
});

export const formSummaryChanged = value => ({
   type: actionTypes.formSummaryChanged,
   value
});

export const formEducationChanged = value => ({
   type: actionTypes.formEducationChanged,
   value
});

export const formLocationChanged = value => ({
   type: actionTypes.formLocationChanged,
   value
});

export const formWebsiteChanged = value => ({
   type: actionTypes.formWebsiteChanged,
   value
});
