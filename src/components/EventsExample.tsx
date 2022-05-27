import React from "react"

// eslint-disable-next-line 
export default function () {
  const [value, setValue] = React.useState<string>("");
  const [isDrag, setIsDrag] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(inputRef.current?.value);
  }

  function dragHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();

    console.log("DRAG");
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();

    setIsDrag(prev => !prev);
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();

    setIsDrag(false);
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();

    setIsDrag(prev => {
      console.log(prev);
      console.log(isDrag);
      return !prev;
    });
    console.log("DROP");
  }

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" placeholder="Manageable"/>
      <input ref={inputRef} value={value} onChange={changeHandler} type="text" placeholder="Unmanageable"/>
      <button onClick={clickHandler}>Event Example</button>
      <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: "red"}}></div>
      <div
        onDrop={dropHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragOverHandler}
        style={{width: 200, height: 200, background: isDrag ? "blue" : "red", marginTop: 15}}>
      </div>
    </div>
  );
}