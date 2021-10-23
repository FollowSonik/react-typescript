import React from "react";

interface IListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: IListProps<T>) {
  return (
    <div>
      {props.items.map(props.renderItem)}
    </div>
  );
};