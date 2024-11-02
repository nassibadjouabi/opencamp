// Dropdown menu functionality
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Hide the dropdown menu if clicked outside
window.addEventListener('click', (e) => {
  if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = 'none';
  }
});
// Toggle active class between "Suppliers" and "Products"
const searchOptions = document.querySelectorAll('.search-option');
searchOptions.forEach(option => {
  option.addEventListener('click', () => {
    searchOptions.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');
  });
});
window.onload = () => {
    const sloganText = "Global Business All in One";
    document.getElementById("slogan").innerText = sloganText;
};
const customers = [
  {
    name: "Lokmane D",
    image: "https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151134160.jpg?size=626&ext=jpg&uid=R146697784&ga=GA1.1.992685107.1718858231&semt=ais_user",
    location: "Algiers",
    testimonial: "J'adore ce site ! Les produits sont exactement comme décrits et la livraison est toujours rapide. J’ai récemment acheté un cadeau d'anniversaire, et il est arrivé plus tôt que prévu. Service client au top ! Je recommande sans hésiter.",
  },
  {
    name: "Michael L.",
    image: "https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151134012.jpg?size=626&ext=jpg&uid=R146697784&ga=GA1.1.992685107.1718858231&semt=ais_user",
    location: "USA",
    testimonial: "Expérience d'achat incroyable ! Le processus de commande est super simple, et la qualité des produits est exceptionnelle. J’ai eu un léger souci avec ma commande, mais l’équipe a été très réactive et l’a résolu en un rien de temps",
  },
  {
    name: "Amel B",
    image: "https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150503812.jpg?size=626&ext=jpg&uid=R146697784&ga=GA1.1.992685107.1718858231&semt=ais_user",
    location: "Batna",
    testimonial: "Les offres et réductions proposées sont géniales. Grâce à ce site, j'ai pu trouver des produits de qualité à des prix abordables. Le service client est très aimable et m’a aidée avec mes questions rapidement.",
  },
  {
    name: "Karim F",
    image: "https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150517168.jpg?size=626&ext=jpg&uid=R146697784&ga=GA1.1.992685107.1718858231&semt=ais_user",
    location: "TUNISIA",
    testimonial: "Commande facile, livraison rapide et articles conformes aux descriptions. Ce que j'apprécie surtout, c’est la possibilité de suivre ma commande en temps réel. La satisfaction est au rendez-vous à chaque achat.",
  },
  {
    name: "Laura G",
    image: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100164.jpg?t=st=1719046094~exp=1719049694~hmac=29670c440f200e9e11612c82874614ebf1a643bbb4f43ef1f8f83f4c93714454&w=740",
    location: "United Kingdom",
    testimonial:"Site très fiable avec un large choix de produits. Je suis une cliente régulière depuis des années et n'ai jamais été déçue. J’apprécie la qualité et la durabilité des produits. Toujours une bonne expérience !",
  },
];

let count = 0;
setInterval(() => {
  if (count === customers.length - 1) {
    count = 0;
  } else {
    count++;
  }
  change();
}, 5000);

let profile = document.querySelector(".profile");
let testimonial = document.querySelector(".text");
let details = document.querySelector(".details");

function change() {
  profile.style.animation = "none"; // Reset the animation
  testimonial.style.animation = "none"; // Reset the animation
  details.style.animation = "none"; // Reset the animation
  profile.offsetHeight; // Trigger reflow

  profile.setAttribute("src", customers[count].image);
  testimonial.innerText = customers[count].testimonial;
  details.innerHTML = `<p class="name">${customers[count].name}</p>
                         <p class="city">${customers[count].location}</p>`;

  profile.style.animation = "translate 0.75s 1 ease-in forwards";
  testimonial.style.animation = "translate 0.75s 1 ease-in forwards";
  details.style.animation = "translate 0.75s 1 ease-in forwards";
}

change();
document.querySelectorAll('.counter').forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const speed = 100;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 50);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
