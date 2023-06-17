import ThemeProvider from "./ThemeContext/ThemeProvider";
import "./App.css";
import UseContext from "./ThemeContext/UseContext";

// Context
// Sự phụ thuộc : CompA => ComB => ComC
// -> Context sinh ra làm mất đi sự phụ thuộc này, 
// -> 1 props từ CompA thay đổi -> truyền cho ComC luôn 
//    mà không cần thông qua ComB

// 1. Create context
// 2. Provider
// 3. Consumer

export default function App() {
  return (
    <ThemeProvider>
      <UseContext />
    </ThemeProvider>
  );
}
