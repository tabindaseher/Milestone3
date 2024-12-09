const Form = document.getElementById('form') as HTMLFormElement;
const resume_display =document.getElementById('generate-resume') as HTMLDivElement

Form.addEventListener('submit' , (event: Event) =>{
    event.preventDefault();

    const name =(document.getElementById('name') as HTMLInputElement).value
    const email =(document.getElementById('email') as HTMLInputElement).value
    const phone =(document.getElementById('phone') as HTMLInputElement).value
    const degree =(document.getElementById('degree') as HTMLInputElement).value
    const university =(document.getElementById('university') as HTMLInputElement).value
    const year =(document.getElementById('years') as HTMLInputElement).value
    const company =(document.getElementById('company') as HTMLInputElement).value
    const position =(document.getElementById('position') as HTMLInputElement).value
    const response =(document.getElementById('respons') as HTMLInputElement).value
    const skills =(document.getElementById('skills') as HTMLInputElement).value

    const resume = `
    <h2><b>Resume</b></h2>
    <h3>personal Information</h3>
    <p><b>Name:</b>${name}
    <p><b>Email:</b>${email}
    <p><b>Phone:</b>${phone}

    <h3>Education</h3>
    <p><b>Degree:</b>${degree}
    <p><b>University:</b>${university}
    <p><b>Year:</b>${year}

     <h3>Experience</h3>
    <p><b>Company:</b>${company}
    <p><b>Position:</b>${position}
    <p><b>Respnsibility:</b>${response}

     <h3>Skills</h3>
      <p><b>Skills:</b>${skills} `;

      if(resume_display){
        resume_display.innerHTML = resume;
      }else{
        console.error('The resume display element is missing.')
      }
    
});