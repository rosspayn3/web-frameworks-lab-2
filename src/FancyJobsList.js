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
        {props.list.filter(job => {return job.concentration.includes(concentration)}).map((job) => {
          return (
            <li key={job.id}>
              <strong className="job-title">{job.title}</strong>
              <ul>
                <li>Salary: {job.salary}</li>
                <li>Concentration: {job.concentration[0]}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FancyJobsList;
