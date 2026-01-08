console.log('Gallery');
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
 {
    preview:"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg",
    original:"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
    description: "Cute cat",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202822__480.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202822_1280.jpg",
    description: "Aerial Beach View",
  },
];

const gallery = document.querySelector(".gallery");

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `
  )
  .join("");

gallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});