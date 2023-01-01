export const addNewHobby = (hobby) => {
  console.log("hobby:", hobby);
  return {
    type: "ADD_HOBBY",
    payload: hobby,
  };
};
export const setActiveHobby = (hobby) => {
  console.log("hobby:", hobby);
  return {
    type: "SET_ACTIVE_HOBBY",
    payload: hobby,
  };
};
