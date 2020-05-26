$(function () {
        console.log("Debut script students okkk");

        function loadStudents(){
                $.getJSON("/api/students/api/students/", function( students ){
                        console.log("stud = " + students);
                        if(students.length > 0){
                                $(".student_title").text(students[0].firstName + " " + students[0].lastName);
                                                }
                                        });
                };

        loadStudents();

});
