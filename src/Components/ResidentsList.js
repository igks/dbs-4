import React from "react";

function ResidentsList({ StudentList }) {
  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>
      <ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
        {StudentList.length > 0 &&
          StudentList.map((student, index) => (
            <li key={index} className="slide-up-fade-in">
              {student}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ResidentsList;
