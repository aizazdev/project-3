import React, { useState, useEffect } from 'react';
import {CountryApi} from './Global';
import fire from './Config';
import Firebase from 'firebase';

function Card() {
    const[value, setValue] = useState("");       
    
    useEffect(() => {
      const getUserData = async () => {
        let ref = Firebase.database().ref('/');
        ref.on('value', snapshot => {
          const state = snapshot.val();
          setValue(state);
        });
      }
      getUserData();
    }, [])
        
    return(
        <>
         <div>
           light value : {value.light}<br />
            moisture value : {value.moisture}
        </div>
        
        </>
    )
}
export default Card;