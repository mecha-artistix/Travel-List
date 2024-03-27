export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <em>
        💼 You have {numItems} items on your List, and you already checked
        {numPacked}
      </em>
    </footer>
  );
}
