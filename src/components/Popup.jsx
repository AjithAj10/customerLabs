import React from "react";
import { useState } from "react";
import axios from "axios";
import "./inner.css";
function Popup(props) {
  const [drops, setDrops] = useState([]);
  const [name, setName] = useState('');

  const init = [
    { add: "Add schema to segment" },
    { first_name: "First Name" },
    { last_name: "Last Name" },
    { gender: "Gender" },
    { account_name: "Account Name" },
    { age: "Age" },
    { city: "City" },
    { state: "State" },
  ];

  //on loading dynamic dropDowns
  const dyna = [
    { add: "Add schema to segment" },
    { first_name: ["First name", "aji", "arun"] },
    { last_name: ["Second name", "starks", "pkd"] },
    { gender: ["Gender", "male", "female", "other"] },
    { account_name: ["Account Name", "ajith1033", "arunk7576"] },
    { age: ["Age", 24, 26] },
    { city: ["City", "Kochi", "Chennai"] },
    { state: ["State", "Kerala", "Tamil Nadu"] },
  ];

  const [defaultDrop, setDefault] = useState(init);

  const [select, setSelect] = useState();

  function selectFn() {
    if (select === "add") {
      return;
    }
    let fData = defaultDrop.filter((e) => {
      return Object.keys(e) == select;
    });
    setDrops([...drops, fData[0]]);

    let fData2 = defaultDrop.filter((e) => {
      return Object.keys(e) != select;
    });
    setDefault(fData2);

    setSelect("add");
  }

  function innerList(key) {
    return dyna.filter((el) => {
      return key[0] == Object.keys(el)[0];
    });
  }

  function submitFn(e) {
    e.preventDefault();
    console.log(name);
if(name === ''){
  alert('Empty Name field');
  return;
}
    let obj = {
      segment_name: name,
      schema: drops,
    };
    //https://webhook.site/ce18f9b5-1944-40af-9148-b2c0f88682a4
    axios
      .post(
        "https://webhook.site/ce18f9b5-1944-40af-9148-b2c0f88682a4",
        JSON.stringify(obj)
      )
      .then((e) => console.log(e))
      .catch((err) => console.log(err));

      setDrops([]);
    setDefault(init);
    props.pop(false);
  }

  function listFn(e) {
    let id = e.target.id;
    let value = e.target.value;

    let data = drops.map((e) => {
      return Object.keys(e) == id ? { [id]: value } : e;
    });

    setDrops(data);
  }

  function cancelFn(){
    setDrops([]);
    setDefault(init);
    props.pop(false);
  }

  return (
    <div className="popBg">
        <div className="header">Saving segment</div>
        <div className="body">
        <label htmlFor="name">Enter the name of the segment</label>
        <input
          type="text"
          id="name"
          placeholder="Name of the segment"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Select the Schemas and submit</label>
        <div className="border">
          {drops.map((e, i) => {
            let d = innerList(Object.keys(e));
            return (
              <select key={i} id={Object.keys(e)[0]} onChange={listFn}>
                {Object.values(d[0])[0].map((e, i) => (
                  <option key={"arr" + i}>{e}</option>
                ))}
              </select>
            );
          })}
        </div>

        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          {defaultDrop.map((e, i) => (
            <option key={"d" + i} value={Object.keys(e)}>
              {Object.values(e)}
            </option>
          ))}
        </select>

        <button className="link" onClick={selectFn}>
          +Add new schema
        </button>
        </div>
        <div className="bottom">

        <button className="success" type="submit" onClick={submitFn}>
          Save Segment
        </button>
        <button className="danger" onClick={cancelFn}>
          Cancel
        </button>
        </div>
  
    </div>
  );
}

export default Popup;
