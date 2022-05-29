class GitHub{
  constructor(){
    this.client_id = 'a5b84901da5902b38f84';
    this.client_secret = '79127164b3f19c774ab21b26a8f1da60212cbd7b';
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    };
  }
}