"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// add dynamic work experience fields
function addNewWeField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here...");
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb === null || weOb === void 0 ? void 0 : weOb.insertBefore(newNode, weAddButtonOb);
}
// add dynamic Academic qualification fields
function addNewAqField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here...");
    let aqOb = document.getElementById("aq");
    let aqAddButton = document.getElementById("aqAddButton");
    aqOb === null || aqOb === void 0 ? void 0 : aqOb.insertBefore(newNode, aqAddButton);
}
// add dynamic Skill fields
function addNewSsField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ssFied");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here...");
    let skOb = document.getElementById("skills");
    let ssAddButton = document.getElementById("ssAddButton");
    skOb === null || skOb === void 0 ? void 0 : skOb.insertBefore(newNode, ssAddButton);
}
// Validation function
function validateInput(id, message) {
    const element = document.getElementById(id);
    if (!element || !element.value.trim()) {
        alert(`Please enter ${message}`);
        element === null || element === void 0 ? void 0 : element.focus();
        return false;
    }
    return true;
}
// Validate email format
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
// Main function to generate resume
function generateResume() {
    return __awaiter(this, void 0, void 0, function* () {
        // Validation checks
        if (!validateInput("nameField", "your name"))
            return;
        if (!validateInput("contactField", "contact number"))
            return;
        if (!validateInput("emailField", "your email"))
            return;
        const emailField = document.getElementById("emailField");
        if (emailField && !validateEmail(emailField.value)) {
            alert("Please enter a valid email address");
            emailField.focus();
            return;
        }
        // Get Elements from input fields
        const nameField = document.getElementById("nameField");
        const nameT1 = document.getElementById("nameT1");
        const nameT2 = document.getElementById("nameT2");
        // Push validated name
        if (nameField && nameT1 && nameT2) {
            nameT1.innerHTML = nameField.value;
            nameT2.innerHTML = nameField.value;
        }
        // Contact
        const contactField = document.getElementById("contactField");
        const contactT = document.getElementById("contactT");
        if (contactField && contactT) {
            contactT.innerHTML = contactField.value;
        }
        // Address
        const addressField = document.getElementById("addressField");
        const addressT = document.getElementById("addressT");
        if (addressField && addressT) {
            addressT.innerHTML = addressField.value;
        }
        // Email
        const emailT = document.getElementById("emailT");
        if (emailField && emailT) {
            emailT.innerHTML = emailField.value;
        }
        //   FaceBook Link
        // Get velue from address field
        const fbField = document.getElementById("fbField");
        // get template object for address
        const fbT = document.getElementById("fbT");
        //   Check if both elements are found
        if (fbField && fbT) {
            // Push the value from the input field into the template
            fbT.innerHTML = fbField.value;
        }
        else {
            console.error("Element not found: Ensure `fbField` and `fbT` exist in the DOM.");
        }
        //   Linkedin Link
        // Get velue from Linkedin field
        const linkedField = document.getElementById("linkedField");
        // get template object for Linkedin link
        const linkedT = document.getElementById("linkedT");
        //   Check if both elements are found
        if (linkedField && linkedT) {
            // Push the value from the input field into the template
            linkedT.innerHTML = linkedField.value;
        }
        else {
            console.error("Element not found: Ensure `linkedField` and `linkedT` exist in the DOM.");
        }
        //   Objective
        // Get value form objective field element
        const objectiveField = document.getElementById("objectiveField");
        // Get Template object for objective
        const objectiveT = document.getElementById("objectiveT");
        // check if both elements are found
        if (objectiveField && objectiveT) {
            // Push the value from the input field into the template
            objectiveT.innerHTML = objectiveField.value;
        }
        else {
            console.error("Element not found: Ensure `objectiveField` and `objectiveT` exist in the DOM.");
        }
        //   Work Experience
        // Get all elements with the class "weField" (input or textarea fields)
        const weFields = document.getElementsByClassName("weField");
        // Initialize an empty string to store the list items
        let str = "";
        // Iterate through each element in the HTMLCollection
        for (const e of Array.from(weFields)) {
            // Append the value of each field as a list item to the string
            str += `<li> ${e.value} </li>`;
        }
        // Find the element with the ID "weT" and update its innerHTML
        const weT = document.getElementById("weT");
        if (weT) {
            weT.innerHTML = str; // Update the innerHTML if the element exists
        }
        else {
            console.error('Element with ID "weT" not found.');
        }
        //   Academic Qualification
        // Get all elements with the class "eqField" (input or textarea fields)
        const eqField = document.getElementsByClassName("eqField");
        // Initialize an empty string to store the list items
        let strAq = "";
        // Iterate through each element in the HTMLCollection
        for (const e of Array.from(eqField)) {
            // Append the value of each field as a list item to the string
            strAq += `<li> ${e.value} </li>`;
        }
        // Find the element with the ID "aqT" and update its innerHTML
        const aqT = document.getElementById("aqT");
        if (aqT) {
            aqT.innerHTML = strAq; // Update the innerHTML if the element exists
        }
        else {
            console.error('Element with ID "aqT" not found.');
        }
        //   Skills Section
        // Get all elements with the class "ssFied" (input or textarea fields)
        const ssFied = document.getElementsByClassName("ssFied");
        // Initialize an empty string to store the list items
        let strSkills = "";
        // Iterate through each element in the HTMLCollection
        for (const e of Array.from(ssFied)) {
            // Append the value of each field as a list item to the string
            strSkills += `<li> ${e.value} </li>`;
        }
        // Find the element with the ID "skillsT" and update its innerHTML
        const skillsT = document.getElementById("skillsT");
        if (skillsT) {
            skillsT.innerHTML = strSkills; // Update the innerHTML if the element exists
        }
        else {
            console.error('Element with ID "skillsT" not found.');
        }
        // Code for setting the profile image
        // Get the image input field (photoInput) from the DOM and cast it to HTMLInputElement
        const photoInput = document.getElementById("imgField");
        // Get the image element (resumePhoto) where the uploaded image will be displayed
        const resumePhoto = document.getElementById("imgTemplate");
        // Check if a file is selected in the input field. If yes, get the first file; otherwise, set to null
        const photofile = photoInput.files ? photoInput.files[0] : null;
        // Initialize an empty string to store the base64 representation of the image
        let photoBase64 = "";
        // If a photo is selected (photofile is not null)
        if (photofile) {
            photoBase64 = yield fileToBase(photofile);
            localStorage.setItem("imgTemplate", photoBase64);
            resumePhoto.src = photoBase64;
        }
        /**
         * Converts a file (image) to a Base64 string using FileReader.
         * @param file - The image file to be converted.
         * @returns A Promise that resolves to a Base64 string.
         */
        function fileToBase(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                // On successful file read, resolve the promise with the Base64 string
                reader.onload = () => resolve(reader.result);
                // If an error occurs during file reading, reject the promise
                reader.onerror = reject;
                // Start reading the file as a Data URL (Base64 encoded string)
                reader.readAsDataURL(file);
            });
        }
        // Toggle cv form and cv template options
        // Hide the form and show the template
        const cvForm = document.getElementById("cv-form");
        const cvTemplate = document.getElementById("cv-template");
        if (cvForm && cvTemplate) {
            cvForm.style.display = "none"; // Hide form
            cvTemplate.style.display = "block"; // Show template
        }
    });
}
// Funciton to print resum
function printCV() {
    window.print();
}
// function to edit resume
function editCV() {
    // Get the form and template elements by their IDs
    const cvForm = document.getElementById("cv-form");
    const cvTemplate = document.getElementById("cv-template");
    // Check if the elements exist before accessing their style properties
    if (cvForm && cvTemplate) {
        cvForm.style.display = "block"; // Show the CV form
        cvTemplate.style.display = "none"; // Hide the CV template
    }
    else {
        console.error("One or both elements (cv-form or cv-template) not found.");
    }
}