// array for gallery images
const images = [
  {id: 0,
  path: "img/carousel-1.jpg",
  name: "mountains",
  clicked: false},
  {id: 1,
  path: "img/carousel-1.jpg",
  name: "mountains",
  clicked: false},
  {id: 2,
  path: "img/carousel-1.jpg",
  name: "mountains",
  clicked: false},
  {id: 3,
  path: "img/carousel-1.jpg",
  name: "mountains",
  clicked: false},
  {id: 4,
  path: "img/carousel-1.jpg",
  name: "mountains",
  clicked: false},
  {id: 5,
  path: "img/carousel-1.jpg",
  name: "mountains",
  clicked: false},
  {id: 6,
  path: "img/carousel-1.jpg",
  name: "mountains",
  clicked: false}
]

function imagemaker(imgobj){
  let Img = document.createElement("img");
  Img.classList.add('col-3');
  Img.src = imgobj.path;
  Img.alt = imgobj.name;
  Img.setAttribute("data-toggle", "modal");
  Img.setAttribute("data-target", "#exampleModal");
  Img.addEventListener("click", () => handleImgClick(imgobj.id));
//  Img.setAttribute("onClick", "{(imgobj) => handleImgClick(imgobj.id)}")
  return Img ;
}
// data-toggle="modal" data-target="#exampleModal"
const handleImgClick = (id) => {
  document.getElementById("modalImage").src = images[id].path;
  console.log(id);
}

var ROW = document.createElement("div")
ROW.classList.add('row');

root = document.getElementById('root')

root.appendChild(ROW)

for(let i=0 ; i<images.length ; i++){
  ROW.appendChild(imagemaker(images[i]));
}
