import React from 'react';

const listHeaders = [
  "Applicant",
  "Status",
  "Application Date",
  // "Last Action",
  "Location",
  // "High Needs" 
]


export default function ListHeader(props) {
  return (
    <div id='list-header'>
      {
        listHeaders.map(header => (
          <div 
            key={`header-${header}`}
            onClick={evt => props.sortBy(header, evt)}>
            {header.toUpperCase()}
          </div>
        ))
      }
    </div>
  )
}