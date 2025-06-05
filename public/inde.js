window.addEventListener('DOMContentLoaded', () => {
  const cards = JSON.parse(localStorage.getItem('cards') || '[]');
  const display = document.getElementById('submittedCardDisplay');
  const deleteContainer = document.getElementById('deleteCardContainer');

  if (cards.length > 0 && display) {
    display.innerHTML = ''; // Clear existing content

    cards.forEach(cardData => {
      const price = cardData.price ? parseFloat(cardData.price).toFixed(2) : '0.00';
      const cardHTML = `
        <div class="card" style="margin-bottom: 1em;">
          <div class="shiny-wrapper">
            <img src="${cardData.image}" alt="${cardData.title}" style="max-width: 100%; height: auto;">
          </div>
          <h3>${cardData.title}</h3>
          <p class="price">$${price}</p>
          <div class="card1">
            <p>${cardData.text}</p>
          </div>
          <button onclick="addToCart('${cardData.title}', ${price})">Add to Cart</button>
        </div>
      `;
      display.insertAdjacentHTML('beforeend', cardHTML);
    });

    deleteContainer.innerHTML = `
      <button id="deleteCardBtn" style="margin-top: 1em; padding: 0.5em 1em; background: #e74c3c; color: white; border: none; cursor: pointer;">
        Delete All Submitted Cards
      </button>
    `;

    document.getElementById('deleteCardBtn').addEventListener('click', () => {
      localStorage.removeItem('cards');
      display.innerHTML = '';
      deleteContainer.innerHTML = '';
      alert('All submitted cards deleted. They will no longer appear.');
    });
  } else {
    display.innerHTML = '<p>No submitted cards yet.</p>';
  }
});
