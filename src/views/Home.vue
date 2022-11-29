<template>
  <div class="home-wrapper">
    <b-row class="justify-content-center gap-3">
      <div class="top-check-input" @click="showConfirmModal('register')">
        Activo registro
        <div class="form-check form-switch">
          <input
            disabled
            v-model="activeRegister"
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
        </div>
      </div>
      <div class="top-check-input" @click="showConfirmModal('buy')">
        Activo compra
        <div class="form-check form-switch">
          <input
            disabled
            v-model="activeBuy"
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
        </div>
      </div>
      <div class="top-check-input" @click="showConfirmModal('sale')">
        Activo venta
        <div class="form-check form-switch">
          <input
            disabled
            v-model="activeSale"
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault1"
          />
        </div>
      </div>
    </b-row>

    <Stats>
      <StatsWrapper title="Compras p2p" :stats="p2pShopping" />

      <StatsWrapper title="Ventas p2p" :stats="p2pSelling" />

      <StatsWrapper
        title="Compras de los clientes en los negocios"
        :stats="businessPurchases"
      />

      <StatsWrapper title="Ventas de los negocios" :stats="businessSales" />
    </Stats>

    <ConfirmModal
      v-show="confirmModalOpen"
      @close="closeConfirmModal"
      @confirm="enableSwith"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import Swal from "sweetalert2";
import StatsWrapper from '@/components/home/StatsWrapper.vue'
import Stats from '@/components/home/Stats.vue'
import ConfirmModal from '@/components/home/ConfirmModal.vue'

const confirmModalOpen = ref(false)
const confirmModalInput = ref(null)
const activeBuy = ref(false)
const activeSale = ref(false)
const activeRegister = ref(false)

// Keys and content may change depending on API data
const p2pShopping = ref([
  {
    name: 'Usuarios',
    amount: '25',
  },
  {
    name: 'Cantidad',
    amount: '235',
  },
  {
    name: 'USDT',
    amount: '2305',
  },
  {
    name: 'LEAL',
    amount: '4000',
  },
])

const p2pSelling = ref([
  {
    name: 'Usuarios',
    amount: '25',
  },
  {
    name: 'Cantidad',
    amount: '235',
  },
  {
    name: 'USDT',
    amount: '2305',
  },
  {
    name: 'LEAL',
    amount: '4000',
  },
])

const businessPurchases = ref([
  {
    name: 'Usuarios o C.',
    amount: '25',
  },
  {
    name: 'Cantidad',
    amount: '235',
  },
  {
    name: 'USDT',
    amount: '2305',
  },
  {
    name: 'LEAL',
    amount: '4000',
  },
])

const businessSales = ref([
  {
    name: 'Usuarios o N.',
    amount: '25',
  },
  {
    name: 'Cantidad',
    amount: '235',
  },
  {
    name: 'USDT',
    amount: '2305',
  },
  {
    name: 'LEAL',
    amount: '4000',
  },
])
const store = useStore();

function showConfirmModal(input) {
  confirmModalOpen.value = true
  confirmModalInput.value = input
}

function closeConfirmModal() {
  confirmModalOpen.value = false
}

function enableSwith() {
 let payload = JSON.stringify({
             "query": confirmModalInput.value === 'sale' ? 'sell' : confirmModalInput.value,
        })
     
   store.dispatch("handleSwitches", payload).then((response) => {
          if (response && response.status == true) {
            Swal.fire({
              title: "Success!",
              text: response.content,
              icon: "success",
            });
            switch (confirmModalInput.value) {
              case 'buy':
                activeBuy.value = !activeBuy.value
                break
              case 'sale':
                activeSale.value = !activeSale.value
                break
              case 'register':
                activeRegister.value = !activeRegister.value
                break
              default:
                console.log('please provide an input')
                break
            }
          } else {
            Swal.fire({
              title: "Error!",
              text: "Failed to update",
              icon: "error",
            });
          }
        });


  closeConfirmModal()
}
</script>
<style lang="scss">
@import '../assets/scss/variables';
:root {
  --card--: 0 0 35px 0 rgb(154 161 171 / 15%);
}

.top-check-input {
  width: 275px;
  height: 75px;
  background-color: rgba(140, 207, 238, 0.13);
  border-radius: 4px;
  color: $text-color;
  font-weight: 600;
  transition: 0.2s ease-in;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .form-check input {
    width: 4em;
    &:focus {
      box-shadow: unset !important;
    }
    &:disabled {
      opacity: 1;
      cursor: pointer;
    }
  }
}

#modal-confirmation {
  p {
    color: #031f4b;
    font-weight: 600;
    transition: 0.2s ease-in;
    font-size: 20px;
  }
}

@media screen and (max-width: 767px) and (min-width: 300px) {
  .top-check-input {
    margin-top: 20px;
  }
}
</style>
