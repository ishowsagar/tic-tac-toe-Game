import Square from "./Square";

export default function Board({ squares, onClick }) {
  const styles = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    margin: "2rem auto",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridTemplateRows: "repeat(3,1fr)",
  };
  return (
    <div style={styles}>
      {/* squares --. Arr flled with 9 null items/els */}
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </div>
  );
}
