<template>
  <div class="user-wrapper">
    <b-row>
      <b-col md="6">
        <h4 style="text-transform: uppercase" class="heading-users">
          USUARIOS {{ routeName }}
        </h4>
      </b-col>
      <b-col
        sm="4"
        md="3"
        v-if="role == 'superadmin'"
        class="d-flex align-items-center"
      >
        <button @click="openAddBalance" class="common resp-btn">
          Añadir saldo
        </button>
      </b-col>
      <b-col
        sm="4"
        md="3"
        v-if="role == 'superadmin'"
        class="d-flex align-items-center"
      >
        <button @click="openRemoveBalance" class="common resp-btn">
          Quitar saldo
        </button>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" sm="6" md="10" class="d-inline-flex align-items-center position-relative">
        <div class="form-check search-cb">
          <input
            class="form-check-input custom-checkbox"
            type="checkbox"
            ref="all"
            @change="selectUser($event)"
          />
        </div>
        <!-- :value="everyone" -->

        <!-- Actual search box -->
        <div class="form-group has-search d-flex align-items-center position-relative">
              <span style="border:1px solid #b3b0b0;border-radius: 5px;
                  padding-left: 3px;
                  position: absolute;
                  margin-top: 8px;
                  margin-left: 10px;
                  height: auto;
                  margin-bottom: 8px;
                  padding-right: 3px;"  @click="getUserByUsername()"> 
                  <span
                  class="fa fa-search form-control-feedback1234" style="position:relative; top:0; left:0px !important"
                ></span>
              </span>
          <input
            v-model="searchUser"
            type="text"
            class="form-control"
            placeholder="Search Contact"
            @keypress="getUserByUsername()"
          />
        </div>
      </b-col>
      <b-col cols="12" sm="6" md="2" class="total-res">
        <span>TOTAL: </span><strong>{{ total }}</strong>
      </b-col>
    </b-row>
    <b-row style="color: #ffffff" class="mt-4">
      <b-col md="12">
        <div class="wrapper">
          <table class="c-table">
            <thead class="c-table__header">
              <tr>
                <th></th>
                <th></th>
                <th class="c-table__col-label">Nombre Usuario</th>
                <th class="c-table__col-label">Full Nombre</th>
                <th class="c-table__col-label">Teléfono</th>
                <th class="c-table__col-label">Estatus</th>
                <th class="c-table__col-label">Accion</th>
              </tr>
            </thead>
            <tbody class="c-table__body" v-if="usersList">
              <tr v-for="(value, index) in usersList" :key="value">
                <td class="c-table__cell">
                  <div class="form-check">
                    <input
                      class="form-check-input custom-checkbox"
                      type="checkbox"
                      :value="value.id"
                      @change="selectUser($event)"
                    />
                  </div>
                </td>
                <td class="c-table__cell">
                  <img
                    class="c-img-table"
                    v-if="value.avatar"
                    :src="value.avatar"
                  />
                  <img class="c-img-table" v-else src="/img/profile.jpg" />
                </td>
                <td class="c-table__cell">
                  {{ value.nombre_usuario }}
                </td>
                <td class="c-table__cell">
                  {{ value.full_nombre }}
                </td>
                <td class="c-table__cell">
                  {{ value.telefono }}
                </td>
                <td class="c-table__cell">
                  <span
                    v-if="value.status_p2p === 'active'"
                    class="badge bg-success"
                  >
                    {{ value.status_p2p }}</span
                  >
                  <span
                    v-else-if="value.status_p2p === 'inactive'"
                    class="badge bg-danger"
                  >
                    {{ value.status_p2p }}</span
                  >
                  <span v-else class="badge c-color">
                    {{ value.status_p2p }}</span
                  >
                </td>
                <td class="c-table__cell">
                  <button @click="openEditModal(value)" class="common w-c me-2">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button v-if="routeName == 'Eliminados'"
                    @click="openResetModal(index)"
                    class="common w-c w-c-c"
                  >
                    <i  class="fas fa-undo"></i>
                  </button>
                  <button v-if="routeName != 'Eliminados'"
                    @click="openDeleteModal(index)"
                    class="common w-c w-c-c"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
    <!-- edit modal -->
    <EditModal
      v-show="editModalOpen"
      @close="closeEditModal"
      :userDetail="editUserDetail"
    />
    <!-- delete modal -->
    <DeleteModal
      v-show="deleteModalOpen"
      @close="closeDeleteModal"
      @delete="deleteUser"
    />
    <ResetModal
      v-show="resetModalOpen"
      @close="closeResetModal"
      @delete="resetUser"
    />
    <!--    ANADIR SALDO MODAL-->
    <AddBalance
      v-show="addBalanceOpen"
      @close="closeAddBalance"
      :data="userId"
    />
    <!--    QUITAR SALDO MODAL-->
    <RemoveBalance
      v-show="removeBalanceOpen"
      @close="closeRemoveBalance"
      :data="userId"
    />
  </div>
</template>
<script setup>
import { ref, watchEffect, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import Backdrop from '@/components/Backdrop.vue'
import AddBalance from '@/components/users/AddBalance.vue'
import RemoveBalance from '@/components/users/RemoveBalance.vue'
import EditModal from '@/components/users/EditModal.vue'
import DeleteModal from '@/components/users/DeleteModal.vue'
import ResetModal from '@/components/users/ResetModal.vue'
const store = useStore()
const route = useRoute()

const routeName = ref('')
const addBalanceOpen = ref(false)
const removeBalanceOpen = ref(false)
const resetModalOpen = ref(false)
const deleteModalOpen = ref(false)
const editModalOpen = ref(false)
const resetIndex = ref(null)
const deleteIndex = ref(null)
var tableData = ref([
  {
    nombre: 'Alice Blue',
    Correo: 'aliceblue@example.com',
    Telefono: '763012721',
    Estatus: 'Inactivo',
  },
  {
    nombre: 'Alice Blue',
    Correo: 'aliceblue@example.com',
    Telefono: '763012721',
    Estatus: 'Activo',
  },
  {
    nombre: 'Alice Blue',
    Correo: 'aliceblue@example.com',
    Telefono: '763012721',
    Estatus: 'Blocked',
  },
  {
    nombre: 'Alice Blue',
    Correo: 'aliceblue@example.com',
    Telefono: '763012721',
    Estatus: 'Inactivo',
  },
  {
    nombre: 'Alice Blue',
    Correo: 'aliceblue@example.com',
    Telefono: '763012721',
    Estatus: 'Inactivo',
  },
])
var editUserDetail = ref({})

// Add Balance
function openAddBalance() {
  addBalanceOpen.value = true
}

function closeAddBalance() {
  addBalanceOpen.value = false
}

// Remove Balance
function openRemoveBalance() {
  removeBalanceOpen.value = true
}

function closeRemoveBalance() {
  removeBalanceOpen.value = false
}

// Edit user modal
function openEditModal(value) {
  editUserDetail.value = value
  let payload = JSON.stringify({
    user_id: value.id,
  })
  store.dispatch('getUserProfile', payload).then((response) => {
    if (response.status) {
      editUserDetail.value = response.content
    }
  })
  editModalOpen.value = true
}

function closeEditModal() {
  editModalOpen.value = false
}

// Delete user modal
function openDeleteModal(index) {
  deleteModalOpen.value = true
  deleteIndex.value = index
}

function closeDeleteModal() {
  deleteModalOpen.value = false
  deleteIndex.value = null
}

function deleteUser() {
  tableData.value.splice(deleteIndex, 1)
  deleteModalOpen.value = false
}

function openResetModal(index) {
  resetModalOpen.value = true
  resetIndex.value = index
}

function closeResetModal() {
  resetModalOpen.value = false
  resetIndex.value = null
}
function resetUser() {
  tableData.value.splice(resetIndex, 1)
  resetModalOpen.value = false
}


watchEffect(() => {
  routeName.value = route.meta.title
})
</script>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Users',
  data: function () {
    return {
      usersList: ref([]),
      userId: [],
      searchUser: '',
      currentCondition: '',
      role: localStorage.getItem('userRole'),
      total: ''
    }
  },
  watch: {
    $route: function (to, from) {
      this.getUserList(to.meta.title)
      this.currentCondition = to.meta.title
    },
  },
  created() {
    const nav_route = useRoute().meta.title
    this.getUserList(nav_route)
    this.currentCondition = nav_route
  },

  methods: {
    selectUser(event) {
      if (this.$refs.all.checked) {
        for (let i = 0; i < this.usersList.length; i++) {
          let idss = this.usersList[i].id
          this.userId.push(idss)
        }
      } else {
        this.userId.push(event.target.value)
      }
    },
    getUserList(currentRoute) {
      let data = JSON.stringify({
        condition:
          currentRoute === 'Activos'
            ? 'active'
            : currentRoute === 'Inactivos'
            ? 'inactive'
            : currentRoute === 'Bloqueados'
            ? 'blocked'
            : currentRoute === 'ConCompras' || currentRoute === 'Con Compras'
            ? 'with buys'
            : currentRoute === 'Conventas' || currentRoute === 'Con Ventas'
            ? 'with sells'
            : currentRoute === 'Eliminados'
            ? 'deleted'
            : currentRoute === 'Admin'
            ? 'admins'
            : currentRoute === 'ConNegocios' || currentRoute === 'Con negocios'
            ? 'with businesses'
            : currentRoute === 'SinNegocios' || currentRoute === 'Sin negocios'
            ? 'no businesses'
            : ''
      })
      this.$store.dispatch('getUsersList', data).then((response) => {
        if (response.content) {
          this.usersList = response.content
          this.total = response.content.length
          console.log(response.content.length)
        }
      })
    },
    getUserByUsername() {
      let currentRoute = this.currentCondition
      let condition =
        currentRoute === 'Activos'
          ? 'active'
          : currentRoute === 'Inactivos'
          ? 'inactive'
          : currentRoute === 'Bloqueados'
          ? 'blocked'
          : currentRoute === 'ConCompras' || currentRoute === 'Con Compras'
          ? 'with buys'
          : currentRoute === 'Conventas' || currentRoute === 'Con Ventas'
          ? 'with sells'
          : currentRoute === 'Eliminados'
          ? 'deleted'
          : currentRoute === 'Admin'
          ? 'admins'
          : currentRoute === 'ConNegocios' || currentRoute === 'Con Negocios'
          ? 'with businesses'
          : currentRoute === 'SinNegocios' || currentRoute === 'Sin Negocios'
          ? 'no businesses'
          : ''

      if (!this.searchUser) {
        this.getUserList(this.currentCondition)
        return 0
      }
      let data = JSON.stringify({
        username: this.searchUser,
        condition: condition,
      })
      this.$store.dispatch('getUserByUsername', data).then((response) => {
        if (response.content) {
          let data = response.content
          if (Object.keys(data).length > 0 || data.length > 0) {
            this.usersList = [data]
          } else {
            this.usersList = []
          }
        }
      })
    },
  },
}
</script>
<style lang="scss">
@import '../assets/scss/variables';

.heading-users {
  font-weight: 600;
  font-size: 20px;
  line-height: 64px;
  color: #323c43;
  margin-left: 20px;
}
.user-wrapper {
  //background-color: $white;
}
.common {
  border: 1px solid $text-color;
  background-color: $text-color;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  width: 100%;
  height: 45px;
  border-radius: 8px;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
}

/* Table styles */

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
  text-align: left;
}

td:first-of-type {
  padding-left: 12px;
  width: 66px;
}
td:nth-child(2) {
  width: 66px;
}

.c-table {
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  background-color: #fff;
  border-radius: 4px;
  font-size: 12px;
  line-height: 1.25;
  margin-bottom: 24px;
  width: 100%;
  color: $black-text;
}

.c-table__cell {
  padding: 20px 6px 20px 12px;
  word-wrap: break-word;
  font-size: 12px;
}

.c-table__header tr {
  color: $black-text;
  font-size: 14px;
}

.c-table__header th {
  //background-color: #716eb6;
  padding: 18px 6px 18px 12px;
}

.c-table__header th:first-child {
  border-top-left-radius: 4px;
}

.c-table__header th:last-child {
  border-top-right-radius: 4px;
}

.c-table__body tr {
  border-bottom: 1px solid rgba(113, 110, 182, 0.15);
}

.c-table__body tr:last-child {
  border-bottom: none;
}

.c-table__body tr:hover {
  background-color: rgba(113, 110, 182, 0.15);
  color: #272b37;
}

.c-table__label {
  display: none;
}

/* Mobile table styles */

@media only screen and (max-width: 939px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  td:first-child {
    padding-top: 24px;
    padding-left: 34px !important;
  }

  td:last-child {
    padding-bottom: 24px;
  }

  .c-table {
    border: 1px solid rgba(113, 110, 182, 0.15);
    font-size: 15px;
    line-break: 1.2;
  }

  .c-table__header tr {
    //position: absolute;
    //top: -9999px;
    //left: -9999px;
    display: flex;
  }

  .c-table__cell {
    padding: 12px 24px;
    position: relative;
    width: 100%;
    word-wrap: break-word;
    font-size: 14px !important;
    color: #272b37 !important;
    font-weight: bold;
  }

  .c-table__label {
    color: #272b37 !important;
    display: block;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  .c-table__body tr:hover {
    background-color: transparent;
  }

  .c-table__body tr:nth-child(odd) {
    background-color: rgba(113, 110, 182, 0.04);
  }
}

.custom-checkbox {
  border-radius: unset !important;
  padding: 9px !important;
}
.w-c {
  width: 40px !important;
  padding: unset !important;
  height: 35px !important;
}
.w-c-c {
  background-color: $red !important;
  border: 1px solid $red !important;
}
.c-img-table {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.c-color {
  background-color: #716eb6 !important;
}
/* Bootstrap 4 text input with search icon */

.has-search .form-control {
  padding-left: 2.375rem;
}
//
//.has-search .form-control-feedback {
//  position: absolute;
//  //z-index: 2;
//  display: block;
//  width: 20px;
//  height: 2.375rem;
//  line-height: 2.375rem;
//  text-align: center;
//  pointer-events: none;
//  color: #aaa;
//  margin-left: 10px;
//}
.form-control {
  &:focus {
    box-shadow: unset !important;
  }
}
.search-cb {
  padding-left: 36px !important;
  width: 66px;
}
.fs-14 {
  font-size: 14px;
}
.chw {
  width: 130px;
  height: 25px;
  padding: unset;
}
.chg {
}
.pointer {
  cursor: pointer;
}

.total-res {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

@media screen and (max-width: 1181px) and (min-width: 300px) {
  .resp-btn {
    padding: unset !important;
  }
}
@media screen and (max-width: 946px) and (min-width: 300px) {
  .resp-btn {
    font-size: 11px !important;
  }
}
@media screen and (max-width: 767px) and (min-width: 300px) {
  .resp-btn {
    margin-bottom: 20px !important;
  }
  .heading-users {
    margin-left: unset !important;
  }
}
.form-control-feedback {
  position: absolute;
  top: 0px;
  left: 23px;
}
@media screen and (max-width: 580px) and (min-width: 300px) {
  .total-res {
    justify-content: flex-start !important;
    margin-top: 20px !important;
    margin-left: 10px;
  }
}

@media screen and (max-width: 889px) and (min-width: 767px) {
  .heading-users {
    font-size: 16px;
    margin-left: 4px !important;
  }
}
@media screen and (max-width: 484px) and (min-width: 300px) {
  .c-table__header tr {
    display: block !important;
  }
}
</style>
