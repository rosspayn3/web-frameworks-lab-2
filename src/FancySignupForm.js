import FancyUserList from "./FancyUserList";

const FancySignupForm = (props) => {

    return (
        <div>
            <h2>Users</h2>
            <form onSubmit={props.handleFormSubmit} id="signup-form">
                <label htmlFor="form-name">Name:</label>
                <input type="text" name="name" id="form-name"></input>

                <label htmlFor="form-username">Username:</label>
                <input type="text" name="username" id="form-username"></input>

                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="form-email"></input>

                <label htmlFor="form-password">Password:</label>
                <input type="password" name="password" id="form-password" onChange={props.validatePassword}></input>
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
