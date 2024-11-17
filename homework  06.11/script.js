// Список изображений
const images = [
    'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
    'https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
    'https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265648.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*',
    'https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478040.jpg'
];

const container = document.querySelector("#container");

const frame = document.createElement("div");
frame.classList.add("frame");
container.append(frame);

const largeImage = document.createElement("div");
largeImage.classList.add("large-image");
frame.append(largeImage);

largeImage.style.backgroundImage = `url(${images[0]})`;

const thumbnails = document.createElement("div");
thumbnails.classList.add("thumbnails");
frame.append(thumbnails);

images.forEach((image, index) => {
    const thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");
    thumbnail.style.backgroundImage = `url(${image})`;

    if (index === 0) thumbnail.classList.add("active");

    thumbnail.onclick = () => {
        largeImage.style.backgroundImage = `url(${image})`;

        document.querySelectorAll(".thumbnail").forEach((thumb) => {
            thumb.classList.remove("active");
        });

        thumbnail.classList.add("active");
    };

    thumbnails.append(thumbnail);
});
