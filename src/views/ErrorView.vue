<template>
  <div class="error">
    <img
      class="error-image p-4"
      src="../assets/404-error-3060993.svg"
      alt="Error Image"
    />
    <h1 class="mt-4">Aradığınız sayfaya ulaşamıyor</h1>
    <p>Üzgünüz, aradığınız sayfa bulunamadı veya mevcut değil.</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.error {
  font-family: Arial, sans-serif;
  text-align: center;
  height: 60vh;
}
.error-image {
  margin-top: 50px;
  width: 200px;
  height: 200px;
}
h1 {
  color: #333;
  font-size: 2em;
  margin-top: 20px;
}
p {
  color: #333;
  font-size: 1.5em;
  margin-top: 20px;
}
</style>
