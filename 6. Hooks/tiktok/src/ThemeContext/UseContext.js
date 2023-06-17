import { ThemeContext } from "./ThemeProvider";
import { useContext } from "react";
import "../App.css";
import Content from "./Content";

export default function UseContext() {
  const context = useContext(ThemeContext);
  return (
    <div className={"paragraph"}>
      <button onClick={() => context.toggleTheme()}>Toggle</button>
      <Content />
    </div>
  );
}
