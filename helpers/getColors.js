export const getColors = () => {
  const colorsList = localStorage.getItem("colorsList");
  return colorsList ? JSON.parse(colorsList) : [];
}

export const getLastColor = () => {
  const colorsList = getColors();
  return colorsList.length > 0 ? colorsList[0] : "#000000";
}   