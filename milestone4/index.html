// Function to make the resume editable
function makeResumeEditable(): void {
    const editableElements = document.querySelectorAll('.editable');
    
    editableElements.forEach((element) => {
      element.addEventListener('click', () => {
        const target = element as HTMLElement;
        const originalText = target.textContent || '';
  
        // Create an input field for editing
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = originalText;
  
        // Replace the clicked element with the input field
        target.replaceWith(inputField);
        inputField.focus();
  
        // Save changes when the input loses focus or Enter key is pressed
        inputField.addEventListener('blur', () => saveChanges(inputField, target));
        inputField.addEventListener('keydown', (e: KeyboardEvent) => {
          if (e.key === 'Enter') {
            saveChanges(inputField, target);
          }
        });
      });
    });
  }
  
  // Function to save the changes made to the editable fields
  function saveChanges(inputField: HTMLInputElement, target: HTMLElement): void {
    const updatedText = inputField.value || 'Not provided';
    target.textContent = updatedText;
  
    // Replace the input field with the updated text
    inputField.replaceWith(target);
  }
  
  // Initialize the resume editing feature
  let editButton = document.getElementById('edit-resume') as HTMLButtonElement;
  editButton.addEventListener('click', () => {
    makeResumeEditable();
  });