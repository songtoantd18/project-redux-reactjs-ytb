import { makeObservable, observable, action } from "mobx";

class NameStore {
  valueInput = "";
  nameUser = "";
  // arrayUser = [];
  // arrayUserSpread = [];

  constructor() {
    makeObservable(this, {
      valueInput: observable,
      // arrayUser: observable,
      // arrayUserSpread: observable,

      nameUser: observable,
      setValueInput: action,
      setNameUser: action,
    });
  }

  setValueInput = (value) => {
    console.log("value:", value);
    console.log("1:", 1);
    this.valueInput = value;
  };
  setNameUser = () => {
    console.log("2:", 2);
    this.nameUser = this.valueInput;
    // this.arrayUser.push(this.nameUser);
    // console.log("arrayUser:", this.arrayUser);
  };
}

const nameStore = new NameStore();

export default nameStore;
