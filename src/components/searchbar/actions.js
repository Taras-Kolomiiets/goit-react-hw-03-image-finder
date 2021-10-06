export const GET_IMAGES = "GET_IMAGES";

export const getImagesActions = (payload) => {
  return {
    type: GET_IMAGES,
    payload,
  };
};
