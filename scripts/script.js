<script>
  const cart = [];

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart")) {
      const product = e.target.dataset.product;
      cart.push(product);
      console.log("Cart:", cart);

      const counter = document.querySelector(".cart-count");
      if (counter) counter.textContent = cart.length;
    }
  });
</script>