<template>
  <div class="bg">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link to="/" class="nav-link link-light">Главная</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/gallery" class="nav-link link-light">Фотогалерея</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/sends" class="nav-link link-light"
          >Пожелания по меню</router-link
        >
      </li>
    </ul>
    <div class="container">
      <div
        class="
          row
          d-flex
          justify-content-center
          align-items-center
          font-m
          text-center
        "
      >
        <div class="col">
          <h1>
            <b> <br /><br /><br /><br />Женя + Саша</b> <br />
            <!-- Место: ТАм-то <br>
                        Время: 15:00 (мск) -->
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 60px;
}
a {
  font-size: 30px;
}
</style>