class UI{
  constructor(){
    this.profile = document.getElementById("profile");
  }

  //Shows profile in UI
  showProfile(user){
    this.profile.innerHTML = `
      <div class="card card-body mb-3 border-0 bg-dark">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-1">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge bg-success">Public Gists: ${user.public_gists}</span>
            <span class="badge bg-danger">Followers: ${user.followers}</span>
            <span class="badge bg-info">Following: ${user.following}</span>
            <br></br>
            <ul class="list-group">
              <li class="list-group-item text-light" style="background: #333;">Company: ${user.company}</li>
              <li class="list-group-item text-light" style="background: #333;">Website/Blog: ${user.blog}</li>
              <li class="list-group-item text-light" style="background: #333;">Location: ${user.location}</li>
              <li class="list-group-item text-light" style="background: #333;">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3 text-light">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  //Show alert in UI
  showAlert(message, className){
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div,search);

    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  //Clears alert before the new one
  clearAlert(){
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //Clears UI if its empty
  clearProfile(){
    this.profile.innerHTML = "";
  }

  showRepos(repos){
    let output = "";
    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-1" style="background: #333;">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target=_blank class="text-decoration-none text-info">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge bg-secondary text-dark">Watchers: ${repo.watchers_count}</span>
              <span class="badge bg-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `
    });

    document.getElementById("repos").innerHTML = output;
  }
}