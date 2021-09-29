import "./App.css";
import FancyJobsList from "./FancyJobsList";
import FancyList from "./FancyList";

const people = [
  {
    username: "rpayne00",
    password: "P@ssw0rd",
    name: "Ross Payne",
    email: "rpayne@gmail.com",
  },
  {
    username: "jsmith00",
    password: "P@ssw0rd",
    name: "John Smith",
    email: "jsmith@gmail.com",
  },
  {
    username: "bwayne00",
    password: "P@ssw0rd",
    name: "Bruce Wayne",
    email: "bwayne@gmail.com",
  },
  {
    username: "ckent00",
    password: "P@ssw0rd",
    name: "Clark Kent",
    email: "ckent@gmail.com",
  },
  {
    username: "dprince00",
    password: "P@ssw0rd",
    name: "Diana Prince",
    email: "dprince@gmail.com",
  },
];

const concentrations = [
  "Artificial Intelligence",
  "Cybersecurity",
  "Networking",
  "Programming",
];

const jobs = [
  {
    id: 0,
    concentration: "Programming",
    title: "Junior Programmer",
    salary: "$50,000",
  },
  {
    id: 1,
    concentration: "Programming",
    title: "Senior Programmer",
    salary: "$65,000",
  },
  {
    id: 2,
    concentration: "Programming",
    title: "Intern",
    salary: "$35,000",
  },
  {
    id: 3,
    concentration: "Cybersecurity",
    title: "Junior Analyst",
    salary: "$50,000",
  },
  {
    id: 4,
    concentration: "Cybersecurity",
    title: "Senior Analyst",
    salary: "$65,000",
  },
  {
    id: 5,
    concentration: "Cybersecurity",
    title: "Intern",
    salary: "$35,000",
  },
  {
    id: 6,
    concentration: "Networking",
    title: "Junior Networker",
    salary: "$50,000",
  },
  {
    id: 7,
    concentration: "Networking",
    title: "Senior Networker",
    salary: "$65,000",
  },
  {
    id: 8,
    concentration: "Networking",
    title: "Intern",
    salary: "$35,000",
  },
  {
    id: 9,
    concentration: "Artificial Intelligence",
    title: "Junior Engineer",
    salary: "$50,000",
  },
  {
    id: 10,
    concentration: "Artificial Intelligence",
    title: "Senior Engineer",
    salary: "$65,000",
  },
  {
    id: 11,
    concentration: "Artificial Intelligence",
    title: "Intern",
    salary: "$35,000",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CS 4903 Lab 2</h1>
      </header>
      <hr />
      <div className="App-body">
        <h2>Users</h2>
        <FancyList list={people} />
        <hr />
        <h2>Jobs</h2>
        <FancyJobsList options={concentrations} list={jobs} />
      </div>
    </div>
  );
}

export default App;
