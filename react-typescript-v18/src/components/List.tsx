import React from "react"

interface IListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

// eslint-disable-next-line
export default function<T> (props: IListProps<T>) {
  return (
    <div>
      {props.items.map(props.renderItem)}
    </div>
  );
}