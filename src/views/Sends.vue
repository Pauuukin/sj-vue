<template>
  <div>
    <Nav />
    <div class="container">
      <div class="section">
        <h2 class="block-title">Оставьте пожелания по меню</h2>
      </div>
      <div class="section">
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            <!--      Форма      -->

            <form>
              <!-- ФИО -->
              <div class="mb-3">
                <label for="name" class="form-label">ФИО</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  required=""
                  aria-describedby="Ваше ФИО"
                  v-model="FIO"
                />
                <div id="nameHelp" class="form-text">
                  Чтобы не перепутать расстановку напитков на столах, укажите,
                  пожалуйста, ваше ФИО так, чтобы молодожены смогли вас
                  идентифицировать.
                </div>
              </div>
              <!-- Еда -->
              <div class="mb-3" id="v-model-radiobutton">
                <label for="food" class="form-label"
                  >Выберите горячее блюдо</label
                >
                <div class="form-check form-switch mb-2">
                  <input
                    class="form-check-input ml-2"
                    type="radio"
                    name="food"
                    id="food1"
                    value="Шашлык"
                    v-model="picked"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Шашлык
                  </label>
                </div>
                <div class="form-check form-switch mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="food"
                    id="food2"
                    value="Курица"
                    v-model="picked"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    Курица
                  </label>
                </div>
                <div class="form-check form-switch mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="food"
                    id="food3"
                    value="Рыба"
                    v-model="picked"
                  />
                  <label class="form-check-label" for="exampleRadios3">
                    Рыба
                  </label>
                  <br />
                  <span>Выбрано: {{ picked }}</span>
                </div>
              </div>
              <!-- Крепкий алкоголь  -->
              <div class="mb-3">
                <label class="form-label">Крепкий алкоголь</label>
                <div class="form-check form-switch mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="alcohol"
                    value="Ром / Виски"
                    v-model="checked"
                  />
                  <label class="form-check-label">Ром / Виски</label>
                </div>
                <div class="form-check form-switch mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="alcohol1"
                    value="Водка"
                    v-model="checked"
                  />
                  <label class="form-check-label">Водка</label>
                </div>
                <div class="form-check form-switch mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="alcohol2"
                    v-model="checked"
                    value="Джин"
                  />
                  <label class="form-check-label">Джин</label>
                </div>
                <div class="form-check form-switch mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="alcohol3"
                    v-model="checked"
                    value="Абсент"
                  />
                  <label class="form-check-label">Абсент</label>
                </div>
                <div id="alcoholHelp" class="form-text">
                  Выберете не более двух позиций.
                </div>
                <span>Отмеченные позиции: {{ checked }}</span>
              </div>

              <!-- Трансфер -->
              <div class="mb-3">
                <label for="transfer" class="form-label"
                  >Нужен ли вам трансфер до места празднования?</label
                >
                <div class="form-check form-switch mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    required=""
                    id="alcohol"
                    v-model="transfer"
                  />
                  <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Активируйте, если нужен</label
                  >
                </div>
                <span>Трансфер: {{ transfer }}</span>
              </div>

              <!-- Вино -->

              <div class="mb-3">
                <label for="vine" class="form-label">Выберите вино</label>
                <div class="form-check form-switch mb-2">
                  <input
                    class="form-check-input ml-2"
                    type="radio"
                    name="Красное сухое\полуcухое"
                    id="vine1"
                    value="Красное сухое\полуcухое"
                    
                    v-model="vine"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Красное сухое\полуcухое
                  </label>
                </div>
                <div class="form-check form-switch mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Красное полуcладкое"
                    id="vine2"
                    value="Красное полуcладкое"
                    
                    v-model="vine"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    Красное полуcладкое
                  </label>
                </div>
                <div class="form-check form-switch mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Белое сухое\полуcухое"
                    id="vine3"
                    value="Белое сухое\полуcухое"
                    v-model="vine"
                  />
                  <label class="form-check-label" for="exampleRadios3">
                    Белое сухое\полуcухое
                  </label>
                </div>
                <div class="form-check form-switch mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name=" Белое полусладкое"
                    id="vine4"
                    value="Белое полусладкое"
                    v-model="vine"
                  />
                  <label class="form-check-label" for="exampleRadios3">
                    Белое полусладкое
                  </label>
                </div>
                <span>Выбрано: {{ vine }}</span>
              </div>

              <button type="button" 
              class="btn btn-primary"
              @click="sendDate"
              >
                Отправить
                </button>
            </form>
          </div>
          <div class="col-lg-3"></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default {
  name: "Sends",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      FIO: "",
      picked: "",
      checked: [],
      transfer: "",
      vine: "",
    };
  },
  methods: {
    async sendDate() {
      let data = {
        name: this.FIO,
        transfer: this.transfer,
        alcohol: this.checked.join(','),
        vine: this.vine,
        food: this.picked,
      }
      fetch(`${this.$store.getters.getServerUrl}/choice/`,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      ).then(response => {
        console.log(response.json())
      })
    },
  },
};
</script>

<style scoped>
.form-label {
  font-size: 24px;
}
</style>