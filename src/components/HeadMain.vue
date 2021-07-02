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
        <router-link to="/sends" class="nav-link link-light">
          Пожелания по меню</router-link
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
          <h1 class="">
            <b> <br /><br /><br /><br />Женя + Саша</b> <br /><br /><br /><br>
          </h1>
          <p class="shadowtext mt-2">Мы приглашаем вас на нашу свадьбу!  </p>
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
p {
  font-size: 60px;
  color: #0c592bfe;
  

}
.shadowtext {
    
    color: #f5eccbfe; /* Белый цвет текста */
 

    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);

   }
</style>