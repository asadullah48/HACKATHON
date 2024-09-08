// Function to make the resume editable
function makeResumeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var target = element;
            var originalText = target.textContent || '';
            // Create an input field for editing
            var inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = originalText;
            // Replace the clicked element with the input field
            target.replaceWith(inputField);
            inputField.focus();
            // Save changes when the input loses focus or Enter key is pressed
            inputField.addEventListener('blur', function () { return saveChanges(inputField, target); });
            inputField.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    saveChanges(inputField, target);
                }
            });
        });
    });
}
// Function to save the changes made to the editable fields
function saveChanges(inputField, target) {
    var updatedText = inputField.value || 'Not provided';
    target.textContent = updatedText;
    // Replace the input field with the updated text
    inputField.replaceWith(target);
}
// Initialize the resume editing feature
var editButton = document.getElementById('edit-resume');
editButton.addEventListener('click', function () {
    makeResumeEditable();
});
