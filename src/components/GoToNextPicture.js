const goToNextPicture = (currentPictureIndex, picturesLength) => {
  return (currentPictureIndex + 1) % picturesLength;
};

export default goToNextPicture;
