import Checkbox from "./Checkbox";

export default function Task({name, done, onToggle}) {
  return (
    <div className="task">
      <Checkbox defaultChecked={done} onClick = {()=> onToggle(!done)} />
      {name}
    </div>
  );
}
