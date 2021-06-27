<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <router-link to="/" class="nav-link">Главная</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/gallery" class="nav-link">Фотогалерея</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/sends" class="nav-link">Пожелания по меню</router-link>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#map"></a>
    </li>
  </ul>
</template>

<script>
export default{
  name: "Nav"
}
</script>



<style scoped>
</style>

