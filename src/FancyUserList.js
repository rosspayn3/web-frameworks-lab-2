const FancyUserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => {
        return (
          <li key={user.username}>
            <strong className="user-uid">{user.username}</strong>
            <ul>
              <li>Name: {user.name}</li>
              <li>Email: {user.email}</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default FancyUserList;
