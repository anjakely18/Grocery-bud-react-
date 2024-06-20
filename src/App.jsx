import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      property: false,
      id: nanoid(),
    };

    setItems([...items, newItem]);
    console.log(items);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};

export default App;
