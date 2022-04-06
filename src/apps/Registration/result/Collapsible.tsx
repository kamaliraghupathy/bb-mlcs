import React,{ useState } from 'react';
function Collapsible(props) {
    const [isOpen, setIsOpen] = useState(false);
  return (
   <div className="Collapsible">
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
          {props.label}
          </button>
      {isOpen && <div className="table">{props.children}</div> }
  </div>
  );
}
export default Collapsible;