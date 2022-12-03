import { makeObservable, observable, action } from "mobx";
import App from "../App";
class ListStore {
  listName = [];
  constructor() {
    makeObservable(this, {
      listName: observable,
      saveName: action,
      deleteName: action,
    });
  }
  saveName = (name, setName) => {
    console.log("1:", 1);
    this.listName.push({
      id:
        this.listName.length === 0
          ? 0
          : this.listName[this.listName.length - 1].id + 1,
      name,
    });
    setName("");

    // this.listName = [1, 2, 3];
    // console.log("this.listName:", this.listName);
  };
  deleteName = (id) => {
    console.log("id:", id);
    const indexName = this.listName.findIndex((item) => {
      console.log("item:", item);
      console.log("id:", id);
      return item.id === id;
    });
    console.log("indexName:", indexName);
    this.listName.splice(indexName, 1);
  };
}

const listStore = new ListStore();
export default listStore;
