var prompt = require("prompt");
prompt.start();

console.log("Hi,I'm from the FBI (X-files Division) I just wanted to ask you some questions.");
console.log("Please answer the following questions as best you can, but if can't answer the question please say NOT SURE.");  
console.log("What is...");  

function makeReport() {
  prompt.get(["first_name", "last_name", "age", "time_of_sighting","location_of_sighting", "name_of_another_witness",
    "description_of_sighting","initial_thoughts","number_of_previous_encounters"], 
    function(err, result) {
      // console.log("The details you provided are : "+result.first_name);
      // console.log(result.last_name);
      var  report = `FBI Alian Sighting Report:

        Eye witness name is ${result.first_name} ${result.last_name} at age: ${result.age}
        According to eye witness sighting happened sometime around ${result.time_of_siting} near Burbank
        Another possible witness includes a person by the name of Alice
        The sighting is described as: Some monster thingy and the witness's initial thoughts are: WOAH MAN!
        This is the witness's 11th encounter

        Report conclusion : Complete`;

        console.log(report);
  });
}
makeReport();