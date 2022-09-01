import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./inner.css";
function Popup(props) {
  const [drops, setDrops] = useState([]);
  const [name, setName] = useState();

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
    { first_name: ["First name","aji", "arun"] },
    { last_name: ["Second name","starks", "pkd"] },
    { gender: ["Gender","male", "female", "other"] },
    { account_name: ["Account Name","ajith1033", "arunk7576"] },
    { age: ["Age",24, 26] },
    { city: ["City","Kochi", "Chennai"] },
    { state: ["State","Kerala", "Tamil Nadu"] },
  ];

  const [defaultDrop, setDefault] = useState(init);

  //console.log(drops);
  const [select, setSelect] = useState();

  function selectFn() {
    //console.log(select);
    if (select === "add") {
      return;
    }
    let fData = defaultDrop.filter((e) => {
      return Object.keys(e) == select;
    });
    //console.log(fData[0]);
    setDrops([...drops, fData[0]]);

    let fData2 = defaultDrop.filter((e) => {
      return Object.keys(e) != select;
    });
    //console.log(fData2);
    setDefault(fData2);

    setSelect("add");
  }

  function innerList(key) {
    return dyna.filter((el) => {
      return key[0] == Object.keys(el)[0];

      // el && console.log(Object.keys(el))
    });
  }

  function submitFn(e) {
    e.preventDefault();
    // console.log(e.target);
    // console.log(e.target[1].value);

    let obj = {
      "segment_name" : name,
      "schema" : drops
    }
    console.log(obj);
  }

  function listFn(e){
    let id = e.target.id;
    console.log(id);
    console.log(e.target.value);
    let value = e.target.value;

    let data = drops.map(e => {
     return Object.keys(e) == id ? {[id]:value} : e
    })
    
    setDrops(data);
     //console.log(data);
    }
    //console.log(drops);
  return (
    <div className="popBg">
      <Form onSubmit={submitFn}>
        <label htmlFor="name">Enter the name of the segment</label>
        <input type="text" id="name" placeholder="Name of the segment" onChange={e =>setName(e.target.value)}/>
        <br />

        <div className="border">
          {drops.map((e, i) => {
            let d = innerList(Object.keys(e));
            //console.log(Object.keys(e)[0]);
            //console.log(d && Object.values( d[0] )[0]);

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

        <Button variant="link" onClick={selectFn}>
          +Add new schema
        </Button>
        <Button variant="success" type="submit">
          Save Segment
        </Button>
      </Form>
    </div>
  );
}

export default Popup;
