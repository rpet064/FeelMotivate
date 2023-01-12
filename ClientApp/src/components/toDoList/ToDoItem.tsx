type Props = {
  id: Number;
  text: String;
  onChecked: Function;
}

 const ToDoItem:React.FC<Props> = (props) => {

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

export default ToDoItem


