import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function Paragraph() {
  const value = useContext(ThemeContext);
  return (
    <p className={value.theme}>
      I want to tell you about :  
      You know what?
      I love you
    </p>
  );
}
