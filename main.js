let products=document.querySelector("#products")
let data = [
  {
    img: "https://i.ytimg.com/vi/7Xn9yDALkHk/maxresdefault.jpg",
    title: "BMW",
    price: "120000$",
  },
  {
    img: "https://avatars.yandex.net/get-music-content/9838169/9afd6023.a.28092521-1/m1000x1000?webp=false",
    title: "MERSEDES-BENZ",
    price: "3000000$",
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/audi-rs5-competition-package-11-1652285182.jpg?crop=0.810xw:0.606xh;0.128xw,0.221xh&amp;resize=1200:*",
    title: "AUDI",
    price: "4000000$",
  },
  {
    img: "https://spb.akb.ru/uploads/auto_modifications/844d8238c5adaf011afa9381789e1593.jpg",
    title: "TAYOTA",
    price: "5000000$",
  },
  {
    img: "https://a.d-cd.net/iwAAAgBwruA-1920.jpg",
    title: "LADA",
    price: "60000000$",
  },
  {
    img: "https://avatars.mds.yandex.net/get-autoru-vos/2174323/ce72c4a92af5044439040ab131b47ace/1200x900",
    title: "DAEWOO",
    price: "70000000000$",
  },
  {
    img: "https://a.d-cd.net/UgAAAgNau-A-1920.jpg",
    title: "HYUNDAI",
    price: "8000000$",
  },
  {
    img: "https://i.pinimg.com/originals/2c/46/87/2c468797b421316205272d3175c50d41.jpg",
    title: "NISSAN",
    price: "1000000$",
  },
];
for(let item of data){
    products.innerHTML += `
        <article class="border rounded-lg bg-white overflow-hidden">
        <img src="${item.img}" alt="" class="w-full h-44 object-cover">
<div class="p-2">
    <h1 class="text-lg font-medium text-gray-900">${item.title}</h1>
    <h2 class="text-blue-500 font-bold text-xl my-1">${item.price}</h2>
    <button class="bg-gray-900 text-white p-1 w-full rounded-md mt-2 active:scale-95 duraction-300"> Add to Cart→</button>
</div>
    </article>`;
}