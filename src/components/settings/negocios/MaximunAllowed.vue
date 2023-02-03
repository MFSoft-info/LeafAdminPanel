<template>
  <div class="max-business-container">
    <div class="headling">
      <h2>Máximo negocio permitido según su tipo para cada usuario</h2>
    </div> 
    <div class="max-business-wrapper" v-for="(type, i) in dataa.businesses_types_categories"
          :key="i">
      <div class="max-business-box">
        <p>{{ type.type }}</p>
        <input :value="type.max_businesses_per_user" class="box"  @input="(e) => handleMaxBusinessesPerUser(e, i)" />
      </div>
      <!-- <div class="max-business-box">
        <p>Profesional</p>
        <input value="5" class="box" />
      </div>
      <div class="max-business-box">
        <p>Freelancer</p>
        <input value="5" class="box" />
      </div>
      <div class="max-business-box">
        <p>Moviliy</p>
        <input value="5" class="box" />
      </div>
      <div class="max-business-box">
        <p>Buy/Sell</p>
        <input value="10" class="box" />
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Max Businesses Per User',
  props: ['dataa'],
  data: function () {
    return {
      businesses_types_categories: []
    }
  },
  computed: {},
  methods: {
    // addValue(index) {
    //   console.log(this.dataa.businesses_types_categories[index].max_businesses_per_user)
    // },
    handleMaxBusinessesPerUser(e, i) {
      this.dataa.businesses_types_categories[i].max_businesses_per_user = e.target.value;
      console.log(e.target.value)
    },
  },
}
</script>

<style scoped lang="scss">
.max-business-wrapper {
  margin-left: 60px;

  @media screen and (max-width: 500px) {
    display: flex;
    margin-left: unset;
    flex-direction: column;
    align-items: center;
  }
}

.max-business-box {
  display: grid;
  justify-items: flex-end;
  grid-template-columns: 1fr 1fr;
  gap: 0 10px;
  align-items: center;
  width: 200px;
  margin-top: 10px;

  .box {
    width: 80px;
  }
}
</style>
