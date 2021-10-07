import React from "react";
import FancyUserList from "./FancyUserList";

const FancySignupForm = (props) => {

    const [name, setName] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");

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
            let duplicates = props.users.filter((user) => {
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
                props.setUsers((users) => users.concat(newUser) );
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

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    return (
        <div>
            <h2>Users</h2>
            <form onSubmit={handleFormSubmit} id="signup-form">
                <label htmlFor="form-name">Name:</label>
                <input type="text" name="name" id="form-name" value={name} onChange={handleNameChange}></input>

                <label htmlFor="form-username">Username:</label>
                <input type="text" name="username" id="form-username" value={username} onChange={handleUsernameChange}></input>

                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="form-email" value={email} onChange={handleEmailChange}></input>

                <label htmlFor="form-password">Password:</label>
                <input type="password" name="password" id="form-password" onChange={validatePassword}></input>
                <br />
                <ul id="requirements">
                    <strong>* Password must meet these requirements:</strong>
                    <li id="pass-length" className="invalid">At least 8 characters in length</li>
                    <li id="pass-symbol" className="invalid">Contains at least one symbol</li>
                    <li id="pass-number" className="invalid">Contains at least one number</li>
                    <li id="pass-uppercase" className="invalid">Contains at least one uppercase character</li>
                </ul>

                <button type="submit" style={{ padding: "0.5em", margin: "2em 0" }}>
                    Sign Up
                </button>
            </form>
            <hr />
            <FancyUserList users={props.users} />
        </div>
    );
};

export default FancySignupForm;
