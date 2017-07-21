import React from 'react';

const propsToDisplay = {
  status: true,
  applicationDate: true,
  location: true,
};


export default function Teacher ({teacher, showModal = () => {} , idx}) {
  return (
    <div onClick={() => showModal(teacher, idx)} className='teacher-container'>
      <ContactDetails name={teacher.name} email={teacher.email} />
      { renderDisplayFor(teacher) }
      <div className="ellipsis glyphicon glyphicon-option-horizontal"></div>
    </div>
  );
}

function renderDisplayFor(teacher) {
  const tds = [];
  for (let prop in propsToDisplay) {
    if (prop in teacher) {
      let classNames = `${prop}-detail`;
      if (prop === 'status') classNames += ` ${teacher[prop].split(' ').join('-')}`
      tds.push(
        <div key={`${teacher.name}-cell-${teacher[prop]}`} className={classNames}>
          {teacher[prop]}
        </div>
      );
    }
  }

  return tds;
}

function ContactDetails({ name, email, thumbnailUrl }) {
  return (
    <div className="contact-container">
      <img className="teacher-avatar" src={thumbnailUrl} />
      <div className="contact-details">
        <div className="name">{name}</div>
        { email && <div className="email">{email}</div> }
      </div>
    </div>
  );
}