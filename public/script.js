// async function AlmaL(e) {
    // e.preventDefault();
   
    // const formData = new FormData(e.target);
    // const formObject = Object.fromEntries(formData.entries());
    const createForm= document.querySelector("#cardForm")
    createForm.addEventListener("submit", async(e)=>{
    e.preventDefault()

    const bookData = new FormData(createForm)
    const reqBody = Object.fromEntries(bookData)
    console.log(reqBody)
     
    await fetch('/add/card', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reqBody)
    });
   
    window.location.href = '/'

    })

   