const FancyInput = (props) => {
  const handleChange = (e) => {
    console.log(`%c FancyInput text: ${e.target.value} `, "color: #a33");
  };

  return (
    <div style={{ padding: "0.5em" }}>
      <label htmlFor="search" style={{ paddingRight: "10px" }}>
        FancyInput:
      </label>
      <br></br>
      <input id="search" type="text" onChange={handleChange}></input>
    </div>
  );
};

export default FancyInput;
