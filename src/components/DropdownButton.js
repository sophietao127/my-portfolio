import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';

function DropdownButton({course, name}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        {course}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >{name}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButton;