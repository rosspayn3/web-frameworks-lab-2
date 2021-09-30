import "./App.css";
import FancyJobsList from "./FancyJobsList";
import FancyUserList from "./FancyUserList";
import jobs from "./jobs";
import users from "./users";
import concentrations from "./concentrations";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Ross Payne</h2>
                <h1>CS 4903 Lab 2</h1>
            </header>
            <hr />
            <div className="App-body">
                <div className="row">
                    <div className="column">
                        <FancyUserList users={users} />
                    </div>
                    <div className="column">
                        <FancyJobsList options={concentrations} list={jobs} />
                    </div>
                </div>

                <hr />
            </div>
        </div>
    );
}

export default App;
