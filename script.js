var form = document.getElementById('form');
var resumeDisplay = document.getElementById('generate-resume');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var year = document.getElementById('years').value;
    var company = document.getElementById('company').value;
    var position = document.getElementById('position').value;
    var response = document.getElementById('respons').value;
    var skills = document.getElementById('skills').value;
    var resume = "\n    <h2><b>Resume</b></h2>\n    <h3>personal Information</h3>\n    <p><b>Name:</b>".concat(name, "\n    <p><b>Email:</b>").concat(email, "\n    <p><b>Phone:</b>").concat(phone, "\n\n    <h3>Education</h3>\n    <p><b>Degree:</b>").concat(degree, "\n    <p><b>University:</b>").concat(university, "\n    <p><b>Year:</b>").concat(year, "\n\n     <h3>Experience</h3>\n    <p><b>Company:</b>").concat(company, "\n    <p><b>Position:</b>").concat(position, "\n    <p><b>Respnsibility:</b>").concat(response, "\n\n     <h3>Skills</h3>\n      <p><b>Skills:</b>").concat(skills, " ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resume;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
