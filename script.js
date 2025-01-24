fetch("https://striveschool-api.herokuapp.com/api/product/67936bffb7470100158b2b8f", {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjRmYWI3NDcwMTAwMTU4YjJiNGQiLCJpYXQiOjE3Mzc3MTI4OTAsImV4cCI6MTczODkyMjQ5MH0.FWQbRy1wAuJIDU8YstrKUJqkSSIdIzTVTefxfvXPi1w",
  },
})
  .then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error("Request failed with status " + resp.status);
    }
  })
  .then((prodotto) => {
    console.log(prodotto);
    const row = document.getElementById("product-list");
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    li.innerHTML = `
      <strong>${prodotto.name}</strong>
      <p>${prodotto.description}</p>
      <p><strong>€${prodotto.price}</strong></p>
      <img src="${prodotto.imageUrl}" alt="${prodotto.name}" style="width: 100px; height: 100px;" />
    `;

    row.appendChild(li);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/* appointments.forEach(app => {
    console.log(app);

    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "align-items-center");
    // alla fine di questa stringa stiamo determinando la creazione di un link DINAMICO che avrà dentro di sé l'informazione dell'id specifico da portare e rendere disponibile nella pagina dettaglio
    li.innerHTML = `<span class="me-auto">${app.name}</span> <span class="badge text-bg-dark me-2">${app.price}€</span><a href="./details.html?appId=${app._id}">VAI A DETTAGLIO</a>`;

    row.appendChild(li);
  }); */
