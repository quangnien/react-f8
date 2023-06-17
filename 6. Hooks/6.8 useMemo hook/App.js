import "./styles.css";
import { useState, useMemo, useRef } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  //const totalPrice = useRef(0); - formula 1

  const handleSubmit = () => {
    //setProducts((prev) => [...prev, `${name} have ${price}`]); - formular 1
    setProducts([
      ...products,
      {
        name,
        price: Number(price)
      }
    ]);
    setName("");
    setPrice("");
    //totalPrice.current += Number(price); - formular 1
    nameRef.current.focus();
  };

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("re-runing");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div>
      <input
        value={name}
        placeholder="enter name..."
        onChange={(e) => setName(e.target.value)}
        // https://reactjs.org/docs/refs-and-the-dom.html
        ref={nameRef}
      />
      <input
        value={price}
        placeholder="enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      {/* <span>total price here: {totalPrice.current}</span> - formular 1*/}
      <span>total price here: {total}</span>
      <br />
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} have {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
