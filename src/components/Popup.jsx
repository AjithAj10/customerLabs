import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './inner.css'
function Popup(props) {
    const [drops,setDrops] = useState([]);

const init = [{add:'Add schema to segment'},{first_name:'First Name'},{last_name:'Last Name'},
{gender:'Gender'},{account_name:'Account Name'},{age:'Age'},{city:'City'},{state:'State'}]

  const [defaultDrop,setDefault] = useState(init);

    console.log(drops);
    const [select,setSelect] = useState();

    function selectFn(){
   //console.log(select);
     let fData = defaultDrop.filter(e =>{
        return Object.keys(e) == select
      })
      //console.log(fData[0]);
      setDrops([...drops,fData[0]]);

      let fData2 = defaultDrop.filter(e =>{
        return Object.keys(e) != select
      })
//console.log(fData2);
setDefault(fData2);
   
        setSelect('add');
    }
    return (
        <div className='popBg'>
            <Form>
            <label htmlFor='name'>Enter the name of the segment</label>
            <input type='text' id='name' placeholder='Name of the segment'/>
            <br/>

            <div className='border'>
                {
                             
                        drops.map((e,i) => {
                            return <select key={i}>
                                <option>{e && Object.values(e)}</option>
                            </select>
                        })
               
                }
            </div>
            
              <select value={select} onChange={e => setSelect(e.target.value)}>
                {
                  defaultDrop.map((e,i) => <option key={'d'+i} value={Object.keys(e)}>{Object.values(e)}</option>)
                }
                </select>
            
            <Button variant="link" onClick={selectFn}>+Add new schema</Button>
            <Button variant="success">Save</Button>

   
      </Form>
        </div>
    );
}

export default Popup;