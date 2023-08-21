const goToPreviousPicture = (currentPictureIndex, picturesLength) => {
  return (currentPictureIndex - 1 + picturesLength) % picturesLength;
};

export default goToPreviousPicture;
