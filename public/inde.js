window.addEventListener('DOMContentLoaded', () => {
  const cardData = JSON.parse(localStorage.getItem('submittedCard'));
  const display = document.getElementById('submittedCardDisplay');
  const deleteContainer = document.getElementById('deleteCardContainer');

  if (cardData && display) {
    display.innerHTML = `
      <div class="card">
        <div class="shiny-wrapper">
          <img src="${cardData.image}" alt="${cardData.title}">
        </div>
        <h3>${cardData.title}</h3>
        <p class="price">Custom Card</p>
        <div class="card1">
          <p>${cardData.text}</p>
        </div>
        <button onclick="addToCart('${cardData.title}', 9.99)">Add to Cart</button>
      </div>
    `;

    deleteContainer.innerHTML = `
      <button id="deleteCardBtn" style="margin-top: 1em; padding: 0.5em 1em; background: #e74c3c; color: white; border: none; cursor: pointer;">
        Delete Submitted Card
      </button>
    `;

    // Add event listener to delete button
    document.getElementById('deleteCardBtn').addEventListener('click', () => {
      localStorage.removeItem('submittedCard');  // Remove from localStorage
      display.innerHTML = '';                     // Clear displayed card
      deleteContainer.innerHTML = '';             // Remove delete button
      alert('Submitted card deleted. It will no longer appear.');
    });
  }
});

