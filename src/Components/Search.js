import React, { useState } from "react";
import { STUDENTS } from "../studentsList";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function Search({ setError, addStudentList }) {
  const [keyword, setKeyword] = useState("");
  const [joinDate, setJoinDate] = useState("");

  function checkValidity(joiningDate, validityDate) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const [year, month, day] = joiningDate.split("-");
    const [yyyy, mm, dd] = validityDate.split("-");
    const maxValid = new Date(yyyy, mm - 1, dd);
    const selected = new Date(year, month - 1, day);
    return maxValid >= selected && maxValid >= today;
  }

  const addStudent = () => {
    const student = STUDENTS.find(
      (s) => s.name.toLowerCase() == keyword.toLowerCase()
    );

    if (student == null || student == undefined) {
      setError(`Sorry, ${keyword} is not a verified student!`);
      setKeyword("");
      setJoinDate("");
      return;
    }

    if (!checkValidity(joinDate, student.validityDate)) {
      setError(`Sorry, ${keyword}'s validity has Expired!`);
      setKeyword("");
      setJoinDate("");
      return;
    }

    addStudentList(student.name);
    setKeyword("");
    setJoinDate("");
  };

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
            onChange={(e) => setJoinDate(e.target.value)}
            value={joinDate}
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        className="small mb-0"
        onClick={addStudent}
      >
        Add
      </button>
    </div>
  );
}

export default Search;
