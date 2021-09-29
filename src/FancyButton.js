const FancyButton = (props) => {

    let times = 1;

    const handleClick = (e) => {
        console.log(`%c FancyButton clicked ${times} times!! `, 'color: #3a3');
        times++;
    }

    return (
        <div style={{padding: "0.5em"}}>
            FancyButton:
            <br></br>
            <button onClick={handleClick}>FancyButton</button>
        </div>
    )
}

export default FancyButton;