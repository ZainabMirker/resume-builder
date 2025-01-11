var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var technicalSkills = document.getElementById('technical-skills').value;
    var softSkills = document.getElementById('soft-skills').value;
    var achievements = document.getElementById('achievements').value;
    var certifications = document.getElementById('certifications').value;
    var profilePicture = (_a = document.getElementById('profile-picture').files) === null || _a === void 0 ? void 0 : _a[0];
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        technicalSkills: technicalSkills,
        softSkills: softSkills,
        achievements: achievements,
        certifications: certifications,
        profilePicture: profilePicture
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2>Editable Resume</h2>\n    <h3>Personal Information</h3>\n    <img src=\"".concat(profilePicture ? URL.createObjectURL(profilePicture) : '', "\" alt=\"Profile Picture\" width=\"150\" height=\"150\" style=\"float:right; margin-left: 20px; border-radius: 50%;\" />\n    <p><b>Name:</b> <span contenteditable=\"true\">").concat(name, "</span></p>\n    <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p><b>Technical Skills:</b> <span contenteditable=\"true\">").concat(technicalSkills, "</span></p>\n    <p><b>Soft Skills:</b> <span contenteditable=\"true\">").concat(softSkills, "</span></p>\n    <h3>Achievements</h3>\n    <p contenteditable=\"true\">").concat(achievements, "</p>\n    <h3>Certifications</h3>\n    <p contenteditable=\"true\">").concat(certifications, "</p>\n  ");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('technical-skills').value = resumeData.technicalSkills;
            document.getElementById('soft-skills').value = resumeData.softSkills;
            document.getElementById('achievements').value = resumeData.achievements;
            document.getElementById('certifications').value = resumeData.certifications;
        }
    }
});
