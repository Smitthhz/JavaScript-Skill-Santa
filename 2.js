var year_born = prompt("Please enter your date of birth:", "Type here");
var d = new Date();
var n = d.getFullYear();
function getAge(birthYear){
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
calculatedAge = getAge(year_born);
alert("Hello, " + "you are " + calculatedAge + " years old!");
if(calculatedAge >=18 && calculatedAge <= 44)
{
    window.location='https://selfregistration.cowin.gov.in'
}
else
{
    document.write("<h1>You are not eligible for Covid-19 Vaccine at this moment. Stay tuned for latest Updates.<h1>");
}
