// Todo list

import React from "react";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button
              onClick={(e) => {
                this.props.handleDelete(item.id);
              }}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
