var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// add dynamic work experience fields
function addNewWeField() {
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here...");
    var weOb = document.getElementById("we");
    var weAddButtonOb = document.getElementById("weAddButton");
    weOb === null || weOb === void 0 ? void 0 : weOb.insertBefore(newNode, weAddButtonOb);
}
// add dynamic Academic qualification fields
function addNewAqField() {
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here...");
    var aqOb = document.getElementById("aq");
    var aqAddButton = document.getElementById("aqAddButton");
    aqOb === null || aqOb === void 0 ? void 0 : aqOb.insertBefore(newNode, aqAddButton);
}
// add dynamic Skill fields
function addNewSsField() {
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ssFied");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here...");
    var skOb = document.getElementById("skills");
    var ssAddButton = document.getElementById("ssAddButton");
    skOb === null || skOb === void 0 ? void 0 : skOb.insertBefore(newNode, ssAddButton);
}
// Validation function
function validateInput(id, message) {
    var element = document.getElementById(id);
    if (!element || !element.value.trim()) {
        alert("Please enter ".concat(message));
        element === null || element === void 0 ? void 0 : element.focus();
        return false;
    }
    return true;
}
// Validate email format
function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
// Main function to generate resume
function generateResume() {
    return __awaiter(this, void 0, void 0, function () {
        /**
         * Converts a file (image) to a Base64 string using FileReader.
         * @param file - The image file to be converted.
         * @returns A Promise that resolves to a Base64 string.
         */
        function fileToBase(file) {
            return new Promise(function (resolve, reject) {
                var reader = new FileReader();
                // On successful file read, resolve the promise with the Base64 string
                reader.onload = function () { return resolve(reader.result); };
                // If an error occurs during file reading, reject the promise
                reader.onerror = reject;
                // Start reading the file as a Data URL (Base64 encoded string)
                reader.readAsDataURL(file);
            });
        }
        var emailField, nameField, nameT1, nameT2, contactField, contactT, addressField, addressT, emailT, fbField, fbT, linkedField, linkedT, objectiveField, objectiveT, weFields, str, _i, _a, e, weT, eqField, strAq, _b, _c, e, aqT, ssFied, strSkills, _d, _e, e, skillsT, photoInput, resumePhoto, photofile, photoBase64, cvForm, cvTemplate;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    // Validation checks
                    if (!validateInput("nameField", "your name"))
                        return [2 /*return*/];
                    if (!validateInput("contactField", "contact number"))
                        return [2 /*return*/];
                    if (!validateInput("emailField", "your email"))
                        return [2 /*return*/];
                    emailField = document.getElementById("emailField");
                    if (emailField && !validateEmail(emailField.value)) {
                        alert("Please enter a valid email address");
                        emailField.focus();
                        return [2 /*return*/];
                    }
                    nameField = document.getElementById("nameField");
                    nameT1 = document.getElementById("nameT1");
                    nameT2 = document.getElementById("nameT2");
                    // Push validated name
                    if (nameField && nameT1 && nameT2) {
                        nameT1.innerHTML = nameField.value;
                        nameT2.innerHTML = nameField.value;
                    }
                    contactField = document.getElementById("contactField");
                    contactT = document.getElementById("contactT");
                    if (contactField && contactT) {
                        contactT.innerHTML = contactField.value;
                    }
                    addressField = document.getElementById("addressField");
                    addressT = document.getElementById("addressT");
                    if (addressField && addressT) {
                        addressT.innerHTML = addressField.value;
                    }
                    emailT = document.getElementById("emailT");
                    if (emailField && emailT) {
                        emailT.innerHTML = emailField.value;
                    }
                    fbField = document.getElementById("fbField");
                    fbT = document.getElementById("fbT");
                    //   Check if both elements are found
                    if (fbField && fbT) {
                        // Push the value from the input field into the template
                        fbT.innerHTML = fbField.value;
                    }
                    else {
                        console.error("Element not found: Ensure `fbField` and `fbT` exist in the DOM.");
                    }
                    linkedField = document.getElementById("linkedField");
                    linkedT = document.getElementById("linkedT");
                    //   Check if both elements are found
                    if (linkedField && linkedT) {
                        // Push the value from the input field into the template
                        linkedT.innerHTML = linkedField.value;
                    }
                    else {
                        console.error("Element not found: Ensure `linkedField` and `linkedT` exist in the DOM.");
                    }
                    objectiveField = document.getElementById("objectiveField");
                    objectiveT = document.getElementById("objectiveT");
                    // check if both elements are found
                    if (objectiveField && objectiveT) {
                        // Push the value from the input field into the template
                        objectiveT.innerHTML = objectiveField.value;
                    }
                    else {
                        console.error("Element not found: Ensure `objectiveField` and `objectiveT` exist in the DOM.");
                    }
                    weFields = document.getElementsByClassName("weField");
                    str = "";
                    // Iterate through each element in the HTMLCollection
                    for (_i = 0, _a = Array.from(weFields); _i < _a.length; _i++) {
                        e = _a[_i];
                        // Append the value of each field as a list item to the string
                        str += "<li> ".concat(e.value, " </li>");
                    }
                    weT = document.getElementById("weT");
                    if (weT) {
                        weT.innerHTML = str; // Update the innerHTML if the element exists
                    }
                    else {
                        console.error('Element with ID "weT" not found.');
                    }
                    eqField = document.getElementsByClassName("eqField");
                    strAq = "";
                    // Iterate through each element in the HTMLCollection
                    for (_b = 0, _c = Array.from(eqField); _b < _c.length; _b++) {
                        e = _c[_b];
                        // Append the value of each field as a list item to the string
                        strAq += "<li> ".concat(e.value, " </li>");
                    }
                    aqT = document.getElementById("aqT");
                    if (aqT) {
                        aqT.innerHTML = strAq; // Update the innerHTML if the element exists
                    }
                    else {
                        console.error('Element with ID "aqT" not found.');
                    }
                    ssFied = document.getElementsByClassName("ssFied");
                    strSkills = "";
                    // Iterate through each element in the HTMLCollection
                    for (_d = 0, _e = Array.from(ssFied); _d < _e.length; _d++) {
                        e = _e[_d];
                        // Append the value of each field as a list item to the string
                        strSkills += "<li> ".concat(e.value, " </li>");
                    }
                    skillsT = document.getElementById("skillsT");
                    if (skillsT) {
                        skillsT.innerHTML = strSkills; // Update the innerHTML if the element exists
                    }
                    else {
                        console.error('Element with ID "skillsT" not found.');
                    }
                    photoInput = document.getElementById("imgField");
                    resumePhoto = document.getElementById("imgTemplate");
                    photofile = photoInput.files ? photoInput.files[0] : null;
                    photoBase64 = "";
                    if (!photofile) return [3 /*break*/, 2];
                    return [4 /*yield*/, fileToBase(photofile)];
                case 1:
                    photoBase64 = _f.sent();
                    localStorage.setItem("imgTemplate", photoBase64);
                    resumePhoto.src = photoBase64;
                    _f.label = 2;
                case 2:
                    cvForm = document.getElementById("cv-form");
                    cvTemplate = document.getElementById("cv-template");
                    if (cvForm && cvTemplate) {
                        cvForm.style.display = "none"; // Hide form
                        cvTemplate.style.display = "block"; // Show template
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Funciton to print resum
function printCV() {
    window.print();
}
// function to edit resume
function editCV() {
    // Get the form and template elements by their IDs
    var cvForm = document.getElementById("cv-form");
    var cvTemplate = document.getElementById("cv-template");
    // Check if the elements exist before accessing their style properties
    if (cvForm && cvTemplate) {
        cvForm.style.display = "block"; // Show the CV form
        cvTemplate.style.display = "none"; // Hide the CV template
    }
    else {
        console.error("One or both elements (cv-form or cv-template) not found.");
    }
}
