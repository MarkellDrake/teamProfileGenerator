function engineerCard(engineer){
    return` <div class="col-sm-4">
    <div class="card">
     <!--<div class="card-body"> -->
          <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${engineer.getName()} </h5>
            <h5 class="card-title"> <i class="fa-solid fa-glasses"> ${engineer.getRole()} </h5>
            <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
            <li class="list-group-item"> Github: ${engineer.getGithub()}/li>
          </ul>
          </div>
          
      </div>
    </div>
  </div>`
}
module.exports = engineerCard