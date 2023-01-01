import PropTypes from "prop-types";
import React from "react";
import "../../src/App.css";

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
  hobbyList: [],
  active: null,
  onHobbyClick: null,
};

function HobbyList(props) {
  const { hobbyList, activeId, onHobbyClick } = props;
  const handleClick = (hobby) => {
    console.log("onHobbyClick:", onHobbyClick);
    if (onHobbyClick) {
      console.log("1:", 1);
      onHobbyClick(hobby);
    }
  };
  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby) => {
        console.log("activeId:", activeId);
        return (
          <li
            key={hobby.id}
            //   className="active"
            className={hobby.id === activeId ? "active" : ""}
            onClick={() => handleClick(hobby)}
          >
            {hobby.title}
          </li>
        );
      })}
    </ul>
  );
}
export default HobbyList;
