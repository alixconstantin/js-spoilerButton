let btn = document.querySelector('button');
let hidden = true;
let paragraphe = document.querySelector('p');

btn.addEventListener('click', verify);

function verify() {

    if (hidden) {

        hidden = false;
        btn.textContent = 'Cacher';
        paragraphe.classList.remove("spoiler");

    } else {

        btn.textContent = 'Afficher';
        hidden = true;
        paragraphe.classList.add("spoiler");
    }

}
