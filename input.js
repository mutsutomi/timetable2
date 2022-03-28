"use strict"

function timetable(student, semester, subjects){
  this.student = student
  this.semester = semester
  this.subjects = subjects
};

function createTimetable(){
  let timetableName = document.getElementById("semesterName").value
  if(timetableName === ""){
    console.log("please input semester!!")
  }else{
    const NewSemester = new timetable();
    NewSemester.semester = timetableName;
    
    console.log(NewSemester);
    console.log(NewSemester.semester);
  }  
};

document.getElementById("createSemesterButton").onclick = createTimetable;
