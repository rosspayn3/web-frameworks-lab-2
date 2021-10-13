import "./App.css";
import React from "react";
import FancyJobsList from "./FancyJobsList";
import FancySignupForm from "./FancySignupForm";
import jobsList from "./jobs";
import usersList from "./users";
import concentrationsList from "./concentrations";

function App() {
    const [concentration, setConcentration] = React.useState("All");
    const [users, setUsers] = React.useState(usersList);

    const filterJobsList = (e) => {
        e.preventDefault();
        console.log(`%c selected concentration: ${e.target.value} `, "color: #99c");
        setConcentration(e.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>CS 4903 Web Frameworks - Lab 3</h2>
                <h3>Ross Payne</h3>
            </header>
            <hr />
            <div className="App-body">
                <div className="row">
                    <div className="column">
                        <FancySignupForm
                            options={concentrationsList}
                            users={users}
                            setUsers={setUsers}
                        />
                    </div>
                    <div className="column">
                        <FancyJobsList
                            options={concentrationsList}
                            jobs={jobsList}
                            selectedConcentration={concentration}
                            selectOnChange={filterJobsList}
                        />
                    </div>
                </div>

                <hr />
            </div>
        </div>
    );
}

export default App;
