//Hamburger menus

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    hamburgerMenu.addEventListener('click', function() {
        dropdownMenu.classList.toggle('open');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            dropdownMenu.classList.remove('open');
        }
    });
});

//Adaptive Bio

const words = ["i", "make", "music", "and", "art"];

function permute(arr) {
  if (arr.length <= 1) return [arr];
  const results = [];
  arr.forEach((word, i) => {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perms = permute(rest);
    perms.forEach(p => results.push([word, ...p]));
  });
  return results;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const allPerms = shuffle(permute(words).map(p => p.join(" ")));
let index = 0;

function updateQuote() {
  document.getElementById("quote-box").textContent = allPerms[index];
  index = (index + 1) % allPerms.length;
}

updateQuote();
setInterval(updateQuote, 1000);