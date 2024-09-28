import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Course from "./components/Course";
import { courses } from "./Data";
import "./css/course.css"

// Main Application Component
function App() {
  return (
    <>
      {/* Header Component */}
      <Header />
      <div className="course-main">
        {/* Course List Rendering */}
        {
          courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))}
      </div>
    </>
  )
}

export default App;
