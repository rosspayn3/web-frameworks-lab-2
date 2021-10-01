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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!e.target.username.value || !e.target.password.value || !e.target.name.value || !e.target.email.value) {
            console.log(`%c enter all information!`, "color: #c66");
        } else {
            let newUser = {
                username: e.target.username.value,
                password: e.target.password.value,
                name: e.target.name.value,
                email: e.target.email.value,
            };
            let duplicates = users.filter((user) => {
                return user.email === newUser.email || user.username === newUser.username;
            });

            let invalidReqs = Array.from(document.getElementById("requirements").childNodes).filter((node) => {
                return node.classList.contains("invalid");
            });

            if (duplicates.length > 0) {
                console.log(`%c that email/username has already been used!`, "color: #c66");
            } else if (invalidReqs.length > 0) {
                console.log(`%c 🔥🔥 BAD PASSWORD 🔥🔥`, "color: #c22");
            } else {
                console.log(`%c adding new user with email "${newUser.email}" !`, "color: #6c6");
                setUsers((users) => users.concat(newUser));
                document.getElementById("signup-form").reset();
                resetPasswordRequirements();
            }
        }
    };

    const validatePassword = (e) => {
        let pass = e.target.value;
        let uppercase = /[A-Z]/g;
        let numbers = /[0-9]/g;
        let symbols = /[$-/:-?{-~!"^_`\[\]\\@#]/g;
        let upperreq = document.getElementById("pass-uppercase");
        let numbersreq = document.getElementById("pass-number");
        let symbolreq = document.getElementById("pass-symbol");
        let lengthreq = document.getElementById("pass-length");

        console.log(pass);

        if (pass.match(uppercase)) {
            upperreq.classList.add("valid");
            upperreq.classList.remove("invalid");
        } else {
            upperreq.classList.add("invalid");
            upperreq.classList.remove("valid");
        }

        if (pass.match(numbers)) {
            numbersreq.classList.add("valid");
            numbersreq.classList.remove("invalid");
        } else {
            numbersreq.classList.add("invalid");
            numbersreq.classList.remove("valid");
        }

        if (pass.match(symbols)) {
            symbolreq.classList.add("valid");
            symbolreq.classList.remove("invalid");
        } else {
            symbolreq.classList.add("invalid");
            symbolreq.classList.remove("valid");
        }

        if (pass.length > 7) {
            lengthreq.classList.add("valid");
            lengthreq.classList.remove("invalid");
        } else {
            lengthreq.classList.add("invalid");
            lengthreq.classList.remove("valid");
        }
    };

    const resetPasswordRequirements = () => {
        document.getElementById("pass-uppercase").classList.add("invalid");
        document.getElementById("pass-number").classList.add("invalid");
        document.getElementById("pass-symbol").classList.add("invalid");
        document.getElementById("pass-length").classList.add("invalid");

        document.getElementById("pass-uppercase").classList.remove("valid");
        document.getElementById("pass-number").classList.remove("valid");
        document.getElementById("pass-symbol").classList.remove("valid");
        document.getElementById("pass-length").classList.remove("valid");
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>CS 4903 Web Frameworks - Lab 2</h2>
                <h3>Ross Payne</h3>
            </header>
            <hr />
            <div className="App-body">
                <div className="row">
                    <div className="column">
                        <FancySignupForm
                            options={concentrationsList}
                            users={users}
                            handleFormSubmit={handleFormSubmit}
                            validatePassword={validatePassword}
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
