import React from 'react';
// import fetch from 'isomorphic-fetch';

import { getAction, hitAction, hitAction2, hitAction3 } from './actions'

class EmailSend extends React.Component{

  render(){
    return (
      <div>
        <button
            onClick={()=>{
              getAction();
            }}
          >Send Mail</button>
        <br />
        <button
            onClick={()=>{
              hitAction();
            }}
          >FETCH</button>
        <button
            onClick={()=>{
              hitAction2();
            }}
          >http-client</button>
        <button
            onClick={()=>{
              hitAction3();
            }}
          >node-rest-client-promise</button>
      </div>
    );
  }
}
export default EmailSend;