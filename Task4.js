//1.Create your own resume Json format

var resume = {
    "Summary": {
        "Objective": "A highly motivated and detail-oriented software engineer seeking to use my expertise in software development and computer programming to provide innovative solutions and outstanding customer service at ABC Company.",
        "Software Engineer": "Full Strack Developer",
  
      },
    "Contact Details": {
      "Name": "Karthickraja",
      "Email": "Karthickraja@gmail.com",
      "Phone": "9344556896",
      
      "Location": {
        "Address": "269 Melpettai",
        "PostalCode": "632511",
        "City": "Kanchipuram",
      },
      "Profiles": [{
        "Network": "Linkedin",
        "Username": "Karthick",
        "Url": "https://www.linkedin.com/in/karthickraja-h-6577871a8/"
      }]
    },
    "Work Experience": [{
      "Company name": "Impiger technologies",
      "Position": "Trainee",
      "StartDate": "Jan-2022",
      "EndDate": "March-2023",

      "Company name": "Keystone Automation",
      "Position": "Engineer",
      "StartDate": "Apr-2023",
      "EndDate": "July-2023",
    }],
    
   
    "Education": [{
      "Institution": "St.Joseph's",
      "Stream": "IT",
      "StudyType": "Bachelor",
      "StartDate": "Aug - 2018",
      "EndDate": "July -2022",
      "Score": "7.8",
     
    }],
    "certificates": [{
      "Name": "Ui&Ux",
      "Date": "Jan 2024",
      "Issuer": "Guvi ",

    }],
  
    "Skills": [{
      "Name": "Web Development",
      "Level": "Proficient",
      "Keywords": [
        "HTML",
        "CSS",
        "JavaScript",
        "Dot net",
        "Sql",
        "Ui&Ux"
      ]
    }],
    "Languages": [{
      "Language": "English, Tamil",
      "Fluency": "Native speaker"
    }],
   
    "Projects": [{
      "Name": "PPL",
      "StartDate": "Aug-2022",
      "EndDate": "Jan-2023",
      "Description": "Web Application",
      "Highlights": [
      "Best Perfomer"
      ],

      "Name": "PWC",
      "StartDate": "Aug-2022",
      "EndDate": "Jan-2023",
      "Description": "Web Application",
     
      "Name": "Tribe Track",
      "StartDate": "Jan-2023",
      "EndDate": "Mar-2023",
      "Description": "Web Application",
      "Highlights": [
        "Best Perfomer"
      ],
    }]
  }





//2. For the above JSON,iterate over all for loops(for,for in,for of,forEach)
//For & For in
var arr = [ {"id":"1", "class": "7th"}, {"id":"2", "class": "8th"}];
    
for (var i = 0; i < arr.length; i++){
  document.write("<br><br>array index: " + i);
  var obj = arr[i];

  for (var key in obj){
    var value = obj[key];
    document.write("<br> - " + key + ": " + value);
  }
}

//output:
//array index: 0
//- id: 1
//- class: 7th

//array index: 1
//- id: 2
//- class: 8th


//For of

var mycars = [{name:'karthi'}, {name:'Audi'}];

for (var car of mycars) 
{
  document.write(car.name + "<br />");
}
//Output : Karthi Audi

//For Each 
var results = [ {"id":"1", "class": "9th"}, {"id":"2", "classd": "10th"} ];

results.forEach(function(item) {
    console.log(item);
})

//output 
[{
    "id": "1",
    "class": "9th"
  }
 [ {
    "id": "2",
    "classd": "10th"
  }]]



