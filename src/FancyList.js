const FancyList = (props) => {
  return (
    <ul>
      {props.list.map((item) => {
        return (
          <li key={item.username}>
            {item.username}
            <ul>
              <li>Name: {item.name}</li>
              <li>Email: {item.email}</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default FancyList;
