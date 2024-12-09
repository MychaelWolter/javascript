const images = [
    {"id": "1", "url": "image/chrono.jpg"},
    {"id": "2", "url": "image/inuyasha.jpg"},
    {"id": "3", "url": "image/ippo.png"},
    {"id": "4", "url": "image/tenchi.jpg"},
    {"id": "5", "url": "image/tenjhotenge.jpg"},
    {"id": "6", "url": "image/yuyuhakusho.jpg"}
];

const containerItems = document.querySelector("#containerItems");

const loadImages = (images, containerItems) => {
    images.forEach (images => {
        containerItems.innerHTML += `
            <div class="item">
                <img src="${images.url}">
            </div>
        `;
    });
};

loadImages (images, containerItems);

let items = document.querySelectorAll(".item");

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll(".item");
};

const next = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll(".item");
};

document.querySelector("#previous").addEventListener("click", previous);

document.querySelector("#next").addEventListener("click", next);