<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6 text-center mt-4">
          <p>
            <router-link to="/" class="nav-link">Главная<br /></router-link>

            <router-link to="/gallery" class="nav-link"
              >Фотогалерея<br
            /></router-link>

            <router-link to="/sends" class="nav-link"
              >Пожелания по меню<br
            /></router-link>
          </p>
          <hr>

          <span>Designed and developed by: Oleg Paukin <br /></span>
          <span>
            <a href="mailto:oleg.paukin@gmail.com?subject=Хочу такой сайт">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 
              4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 
              1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                ></path>
              </svg>
              e-mail: oleg.paukin@gmail.com <br />
            </a>
            2021
          </span>
        </div>
        <div class="col-lg-3"></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
p {
  font-size:20px;
}
</style>