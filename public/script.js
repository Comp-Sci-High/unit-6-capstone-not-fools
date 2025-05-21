async function AlmaL(e) {
    e.preventDefault();
   
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
   console.log(formObject)
    await fetch('/add/card', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formObject)
    });
   
    window.location.href = '/'
   }