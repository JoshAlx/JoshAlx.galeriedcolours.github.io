const main = document.querySelector('main');

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await res.json();
    photos.forEach(photo => {
        
        /* Code to create a card */
        const card = document.createElement('div')
        card.className = "card"

        const img = document.createElement('img')
        img.src = photo.url

        const subtitle = document.createElement('h3')
        subtitle.textContent = photo.title

        card.append(img, subtitle);
        main.appendChild(card)

    });
}

getData();