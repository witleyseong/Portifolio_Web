// Scroll smooth to the #
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const destiny = document.querySelector(this.getAttribute('href'));
    if (destiny) {
      destiny.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// Effect of typing
const nameText = "Witley Seong";
let i = 0;

function typeWriter(){
    if (i < nameText.length) {
        document.getElementById("typed-name").innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();