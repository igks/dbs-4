import React, { useState } from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import Error from "./Components/Error";
import "h8k-components";

const title = "Hacker Dormitory";
function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [studentList, setStudentList] = useState([]);

  const addStudentList = (student) => {
    setStudentList([...studentList, student]);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search
          setError={(message) => setErrorMessage(message)}
          addStudentList={(student) => addStudentList(student)}
        />
        {errorMessage != null && <Error message={errorMessage} />}
        <ResidentsList StudentList={studentList} />
      </div>
    </div>
  );
}

export default App;
