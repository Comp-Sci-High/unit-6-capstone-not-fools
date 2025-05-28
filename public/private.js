// private.js
const modal = document.getElementById('cardModal');
const imageInput = document.getElementById('cardImage');
const imagePreview = document.getElementById('imagePreview');

function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

imageInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.src = e.target.result;
      imagePreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

async function submitCard() {
  console.log('ssss')

  const teach = document.querySelector('form')
//teach.addEventListener("sumbit", async (e)=>{
  // e.preventDefault()
   const teachData = new FormData(teach)
   const teachList = Object.fromEntries(teachData)


console.log(teachList)
console.log('hello')
   const response = await fetch("/add/teacher", {
       method: "POST",
       headers:{
        "Content-Type":"application/json" 
       },
body: JSON.stringify(teachList)
   })
const data = await response.json()
console.log(data)
//closeModal();
//location.href = '/';
//})
  // const title = document.getElementById('cardTitle').value;
  // const text = document.getElementById('cardText').value;
  // const image = imagePreview.src;

  // const newCard = {
  //   id: Date.now(),
  //   title,
  //   text,
  //   image,
  //   price,
  //   avail
  // };

  // const cards = JSON.parse(localStorage.getItem('cards') || '[]');
  // cards.push(newCard);
  // localStorage.setItem('cards', JSON.stringify(cards));

}