import React from "react";
import FancySelect from "./FancySelect";

const FancyJobsList = (props) => {

  // function to pass to FancySelect 
  // filter props.list to only show items based on the option selected in FancySelect
  const handleChange = (e) => {
    e.preventDefault();
    console.log(`%c FancySelect option: ${e.target.value} `, "color: #33a");
    setConcentration(e.target.value);
  };

  const [concentration, setConcentration] = React.useState("All");

  return (
    <div>
      <FancySelect options={props.options} onchange={handleChange}/>
      <ul>
        {props.list.filter(item => {return item.concentration.includes(concentration)}).map((item) => {
          return (
            <li key={item.id}>
              <strong className="job-title">{item.title}</strong>
              <ul>
                <li>Salary: {item.salary}</li>
                <li>Concentration: {item.concentration[0]}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FancyJobsList;
