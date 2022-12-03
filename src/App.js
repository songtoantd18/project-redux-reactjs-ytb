import React, { useState } from "react";
import listStore from "./Store/ListStore";
import { observer } from "mobx-react";

const App = () => {
  const [name, setName] = useState("song toan");
  const renderList = () => {
    return (
      <div>
        {listStore.listName.map((item, index) => {
          return (
            <h2 key={item.id}>
              {item.id}:{item.name}
              <button onClick={() => listStore.deleteName(item.id)}>X</button>
            </h2>
          );
          // console.log('2:',2);
        })}
      </div>
    );
  };
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={() => listStore.saveName(name, setName)}>submit</button>
      {renderList()}
    </div>
  );
};

export default observer(App);
