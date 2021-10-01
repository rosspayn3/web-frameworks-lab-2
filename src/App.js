import "./App.css";
import React from "react";
import FancyJobsList from "./FancyJobsList";
import FancySignupForm from "./FancySignupForm";
import jobsList from "./jobs";
import usersList from "./users";
import concentrationsList from "./concentrations";

/**
 * TO-DO:
 * 
 * password requirements matching and CSS.
 * 
 * use input onChange function to check for:
 *  - 8 chars
 *  - symbol
 *  - number
 *  - uppercase/lowercase
 * 
 */

function App() {
    const [concentration, setConcentration] = React.useState("All");

    return (
        <div className="App">
            <header className="App-header">
                <h2>Ross Payne</h2>
                <h1>CS 4903 Lab 2</h1>
            </header>
            <hr />
            <div className="App-body">
                <div className="row">
                    <div className="column">
                        <FancySignupForm
                            options={concentrationsList}
                            concentrations={concentrationsList}
                            users={usersList}
                        />
                    </div>
                    <div className="column">
                        <FancyJobsList
                            options={concentrationsList}
                            selectedConcentration={concentration}
                            setConcentration={setConcentration}
                            list={jobsList}
                        />
                    </div>
                </div>

                <hr />
            </div>
        </div>
    );
}

export default App;
