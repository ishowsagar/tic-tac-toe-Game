export default function Square({ onClick, value }) {
  // todo - change colors according theme
  //  * styling each button * //
  const styles = {
    backgroundColor: "lightblue",
    border: "1.7px solid darkblue",
    fontSize: "27px",
    outline: "none",
    cursor: "pointer",
    fontWeight: "700",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <button style={styles} onClick={onClick}>
      {value}
    </button>
  );
}
