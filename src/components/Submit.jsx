import { Button } from 'bootstrap';
import React from 'react';

function Submit(props) {

    function submitFn(e) {
        e.preventDefault();
        // console.log(e.target);
        // console.log(e.target[1].value);
    
        let obj = {
          "segment_name" : props.name,
          "schema" : props.drops
        }
        console.log(obj);
        //https://webhook.site/ce18f9b5-1944-40af-9148-b2c0f88682a4
    
      }

    return (
        <>
        <Button variant="success" type="submit" onClick={submitFn}>
          Save Segment
        </Button>
        </>
    );
}

export default Submit;