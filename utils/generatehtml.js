// Taking all the data from the index.js to create this HTML file
// Creating a loop to loop through the data array
function generateHtml(data) {
    let htmlMarkup = "";
    for (let i = 0; i < data.length; i++){
        if (data[i].getRole() === "Intern"){
            htmlMarkup += `
            <div class="col-4">
            <div class="card text-bg-dark mb-3 rounded">
        <div class="card-body col"> 
      <br>
          <h5 class="card-title fw-semibold fs-4">${data[i].getRole()}</h5>
          <hr>
          <h6>${data[i].getName()}</h6>
          <p class="card-text">ID: ${data[i].getId()}</p>
          <p class="card-text">School: ${data[i].getSchool()}</p>
          <p> Email: 
          <a href='mailto:${data[i].getEmail()}' class="btn btn-primary">${data[
              i
            ].getEmail()}</a>
            </p>
        </div>
        </div>
      </div>
     `
        }
       if (data[i].getRole() === "Manager"){
        htmlMarkup += `
        <div class="col-4">
        <div class="card text-bg-dark mb-3 rounded">
    <div class="card-body col"> 
  <br>
      <h5 class="card-title fw-semibold fs-4">${data[i].getRole()}</h5>
      <hr>
      <h6>${data[i].getName()}</h6>
      <p class="card-text">ID: ${data[i].getId()}</p>
      <p class="card-text">office number: ${data[i].getOfficeNumber()}</p>
      <p> Email: 
      <a href='mailto:${data[i].getEmail()}' class="btn btn-primary">${data[
          i
        ].getEmail()}</a>
        </p>
    </div>
    </div>
  </div>
        `
       }
       if (data[i].getRole() === "Engineer"){
        htmlMarkup += `
        <div class="col-4">
        <div class="card text-bg-dark mb-3 rounded">
    <div class="card-body col"> 
  <br>
      <h5 class="card-title fw-semibold fs-4">${data[i].getRole()}</h5>
      <hr>
      <h6>${data[i].getName()}</h6>
      <p class="card-text">ID: ${data[i].getId()}</p>
      <p> Email: 
      <a href='mailto:${data[i].getEmail()}' class="btn btn-primary">${data[
          i
        ].getEmail()}</a>
        </p>
        <a> class="card-text" href="https://github.com/${data[i].getGithub()}">Github Profile</a>
    </div>
    </div>
  </div>
        `
    }
}}