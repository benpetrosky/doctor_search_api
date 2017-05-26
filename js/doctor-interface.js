var Doctor = require('./../js/doctor.js').doctorModule;

var doctorInfo = function(doctors) {

  doctors.forEach(function(doctor){
  $('.output').append("<li>" + doctor.first_name + " " + doctor.last_name +".</li>");

  });
};

$(document).ready(function(){
  var currentDoctorObject = new Doctor();
  $ ("#submit").click(function(){
    var symptom = $("#symptom").val();
    $("#symptom").val("");
    $(".issue").text(symptom);
    currentDoctorObject.getDoctor(symptom, doctorInfo);
    });
});
