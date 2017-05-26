var apiKey = require('./../.env').apiKey;



function Doctor(first_name, last_name, bio){
  this.first_name = first_name;
  this.last_name = last_name;
  this.bio = bio;
}

Doctor.prototype.getDoctor = function(symptom, doctorInfo){
  var doctors = [];
  $.get("https://api.betterdoctor.com/2016-03-01/doctors?query="+ symptom + "&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=" + apiKey).then(function(response){
    console.log(response)


    limit = response.data.length;
      for (var i=0; i < limit ; i++) {
      var bio = response.data[i].profile.bio;
      var first_name = response.data[i].profile.first_name;
      var last_name = response.data[i].profile.last_name;
      newDoctor = new Doctor(first_name, last_name, bio);

      doctors.push(newDoctor);




  }
  doctorInfo(doctors);
});

};


exports.doctorModule = Doctor;
