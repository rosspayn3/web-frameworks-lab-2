import React from "react";
import FancySelect from "./FancySelect";

const FancyJobsList = (props) => {

  // function to pass to FancySelect 
  // filter props.list to only show items based on the option selected in FancySelect
  const handleChange = (e) => {
    e.preventDefault();
    console.log(`%c FancySelect option: ${e.target.value} `, "color: #33a");
    // filter list here
    // USE STATE
  };

  const [selection, setSelection] = React.useState('');

  return (
    <div>
      <FancySelect options={props.options} onchange={handleChange}/>
      <ul>
        {props.list.map((item) => {
          return (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <ul>
                <li>Salary: {item.salary}</li>
                <li>Concentration: {item.concentration}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FancyJobsList;
