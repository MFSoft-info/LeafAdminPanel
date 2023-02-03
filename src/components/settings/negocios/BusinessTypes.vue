<template>
  <div class="types-container">
    <div class="headling">
      <h2>Tipos de negocios</h2>
    </div>

    <div class="types-wrapper">
      <div v-for="(type, i) in dataa.businesses_types_categories"
          :key="i">
        <input
          type="text"
          :value="type.type"
          class="box"
          @input="(e) => handleNewbusinessType(e, i, type.type)"
        />
      </div>

      <!-- <div @dblclick="closeCreateValue" class="new-field" :class="{shake: valueEmpty}">
        <div class="input-wrapper">
          <input
            v-if="createValue"
            type="text"
            class="box"
            ref="inputNewValue"
            v-model="newValue"
            @keyup.enter="saveField"
          />
        </div>
        <button v-if="createValue" @click="saveField" class="button box">
          <i class="fas fa-check"></i>
        </button>
          <p v-if="valueEmpty && createValue">Inserta un valor</p>
      </div> -->

        <button 
          class="box button" 
          @click="addValue()"
        >
          +
        </button>
    </div>
  </div>
</template>

<script setup>
// import { ref, nextTick, watch } from 'vue'

// const props = defineProps({
//   businessTypes: Object
// })

// const createValue = ref(false)
// const newValue = ref('')
// const inputNewValue = ref(null)
// const valueEmpty = ref(false)

// defineExpose({ inputNewValue })

// watch(newValue, () => {
//   if (valueEmpty.value) valueEmpty.value = false
// })

// function saveField(){
//   if (!newValue.value) return valueEmpty.value = true

//   props.businessTypes.push({ name:  newValue.value, categories: [''] })

//   closeCreateValue()
// }

// async function showCreateValue() {
//   createValue.value = true
//   await nextTick()
//   inputNewValue.value.focus()
// }

// function closeCreateValue() {
//   if (valueEmpty.value) valueEmpty.value = false
//   createValue.value = false
  
//   newValue.value = ''
// }
</script>

<script>
import { mapGetters } from 'vuex'
import Swal from 'sweetalert2'
export default {
  name: 'Business Types',
  props: ['dataa'],
  data: function () {
    return {
      businesses_types_categories: [], 
      new_types_categories: [], 
      selected_type: "",
      timer: null,
    }
  },
  computed: {},
  methods: {
    
    handleNewbusinessType(e, i, type) {
      if(this.dataa.businesses_types_categories[i].isNew){
        this.dataa.businesses_types_categories[i].type = e.target.value;
        return 0;
      }
      if(e.target._value != ''){
        if(this.selected_type == ""){
          this.selected_type = type;
        }

        console.log("this.selected_type", this.selected_type)
        const updateBusinessTypeName = JSON.stringify({
            old_name: this.selected_type,
            new_name: e.target.value
        });

        // setTimeout((() =>{
          // this.$store.dispatch('updateBusinessTypeName', updateBusinessTypeName).then((response) => {
          // if (response.status == true) {
          //     Swal.fire({
          //     title: 'Success!',
          //     text: 'Successfully updated',
          //     icon: 'success',
          //   });
          //   this.selected_type = e.target.value;
          //   this.businesses_types_categories[i].type = e.target.value;

          //   // this.getPackagesList()
          // } else {
          //   Swal.fire({
          //     title: 'Error!',
          //     text: response.content,
          //     icon: 'error',
          //   })
          // }
        // })})
    //  , 500)
    clearTimeout(this.timer); 
    const ref = this;
    let tmpSelectedType = e.target.value
           this.timer = setTimeout(function(){
             ref.$store.dispatch('updateBusinessTypeName', updateBusinessTypeName).then((response) => {
          if (response.status == true) {
              Swal.fire({
              title: 'Success!',
              text: 'Successfully updated',
              icon: 'success',
            });
            ref.selected_type = e.target.value;
            // this.businesses_types_categories[i].type = e.target.value;

            // this.getPackagesList()
          } else {
            Swal.fire({
              title: 'Error!',
              text: response.content,
              icon: 'error',
            })
          }
        })
      }, 3000)
            // this.selected_type = tmpSelectedType;

        // this.$store.dispatch('updateBusinessTypeName', updateBusinessTypeName).then((response) => {
        //   if (response.status == true) {
        //       Swal.fire({
        //       title: 'Success!',
        //       text: 'Successfully updated',
        //       icon: 'success',
        //     });
        //     this.selected_type = e.target.value;
        //     this.businesses_types_categories[i].type = e.target.value;

        //     // this.getPackagesList()
        //   } else {
        //     Swal.fire({
        //       title: 'Error!',
        //       text: response.content,
        //       icon: 'error',
        //     })
        //   }
        // })
     
     }
      else {
      this.dataa.businesses_types_categories[i].type = e.target.value;
            console.log(e.target.value)
      }
    },

    addValue() {
      console.log(this.data);
      this.dataa.businesses_types_categories.push({type: '', isNew: true, categories:['']})
      // this.new_types_categories.push({type: '', parentIndex: this.dataa.businesses_types_categories.length - 1});
      // console.log(this.dataa.businesses_types_categories);

      // this.dataa.businesses_types_categories[i]
    },
    handleAddNewbusinessType(e, i) {
      this.new_types_categories[i].type = e.target.value;
      console.log(e.target.value);
    },
  },
}
</script>

<style scoped lang="scss">
.types-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  // justify-content: center;

  .box {
    width: auto;
    padding-right: 0.3rem;
    padding-left: 0.3rem;
    &.button {
      width: 80px;
    }
  }
}

.new-field {
  display: flex;
  gap: 10px;
  position: relative;
  justify-content: center;

  p {
    position: absolute;
    top: calc(100% + 5px);
    font-style: italic;
  }

  .input-wrapper {
    position: relative;

    .icon-wrapper {
      --ratio: 20px;
      position: absolute;
      top: -6px;
      right: -6px;
      background: #031f4b;
      height: var(--ratio);
      width: var(--ratio);
      border-radius: 50%;
      font-size: .9rem;
      color: #fff;

      display: grid;
      place-items: center;
      cursor: pointer;

    }
  }
}
</style>
