
export default function Die(props) {
    return (
    <button onClick={props.hold} className={`die ${props.isHeld ? "isHeld" : ""}`} >
      {props.value}
    </button>
  );
}