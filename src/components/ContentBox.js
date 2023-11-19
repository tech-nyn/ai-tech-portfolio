


import React from 'react'

function ContentBox({rightHeading, leftHeading, content}) {

  return (
    <>
        <div className="content-box-title">
            <h2>{ leftHeading }</h2>
            <h3>{ rightHeading }</h3>
        </div>
        <div className="content-box-content">
            <div className="content-box-contentt">{ content }</div>
        </div>
    </>
  );
}


export default ContentBox;