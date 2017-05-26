var Doctor = require('./../js/doctor.js').doctorModule;

var doctorInfo = function(doctors) {

  doctors.forEach(function(doctor){
  $('.output').append("<li><h3>" + doctor.first_name + " " + doctor.last_name+ ":</h3>" +"<br>span"+ doctor.bio+".</li>");

  });
};

$(document).ready(function(){
  var currentDoctorObject = new Doctor();
  $ ("#submit").click(function(){
    var symptom = $("#symptom").val();
    $("#symptom").val("");
    $("#input_response").show()
    $(".issue").text(symptom);
    currentDoctorObject.getDoctor(symptom, doctorInfo);
    });
});
