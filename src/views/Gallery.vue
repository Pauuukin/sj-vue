<template>
  <div>
    <Nav />
    <div class="container">
      <div class="section">
        <h2 class="block-title">Фотогалерея </h2>
        <hr />
          <div class="row">
            <div class="col-lg-4" v-for="img in listImg" :key="img.id">
              <div class="card">
                <img :src="img.photos" alt="Snow" class="card-img-top" />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <img src="http://127.0.0.1:8005/media/images/2.50fc8009.jpg" alt="Snow" class="card-img-top" />
              </div>
            </div>
            <div class="col-lg-4" v-for="i in 3" :key="i">
              <div class="card">
                <img :src="i" alt="Snow" class="card-img-top" />
              </div>
            </div>
          </div>

          
      </div>
    <hr><hr>
    <br>
          
    </div>
    <Footer />
     <div class="modalCustom">
      <div class="close">X</div>
      <img src="" alt="" class="modal-content" />
    </div>
  </div>
</template>


<script>
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import $ from "jquery"
export default {
  name: "Gallery",
  data () {
      return {
          listImg: []
      }
  },
  components: {
    Nav,
    Footer,
  },
  created() {
      this.loadListImg()
  },
  methods: {
      async loadListImg() {
          this.listImg = await fetch(
              `${this.$store.getters.getServerUrl}/gallery/`
          ).then(response=>response.json())
      }
  },
  updated () {
    $('.card img').click(function clich() {
      let src = $(this).attr('src');
      $('.modalCustom img').attr('src',src);
      $('.modalCustom').fadeIn();    
    }),
    $('.close').click(function() {
      $('.modalCustom').fadeOut();
    })
  }
};
</script>


<style scoped>

</style>