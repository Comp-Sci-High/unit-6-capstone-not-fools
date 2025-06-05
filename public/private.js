const modal = document.getElementById('cardModal');
const imageInput = document.getElementById('cardImage');
const imagePreview = document.getElementById('imagePreview');
const titleInput = document.getElementById('cardTitle');
const textInput = document.getElementById('cardText');
const priceInput = document.getElementById('cardPrice');
const submitButton = document.getElementById('submitCardButton');
const form = document.getElementById('cardForm');

// Open modal
function openModal() {
  modal.style.display = 'flex';
}

// Close modal
function closeModal() {
  modal.style.display = 'none';
}

// Preview image when URL is typed
imageInput.addEventListener('input', function () {
  const url = imageInput.value.trim();
  if (url) {
    imagePreview.src = url;
    imagePreview.style.display = 'block';
  } else {
    imagePreview.style.display = 'none';
    imagePreview.src = '';
  }
});

// Handle form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form behavior

  const title = titleInput.value.trim();
  const text = textInput.value.trim();
  const price = priceInput.value;
  const image = imageInput.value.trim();

  if (!title || !image) {
    alert('Please provide a title and image URL.');
    return;
  }

  const newCard = {
    id: Date.now(),
    title,
    text,
    price,
    image
  };

  const cards = JSON.parse(localStorage.getItem('cards') || '[]');
  cards.push(newCard);
  localStorage.setItem('cards', JSON.stringify(cards));

  // Clear form
  form.reset();
  imagePreview.style.display = 'none';
  imagePreview.src = '';

  // Close modal and redirect
  closeModal();
  window.location.href = 'inde.html';
});
