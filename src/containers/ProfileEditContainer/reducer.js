import { UPDATE_IMAGE_PREVIEW } from './constants';

const initialState = { image_preview: { } };

export default function(state = initialState, action) {
  switch(action.type){
    case UPDATE_IMAGE_PREVIEW:
      return action.payload;
    default:
      return state;
  }
}