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
        <a class="card-text" href="https://github.com/${data[i].getGithub()}">Github Profile</a>
    </div>
    </div>
  </div>
        `
    }
}
const html = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>
    <nav>
        <div class="container">
            <div class="row">
            <header class="fs-1 text-center m-1 p-4 bg-primary text-dark">My Team</header>
    </nav>
<main class="row">
    ${htmlMarkup}
</main>

 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>`;
return html;
}


module.exports = generateHtml;