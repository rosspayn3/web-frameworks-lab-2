import React from "react";
import FancySelect from "./FancySelect";

const FancyJobsList = (props) => {
    return (
        <div>
            <h2>Jobs</h2>
            <FancySelect options={props.options} onchange={props.selectOnChange} />
            <ul>
                {props.jobs
                    .filter((job) => {
                        return job.concentration.includes(props.selectedConcentration);
                    })
                    .map((job) => {
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
