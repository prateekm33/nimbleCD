import React from 'react';
import Teacher from './teacher';

export default function Modal(props) {
  return (
    <div id='modal'>
      <Teacher teacher={props.teacher}/>
      <div id='control-wrapper'>
        <div id='modal-buttons'>
          <button onClick={props.navLeft} className="glyphicon glyphicon-arrow-left btn btn-default"></button>
          <button className="btn btn-primary" onClick={props.closeModal}>Close</button>
          <button onClick={props.navRight} className="glyphicon glyphicon-arrow-right btn btn-default"></button>
        </div>
        <div id="help-msg"> You can navigate through using arrow keys as well </div>
      </div>
    </div>
  )
}
