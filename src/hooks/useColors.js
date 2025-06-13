import { useState, useEffect } from "react";
import { getColors, getLastColor } from "../../helpers/getColors";

export const useColors = () => {
  const [color, setcolor] = useState(getLastColor());
  const [colorsList, setColorsList] = useState(getColors());

  const handleChangeColor = (e) => setcolor(e.target.value);

  const handleSubmitSaveColor = (e) => {
    e.preventDefault();
    console.log("Color guardado:", color);
    setColorsList((colors) => [color, ...colors]);
  };

  const handleClickClearColors = () => {  
    setcolor("#f2f2f2");
    setColorsList([]);
    localStorage.removeItem("colorsList");
  }

  useEffect(() => {
    localStorage.setItem("colorsList", JSON.stringify(colorsList))
  }, [colorsList])

  useEffect(() => {
    setColorsList(localStorage.getItem("colorsList") ? JSON.parse(localStorage.getItem("colorsList")) : []);
  }, [])
  
  return {
    handleSubmitSaveColor,
    handleChangeColor,
    handleClickClearColors,
    color,
    colorsList
  };
};
