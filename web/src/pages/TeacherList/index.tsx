import React from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="This are the proffys available.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="subject">Day</label>
            <input type="text" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="subject">Hour</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>{" "}
    </div>
  );
}

export default TeacherList;
