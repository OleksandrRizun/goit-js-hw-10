// https://thecatapi.com/

import {fetchBreeds, fetchCatByBreeds} from "./cat-api";

const refs = {
    select: document.querySelector (".breed-select"),
    info: document.querySelector (".cat-info"),
    error: document.querySelector (".error"),
    loader: document.querySelector (".loader")
}

refs.select.hidden = true;
refs.error.hidden = true;

// Get the list of breeds

fetchBreeds ().then ((result) => {
    refs.select.hidden = false;
    refs.loader.hidden = true;
    refs.select.innerHTML = createMarkup (result);
})
.catch ((err) => {
    refs.error.hidden = false;
    console.log (err);
});

function createMarkup (arr) {
    return arr.map ( ({id, name}) =>
        `<option value="${id}">${name}</option>`
    ).join("");
}

// Get the information about the chosen breed

refs.select.addEventListener ("change", handleSearch);

function handleSearch (event) {
    refs.error.hidden = true;
    refs.loader.hidden = false;
    refs.info.hidden = true;
    const target = event.currentTarget.value;
    fetchCatByBreeds (target).then ((result) => {
        refs.info.innerHTML = showInfo (result);
        refs.loader.hidden = true;
        refs.info.hidden = false;
    })
    .catch ((err) => {
        refs.error.hidden = false;
        console.log (err);
    });
}

function showInfo (arr) {
    const imageURL = arr [0].url;
    const {name, description, temperament} = arr [0].breeds [0];
    return `
    <img class="img-info" src="${imageURL}" width="400" alt="">
    <h1>${name}</h1>
    <p>${description}</p>
    <p><strong>Temperament:</strong> ${temperament}</p>`
}