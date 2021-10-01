const FancySelect = (props) => {
    return (
        <div style={{ padding: "0.5em" }}>
            <label htmlFor="options">Concentration: </label>
            <select id="options" onChange={props.onchange}>
                {props.options.map((option) => {
                    return (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default FancySelect;
