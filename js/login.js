const userInfo = document.getElementById('user-info');
const usernameElement = document.getElementById('username');
const userAvatarElement = document.getElementById('user-avatar')

const accessToken = new URLSearchParams(window.location.search).get("code");
console.log('token : ' + accessToken);

if (accessToken) {
  const apiUrl = "https://api.github.com/user";
  fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      
    },
  })
    .then((response) => response.json())
    .then((user) => {
      const userName = user.name || user.login; 
      const userAvatarUrl = user.avatar_url;

      usernameElement.textContent = userName;
      userAvatarElement.src = userAvatarUrl;
      userInfo.style.display = "block";
    })
    .catch((error) => {
      console.error("Erro ao obter informações do usuário:", error);
    });
}
