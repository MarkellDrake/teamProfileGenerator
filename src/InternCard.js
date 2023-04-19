function internCard(intern){
return` <div class="col-sm-4">
<div class="card">
<!--  <div class="card-body">  -->
        <div class="card" style="width: 18rem;">
        <div class="card-body">
         <h5 class="card-title">${intern.getName()}</h5>
          <h5 class="card-title"><i class="fa-solid fa-user-graduate">${intern.getRole()}</h5>
          <ul class="list-group">
            <li class="list-group-item"> ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item"> School: ${intern.getSchool()}</li>

          </ul>
        </div>
       
  </div>
</div>
</div>`
}
module.exports = internCard