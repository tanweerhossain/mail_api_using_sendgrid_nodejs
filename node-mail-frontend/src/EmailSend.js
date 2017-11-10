import React from 'react';
import { getAction } from './actions'

class EmailSend extends React.Component{
  render(){
    return (
      <button
        onClick={()=>{
          getAction();
        }}
      >Send Mail</button>

    );
  }
}
export default EmailSend;