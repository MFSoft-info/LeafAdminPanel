<template>
  <div>
    <b-row>
      <b-col md="8">
        <h4 class="heading-users m-0">USUARIOS PIDIENDO RETIRAR SU TOKEN</h4>
      </b-col>
    </b-row>
    <b-card no-body>
      <b-tabs card>
        <b-tab
          no-body
          title="Faltan Procesar"
          @click="getWithdrawalList('processing')"
        >
          <b-row class="mt-5">
            <b-col md="10" class="d-inline-flex align-items-center">
              <div class="form-check search-cb">
                <input
                  class="form-check-input custom-checkbox"
                  type="checkbox"
                  value=""
                />
              </div>
              <!-- Actual search box -->
              <div
                class="form-group has-search d-inline-block position-relative"
              >
                <span class="fa fa-search form-control-feedback1234"></span>
                <input
                  v-model="searchWithdrawl"
                  type="text"
                  class="form-control"
                  placeholder="Search Contact"
                  @keypress="getWithdrawlByRequester('processing')"
                />
              </div>
            </b-col>
          </b-row>
          <b-row class="mt-4">
            <b-col md="12">
              <div class="wrapper">
                <table class="c-table">
                  <thead class="c-table__header">
                    <tr>
                      <th></th>
                      <th></th>
                      <th class="c-table__col-label">Propietario</th>
                      <th class="c-table__col-label">cantidade</th>
                      <th class="c-table__col-label">Estatus</th>
                    </tr>
                  </thead>
                  <tbody class="c-table__body">
                    <tr
                      v-for="(withdrawal, i) in withdrawalList"
                      :key="i"
                      @click="openUserData"
                    >
                      <td class="c-table__cell">
                        <div class="form-check">
                          <input
                            class="form-check-input custom-checkbox"
                            type="checkbox"
                            :value="withdrawal.withdrawal_id"
                            @change="handleOnCheck($event)"
                          />
                        </div>
                      </td>
                      <td></td>
                      <td class="c-table__cell">{{ withdrawal.nombre_usuario }}</td>
                      <td class="c-table__cell">{{ withdrawal.amount }}</td>
                      <td class="c-table__cell">{{ withdrawal.status }}</td>
                      <td class="c-table__cell"></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab
          no-body
          title="Procesados"
          @click="getWithdrawalList('successful')"
        >
          <b-row class="mt-5">
            <b-col md="10" class="d-inline-flex align-items-center">
              <div class="form-check search-cb">
                <input
                  class="form-check-input custom-checkbox"
                  type="checkbox"
                  value=""
                />
              </div>
              <!-- Actual search box -->
              <div
                class="form-group has-search d-inline-block position-relative"
              >
                <span class="fa fa-search form-control-feedback1234"></span>
                <input
                  v-model="searchWithdrawl"
                  type="text"
                  class="form-control"
                  placeholder="Search Contact"
                  @keypress="getWithdrawlByRequester('successful')"
                />
              </div>
            </b-col>
          </b-row>
          <b-row class="mt-4">
            <b-col md="12">
              <div class="wrapper">
                <table class="c-table">
                  <thead class="c-table__header">
                    <tr>
                      <th></th>
                      <th></th>
                      <th class="c-table__col-label">Propietario</th>
                      <th class="c-table__col-label">cantidade</th>
                      <th class="c-table__col-label">Estatus</th>
                    </tr>
                  </thead>
                  <tbody class="c-table__body">
                    <tr
                      v-for="(withdrawal, i) in withdrawalList"
                      :key="i"
                      @click="openUserData"
                    >
                      <td class="c-table__cell">
                        <div class="form-check">
                          <input
                            class="form-check-input custom-checkbox"
                            type="checkbox"
                            :value="withdrawal.withdrawal_id"
                            @change="handleOnCheck($event)"
                          />
                        </div>
                      </td>
                      <td></td>
                      <td class="c-table__cell">{{ withdrawal.nombre_usuario }}</td>
                      <td class="c-table__cell">{{ withdrawal.amount }}</td>
                      <td class="c-table__cell">{{ withdrawal.status }}</td>
                      <td class="c-table__cell"></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab no-body title="Negados" @click="getWithdrawalList('denied')">
          <b-row class="mt-5">
            <b-col md="10" class="d-inline-flex align-items-center">
              <div class="form-check search-cb">
                <input
                  class="form-check-input custom-checkbox"
                  type="checkbox"
                  value=""
                />
              </div>
              <!-- Actual search box -->
              <div
                class="form-group has-search d-inline-block position-relative"
              >
                <span class="fa fa-search form-control-feedback1234"></span>
                <input
                  v-model="searchWithdrawl"
                  type="text"
                  class="form-control"
                  placeholder="Search Contact"
                  @keypress="getWithdrawlByRequester('denied')"
                />
              </div>
            </b-col>
          </b-row>
          <b-row class="mt-4">
            <b-col md="12">
              <div class="wrapper">
                <table class="c-table">
                  <thead class="c-table__header">
                    <tr>
                      <th></th>
                      <th></th>
                      <th class="c-table__col-label">Propietario</th>
                      <th class="c-table__col-label">cantidade</th>
                      <th class="c-table__col-label">Estatus</th>
                    </tr>
                  </thead>
                  <tbody class="c-table__body">
                    <tr
                      v-for="(withdrawal, i) in withdrawalList"
                      :key="i"
                      @click="openUserData"
                    >
                      <td class="c-table__cell">
                        <div class="form-check">
                          <input
                            class="form-check-input custom-checkbox"
                            type="checkbox"
                            :value="withdrawal.withdrawal_id"
                            @change="handleOnCheck($event)"
                          />
                        </div>
                      </td>
                      <td></td>
                      <td class="c-table__cell">{{ withdrawal.nombre_usuario }}</td>
                      <td class="c-table__cell">{{ withdrawal.amount }}</td>
                      <td class="c-table__cell">{{ withdrawal.status }}</td>
                      <td class="c-table__cell"></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
    </b-card>

    <!--    modal 18-->
    <UserDataModal
      v-show="userDataVisible"
      @close="closeUserData"
      @modal-delete="openModalDelete"
      :content="withdrawalData"
      :withdrawalssId="withdrawalId"
    />
    <!--    delete modal-->
    <ModalDelete
      v-show="modalDeleteVisible"
      @close="closeModalDelete"
      :withdrawalssId="withdrawalId"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import UserDataModal from '@/components/withdrawal/UserDataModal.vue'
import ModalDelete from '@/components/withdrawal/ModalDelete.vue'

let users = ref([
  {
    name: 'Alice Blue',
    email: 'aliceblue@example.com',
    amount: '763012721',
    picture: '/img/profile.jpg',
  },
  {
    name: 'Alice Blue',
    email: 'aliceblue@example.com',
    amount: '763012721',
    picture: '/img/profile.jpg',
  },
  {
    name: 'Alice Blue',
    email: 'aliceblue@example.com',
    amount: '763012721',
    picture: '/img/profile.jpg',
  },
  {
    name: 'Alice Blue',
    email: 'aliceblue@example.com',
    amount: '763012721',
    picture: '/img/profile.jpg',
  },
  {
    name: 'Alice Blue',
    email: 'aliceblue@example.com',
    amount: '763012721',
    picture: '/img/profile.jpg',
  },
  {
    name: 'Alice Blue',
    email: 'aliceblue@example.com',
    amount: '763012721',
    picture: '/img/profile.jpg',
  },
  {
    name: 'Alice Blue',
    email: 'aliceblue@example.com',
    amount: '763012721',
    picture: '/img/profile.jpg',
  },
])
const store = useStore()
const userDataVisible = ref(false)
const modalDeleteVisible = ref(false)
let withdrawalList = ref(0)
let searchWithdrawl = ref(null)

function getWithdrawalList(status) {
  const data = JSON.stringify({ status: status })
  store.dispatch('getWithdrawlList', data).then((response) => {
    if (response.content) {
      withdrawalList.value = response.content
    }
  })
}

getWithdrawalList('processing')

function getWithdrawlByRequester(type) {
  let payload = JSON.stringify({
    username: searchWithdrawl.value,
  })
  store.dispatch('getWithdrawlByRequester', payload).then((response) => {
    if (response.status) {
      this.withdrawalList =
        response.content.length > 0 &&
        response.content.filter((e) => e.status === type)
    }
  })
}

function openUserData() {
  userDataVisible.value = true
}

function closeUserData() {
  userDataVisible.value = false
}

function openModalDelete() {
  modalDeleteVisible.value = true
}

function closeModalDelete(closeAll) {
  modalDeleteVisible.value = false

  if (closeAll) closeUserData()
}
</script>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Withdrawal',
  data: function () {
    return {
      withdrawalId: '',
      withdrawalData: {},
    }
  },
  methods: {
    handleOnCheck(event) {
      this.withdrawalId = event.target.value
      if (this.withdrawalId) {
        const data = JSON.stringify({ withdrawal_id: this.withdrawalId })
        this.$store.dispatch('getWithdrawlInfo', data).then((response) => {
          if (response.content) {
            this.withdrawalData = response.content
          }
        })
      }
    },
  },
}
</script>
<style lang="scss">
.head {
  font-weight: 600;
  font-size: 16px;
  color: #323c43;
}
.sm-btn-c {
  width: 120px;
  padding: unset;
}
.form-control-feedback12 {
  left: 13px !important;
  position: absolute;
}
.form-control-feedback123 {
  left: 13px !important;
  position: absolute;
  top: 19px;
}
.form-control-feedback1234 {
  left: 13px !important;
  position: absolute;
  top: 11px;
}
</style>
