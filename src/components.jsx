
export function Greeting(props) {
  return (
  <h1>hello {props.name}</h1>
  );
}

export function Message(props) {
    return (
    <p>{props.text}</p> 
)
}

export function Button(props) {
    return(
        <button onClick={props.onBtnClick}>
           klac 
        </button>
    )
}
