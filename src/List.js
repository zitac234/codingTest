import "./List.css";

export function List(props) {
  return (
    <div className="list">
      {props.items.map((item) => (
        <>{item}<br /></>
      ))}
    </div>
  );
}
