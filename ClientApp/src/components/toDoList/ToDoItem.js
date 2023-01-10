export default function ToDoItem(props) {
  return (
    <div className='list-item'
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}
