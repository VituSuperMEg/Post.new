const clientId = "6ff245c1366e99109114";
const redirectUri = "http://127.0.0.1:5500/post.html";
const githubAuthUrl = "https://github.com/login/oauth/authorize";
// Client Secret : 5fc97061d81763f2c43043000659eba55165c22d
const githubAuth = document.querySelector('#login');

login.addEventListener("click", () => {
  const authUrl = `${githubAuthUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;

  window.location.href = authUrl;
});
