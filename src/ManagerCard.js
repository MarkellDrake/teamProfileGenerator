function managerCard(manager){
    return`   <div class="row">
    <div class="col-sm-3 mb-2 mb-sm-0">
        <div class="card">
          <!-- <div class="card-body"></div>*/ -->
            <div class="col-sm-3 mb-2 mb-sm-0"></div>
              <div class="card" style="width: 18rem;">
              <div class="card-body">
              <h5 class="card-title">${manager.getName()}</h5>
                <h5 class="card-title"><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h5>
                <ul class="list-group">
                <li class="list-group-item"> ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: ${manager.getEmail()}</li>
                <li class="list-group-item"> Office#: ${manager.getOfficeNumber()}</li>
                 
                 
              </ul>
              </div>
          </div>
        </div>
      </div>`
}
module.exports = managerCard