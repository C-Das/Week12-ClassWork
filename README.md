# Week12-ClassWork
## Task1
Create a bears_db database, make a happy_bears table with a primary integer auto incrementing key of id, a name varchar(30) not null, a favorite_food varchar(30) not null, a personality varchar(30) not null.

Insert a happy bear named Nom Nom whose favorite food is tacos and is mean.

Ans - bears.js

## Task-2 : Add a Prompt

Make a node file that allows a command line user to insert a bear with

node index.js "Smoky" "beef jerky" "mean"

Ans- bears.js

## Task-3 FBI Report 
The FBI needs an app to take eye witness reports of UFO sighting, you will be creating a node.js app to help the FBI make reports.

When the app is run, the user will get a briefing with console logs. The app will start by console logging these messages each on their own lines:

  "Hi,I'm from the FBI (X-files Division) I just wanted to ask you some questions."
  "Please answer the following questions as best you can, but if can't answer the question please say NOT SURE."
  "What is..."
Instructions:

Create a new app directory named 'FBI'.
Setting up node by doing 'npm init'
Create 'index.js` file
Create a function called makeReport()
Call prompt inside of the makeReport() function, only one prompt for this app
Call makeReport() when you finishing building the function
After these messages are been displayed, prompt the user for their:

first name
last name
age
time of sighting
location of sighting
name of another witness
description of sighting
initial thoughts
number of previous encounters

You must create a report with the answers you get from the user.
If 7 or more answers are not answered in the report, console log conclusion is Very Unreliable.
If 4 or more answers are not answered the report, console log conclusion is Unreliable.
If only 2 or less answer are not answered the report, console log conclusion is Complete.
Once the user has made an input for all of the questions, concatenate all the answers and your conclusion into one paragraph and console log it to the terminal in the following format, see example below.

FBI aliens sighting report:

Eye witness name is Bob Johnson at age: 56
According to eye witness sighting happened sometime around 8PM-ish near Burbank
Another possible witness includes a person by the name of Alice
The sighting is described as: Some monster thingy and the witness's initial thoughts are: WOAH MAN!
This is the witness's 11th encounter

Report conclusion: Complete