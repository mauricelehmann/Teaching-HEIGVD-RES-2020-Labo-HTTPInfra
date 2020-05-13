$(function () {
        console.log("Debut script students ok");

        function loadStudents(){
                $.getJSON("/api/students/", function( students ){
                        console.log(students);
                        if(students.length > 0){
                                $(".student_title").text(students[0].firstName + " " + students[0].lastName);
						}
					});
		};
});
