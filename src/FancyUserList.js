import React from "react";

const FancyUserList = (props) => {

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {console.log("HERE WE GO")}
                {console.log(props.users)}
                {props.users.map((user) => {
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

export default FancyUserList;
