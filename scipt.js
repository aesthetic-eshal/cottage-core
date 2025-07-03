function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');

  petal.style.left = Math.random() * window.innerWidth + 'px';
  petal.style.animationDuration = (4 + Math.random() * 4) + 's'; // 4–8 seconds
  petal.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;

  document.querySelector('.petals').appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 9000);
}

setInterval(createPetal, 300);
// Fade in blog posts on scroll
const posts = document.querySelectorAll('.post');

function revealPosts() {
  posts.forEach(post => {
    const rect = post.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      post.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealPosts);
window.addEventListener('load', revealPosts); // Show on first load
