const form = getByElementById("compraTutto");
form.onsubmit = function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const imageUrl = document.getElementById("imageUrl").value;

  const newProduct = {
    name,
    price,
    description,
    imageUrl,
  };

  console.log(newProduct);
};
