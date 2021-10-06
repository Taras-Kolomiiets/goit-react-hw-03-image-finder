import { GET_IMAGES } from "../../components/searchbar/actions";

const initialState = {
  images: [],
};

const images = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return { ...state, images: action.payload };
    default:
      return state;
  }
};

export default images;
