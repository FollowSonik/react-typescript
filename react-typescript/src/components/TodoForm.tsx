import React, { useRef } from "react";

interface ITodoFormProps {
  onAdd(title: string): void;
};

export const TodoForm: React.FC<ITodoFormProps> = props => {
  // const [title, setTitle] = useState<string>("");

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  // };
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      // console.log(title);

      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title} type="text"
        ref={ref}
        id="title"
        placeholder="Type smth.."
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">Type smth..</label>
    </div>
  );
};