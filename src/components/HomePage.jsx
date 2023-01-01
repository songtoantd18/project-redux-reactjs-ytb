import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HobbyList from "./HobbyList";
import { addNewHobby, setActiveHobby } from "./../action/hobby";
// import { v4 as uuidv4 } from "uuid";

const HomePage = (props) => {
  const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
  };
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  console.log("hobbyList:", hobbyList);
  const dispatch = useDispatch();
  const handleADddHobbyClick = () => {
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `hobby ${newId}`,
    };
    const action = addNewHobby(newHobby);
    dispatch(action);
  };
  const handleHobbyClick = (hobby) => {
    console.log("2:", 2);
    const action = setActiveHobby(hobby);
    console.log("action:", action);
    dispatch(action);
  };
  return (
    <div>
      <h1>redux huook-home pages</h1>
      <button onClick={handleADddHobbyClick}>add new hobbyReducer</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      ></HobbyList>
    </div>
  );
};

export default HomePage;
