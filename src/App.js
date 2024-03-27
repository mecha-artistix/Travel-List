import { useState } from "react";
import PackingList from "./components/PackingList.js";
import Form from "./components/Form.js";
import Stats from "./components/Stats.js";
import Logo from "./components/Logo.js";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  }
  function handleClear() {
    const confirmed = window.confirm(
      "Do You want to delete everything from the list?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleleItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
