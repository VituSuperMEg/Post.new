const posts = [
  { 
    title: 'Projeto com Bun', 
    time: '12/09/2023',
    description: 'Conheça o Bun.js para sua criação de projetos. Bun é rápido mais que o próprio node.js',
    body: `Um projeto com o "Bun" é uma referência a um possível desenvolvimento de software ou projeto que utiliza o "Bun" como parte de sua estrutura ou tecnologia. No entanto, o termo "Bun" não é amplamente conhecido no contexto de desenvolvimento de software até a minha data de corte de conhecimento em setembro de 2021.

    Sem informações adicionais sobre o que exatamente é o "Bun" e como ele se relaciona com o projeto, é difícil fornecer uma descrição específica. Se você tiver mais detalhes sobre o que o "Bun" representa ou como ele é usado em um projeto específico, ficarei feliz em fornecer uma descrição mais precisa e detalhada.`,
  },
  { 
    title: 'Bun',  
    time: '12/09/2023',
    description: 'Conheça o Bun.js para sua criação de projetos. Bun é rápido mais que o próprio node.js',
  }
];

const element = document.querySelector(".no-post");
const root = document.querySelector("#root");
const postContainer = document.querySelector(".post-container");

if (posts.length === 0) {
  element.innerHTML = `
    <img src="/assets/post.svg" alt="no-post">
    <h3>No post</h3>
  `;
} else {
  root.innerHTML = '';
  
  posts.forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = `
      <time>${post.time === undefined ? '' : post.time}</time>
      <a href="#" class="post-link">${post.title}</a>
      <p class="description">${post.description === undefined ? '' : post.description}</p>
      <p class="body" style="display: none;">${post.body === undefined ? '' : post.body}</p>
    `;
    root.appendChild(postDiv);

    const postLink = postDiv.querySelector(".post-link");
    const postBody = postDiv.querySelector(".body");
    
    postLink.addEventListener("click", (event) => {
      event.preventDefault();
      const otherPosts = document.querySelectorAll(".body");
      otherPosts.forEach((otherPost) => {
        otherPost.style.display = "none";
      });
      postBody.style.display = "block";
    });
  });
}
