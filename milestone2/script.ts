const form = document.getElementById('resume-form') as HTMLFormElement;
const displayName = document.getElementById('display-name') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayEducation = document.getElementById('display-education') as HTMLElement;
const displayWork = document.getElementById('display-work') as HTMLElement;
const displaySkills = document.getElementById('display-skills') as HTMLElement;
const resumeSection = document.getElementById('resume') as HTMLElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const work = (document.getElementById('work') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;

  displayName.textContent = Name: ${name};
  displayEmail.textContent = Email: ${email};
  displayEducation.textContent = Education: ${education};
  displayWork.textContent = Work Experience: ${work};
  displaySkills.textContent = Skills: ${skills};

  resumeSection.style.display = 'block';
});