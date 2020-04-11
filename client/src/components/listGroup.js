import React from "react";
import "../sass/filterList.scss";

const ListGroup = props => {
  const { items, onTypeSelect, selectedType } = props;
  return (
    <ul className="list-group filter">
      {items.map(type => (
        <li
          onClick={() => onTypeSelect(type)}
          key={type._id}
          className={
            type === selectedType ? "list-group-item active" : "list-group-item"
          }
        >
          {type.type}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
