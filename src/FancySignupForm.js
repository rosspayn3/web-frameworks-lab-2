import React from "react";

const FancySignupForm = (props) => {
    const [users, setUsers] = React.useState(props.users);

    function handleSignupSubmit(e) {
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
            if (
                users.filter((user) => {
                    return user.email === newUser.email;
                }).length > 0
            ) {
                console.log(`%c THAT EMAIL IS TAKEN!`, "color: #c66");
            } else {
                setUsers((users) => users.concat(newUser));
            }
        }
    }

    return (
        <div>
            <h2>Users</h2>
            <form onSubmit={handleSignupSubmit} id="signup-form">
                <label htmlFor="form-name">Name:</label>
                <input type="text" name="name" id="form-name"></input>

                <label htmlFor="form-username">Username:</label>
                <input type="text" name="username" id="form-username"></input>

                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="form-email"></input>

                <label htmlFor="form-password">Password:</label>
                <input type="password" name="password" id="form-password"></input>
                <br />

                <button type="submit" style={{ padding: "0.5em", margin: "2em 0" }}>
                    Sign Up
                </button>
            </form>
            <hr />
            <ul>
                {console.log("HERE WE GO")}
                {console.log(users)}
                {users.map((user) => {
                    return (
                        <li key={user.email}>
                            <strong className="user-uid">{user.username}</strong>
                            <ul>
                                <li>Name: {user.name}</li>
                                <li>Email: {user.email}</li>
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default FancySignupForm;
