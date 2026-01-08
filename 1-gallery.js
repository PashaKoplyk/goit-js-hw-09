import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as t}from"./assets/vendor-CgTBfC_f.js";console.log("Gallery");const p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg",original:"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",description:"Cute cat"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202822__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202822_1280.jpg",description:"Aerial Beach View"}],c=document.querySelector(".gallery"),e=p.map(({preview:a,original:i,description:o})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img
          class="gallery-image"
          src="${a}"
          alt="${o}"
        />
      </a>
    </li>
  `).join("");c.innerHTML=e;new t(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
