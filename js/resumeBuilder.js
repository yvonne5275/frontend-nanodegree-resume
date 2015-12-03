/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work ={

	"jobs": [{
		"employer": "Software AG",
		"title": "Lead Software Quality Engineer",
		"location": "Santa Clara, CA",
		"dates": "2010 - 2015",
		"description": "Created modular, reusable, maintainable test automation."

	},{
		"employer": "TiVo",
		"title": "Software Quality Manager",
		"location": "Alviso, CA",
		"dates": "2005 - 2008",
		"description": "Managed the Test Automation and Build and Release teams for the TiVo Comcast and TiVo Cox DVR products."
	}],
	"display": "function"
};

var projects ={
	"project":[{
		"title": "Sample Project1",
		"dates":"2010 - 2011",
		"description":"Project 1 description",
		"images":["images/fry.jpg","images/fry.jpg","images/fry.jpg"]
	},{
		"title":"Sample Project2" ,
		"dates":"2015",
		"description":"Project2 description",
		"images":["images/fry.jpg","images/fry.jpg"]
	}],
	"display": "function"
};

var bio = {
	"name" : "Yvonne Lawrence",
	"role" : "Web Developer",
	"contacts": {
		"mobile": "408-623-9999",
		"email" : "yvonne@gmail.com",
		"github": "github url",
		"twitter": "twitter handle",
		"location": "San Jose"
	},
	"welcomeMessage" : "welcome to my page",
	"skills": ["skill1","skill2","skill3","skill4"],
	"biopic": "images/yvonne.jpg",
	"display": "function"
};

var education = {
	"schools":[{
		"name": "University Of California, Berkeley",
		"location": "Berkeley, CA",
		"degree": "BA",
		"majors": ["Biological Sciences","Basket Weaving"],
		"dates": 0 ,
		"url": " school1 url"
	},
	{
		"name": "University of California, Santa Cruz extension",
		"location": "Santa Clara, CA",
		"degree": "Certificate",
		"majors": ["Computer Programming"],
		"dates": 2010,
		"url": "school2 url"
	}],
	"onlineCourses":[
	{
		"title": "online course title1",
		"school": "Udacity",
		"dates": 2015,
		"url": "course1 url"
	},
	{
		"title": "online course title2",
		"school": "Udacity",
		"dates": 2015,
		"url": "course2 url"
	}],
	"display": "function"
};

/* bio*/
bio.display = function(){
	/*header */
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
 	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedBioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedMobile +
							formattedEmail +
							formattedGithub +
							formattedTwitter +
							formattedLocation
							);

	var numberOfSkills = bio.skills.length;
	$("#header").append(HTMLskillsStart);
	for (var i =0; i < numberOfSkills; i++){
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#header:last").append(formattedSkill);
	}
	/*footer */
	$("#footerContacts").append(formattedMobile +
							formattedEmail +
							formattedGithub +
							formattedTwitter +
							formattedLocation
							);
};
bio.display();

/* work experience*/
work.display = function(){
	$("#workExperience").append(HTMLworkStart);
	for(var job in work.jobs){
		if (work.jobs.hasOwnProperty(job)){
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedJobTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedJobDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			var formattedJobLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			var formattedJobCategory = formattedEmployer+formattedJobTitle+formattedJobDates+formattedJobLocation;
			$(".work-entry:last").append(formattedJobCategory);
			var formattedJobDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedJobDescription);
		}
	}
};
work.display();

/* projects */
projects.display = function(){
	$("#projects").append(HTMLprojectStart);
	for(var proj in projects.project){
		if (projects.project.hasOwnProperty(proj)){
				var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[proj].title);
				$(".project-entry:last").append(formattedTitle);
				var formattedDates = HTMLprojectDates.replace("%data%",projects.project[proj].dates);
				$(".project-entry:last").append(formattedDates);
				var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[proj].description);
				$(".project-entry:last").append(formattedDescription);
				var numImages = projects.project[proj].images.length;
				for (var i =0; i < numImages; i++){
						var formattedImages = HTMLprojectImage.replace("%data%",projects.project[proj].images[i]);
						$(".project-entry:last").append(formattedImages);
				}
		}
	}
};
projects.display();

/* education */
/* Could not find a HTML school URL???? */
education.display = function(){
	var formattedSchoolDates;
	$("#education").append(HTMLschoolStart);
	for(var school in education.schools){
		if (education.schools.hasOwnProperty(school)){
			var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedSchoolDegree= HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			if(education.schools[school].dates === 0){
				formattedSchoolDates = HTMLschoolDates.replace("%data%"," ");
			}
			else{
				formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			}
			$(".education-entry:last").append(formattedSchoolDates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			var numMajors = education.schools[school].majors.length;
			for (var i =0; i < numMajors; i++){
				var formattedSchoolMajor= HTMLschoolMajor.replace("%data%",education.schools[school].majors[i]);
				$(".education-entry:last").append(formattedSchoolMajor);
			}
		}
	}

	/*online courses */
	$("#education").append(HTMLonlineClasses);
	for(var course in education.onlineCourses){
		if (education.onlineCourses.hasOwnProperty(course)){
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};// end function
education.display();


/* map */
$("#mapDiv").append(googleMap);

// Your code goes here! Let me help you get started

function locationizer(work_obj) {
 var locationArray =[];
 for(var job in work_obj.jobs){
 	if (work_obj.jobs.hasOwnProperty(job)){
     var newLocation = work_obj.jobs[job].location;
     locationArray.push(newLocation);
    }
 }
   return locationArray;
}
// Did locationizer() work? This line will tell you!
console.log("log work location: " + locationizer(work));

function inName(name) {
	name = name.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	var formattedName = name[0] +" "+ name[1];
	return formattedName;
}

$("#main").append(internationalizeButton);
inName("yvonne lawrence");

