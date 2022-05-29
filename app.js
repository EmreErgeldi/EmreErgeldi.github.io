const github = new GitHub;
const ui = new UI;
//Search Input
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", e =>{
  //Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make HTTP call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === "Not Found") {
          //Show alert
          ui.showAlert("User not found", "alert alert-danger");
        } else {
          //Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
          console.log(data);
        }
      })
  } else{
    //Clear Profile
    ui.clearProfile();
  }
});
