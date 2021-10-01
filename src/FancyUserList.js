const FancyUserList = (props) => {
    return (
        <div>
            <ul>
                {/* {console.log("HERE WE GO")}
                {console.log(props.users)} */}
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
