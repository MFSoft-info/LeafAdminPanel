<template>
  <div>
    <b-row>
      <b-col md="8">
        <h4 class="heading-users m-0">
          USUARIOS PIDIENDO APROBACIÓN DE SUS NEGOCIOS
        </h4>
      </b-col>
    </b-row>
    <b-card no-body>
      <b-tabs card>
        <b-tab
          no-body
          title="Faltan Procesar"
          @click="getBusinessList('in review')"
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
              <span style="border:1px solid #b3b0b0;border-radius: 5px;
                  padding-left: 3px;
                  position: absolute;
                  margin-top: 6px;
                  margin-left: 10px;
                  height: auto;
                  margin-bottom: 10px;
                  padding-right: 3px;"  @click="getBusinessByRequester('in review')"> 
                  <span
                  class="fa fa-search form-control-feedback1234" style="position:relative; top:0; left:0px !important"
                ></span>
              </span>
                <input
                  v-model="searchBusiness"
                  type="text"
                  class="form-control"
                  placeholder="Search Contact"
                  @keypress="getBusinessByRequester('in review')"
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
                      <th class="c-table__col-label" style="width: 200px">
                        Nombre usuario
                      </th>
                      <th class="c-table__col-label">Categoría</th>
                      <th class="c-table__col-label">Nombre del Negocio</th>
                      <th class="c-table__col-label">Estatus</th>
                    </tr>
                  </thead>
                  <tbody class="c-table__body">
                    <tr
                      v-for="(business, i) in businessList"
                      :key="i"
                      @click="openUserData(business.business_id)"
                    >
                      <td class="c-table__cell">
                        <div class="form-check">
                          <input
                            class="form-check-input custom-checkbox"
                            type="checkbox"
                            :value="business.business_id"
                            @change="handleOnCheck($event)"
                          />
                        </div>
                      </td>
                      <td class="c-table__cell">
                        {{ business.nombre_usuario }}
                      </td>
                      <td class="c-table__cell">{{ business.category }}</td>
                      <td class="c-table__cell">
                        {{ business.business_name }}
                      </td>
                      <td class="c-table__cell">
                        {{ business.business_status }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab no-body title="Procesados" @click="getBusinessList('approved')">
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
                <span style="border:1px solid #b3b0b0;border-radius: 5px;
                  padding-left: 3px;
                  position: absolute;
                  margin-top: 6px;
                  margin-left: 10px;
                  height: auto;
                  margin-bottom: 10px;
                  padding-right: 3px;"  @click="getBusinessByRequester('approved')"> 
                  <span
                  class="fa fa-search form-control-feedback1234" style="position:relative; top:0; left:0px !important"
                ></span>
              </span>
                <input
                  v-model="searchBusiness"
                  type="text"
                  class="form-control"
                  placeholder="Search Contact"
                  @keypress="getBusinessByRequester('approved')"
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
                      <th class="c-table__col-label" style="width: 200px">
                        Nombre usuario
                      </th>
                      <th class="c-table__col-label">Categoría</th>
                      <th class="c-table__col-label">Nombre del Negocio</th>
                      <th class="c-table__col-label">Estatus</th>
                    </tr>
                  </thead>
                  <tbody class="c-table__body">
                    <tr
                      v-for="(business, i) in businessList"
                      :key="i"
                      @click="openUserData(business.business_id)"
                    >
                      <td class="c-table__cell">
                        <div class="form-check">
                          <input
                            class="form-check-input custom-checkbox"
                            type="checkbox"
                            :value="business.business_id"
                            @change="handleOnCheck($event)"
                          />
                        </div>
                      </td>
                      <td class="c-table__cell">
                        {{ business.nombre_usuario }}
                      </td>
                      <td class="c-table__cell">{{ business.category }}</td>
                      <td class="c-table__cell">
                        {{ business.business_name }}
                      </td>
                      <td class="c-table__cell">
                        {{ business.business_status }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab no-body title="Negados" @click="getBusinessList('denied')">
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
              <span style="border:1px solid #b3b0b0;border-radius: 5px;
                  padding-left: 3px;
                  position: absolute;
                  margin-top: 6px;
                  margin-left: 10px;
                  height: auto;
                  margin-bottom: 10px;
                  padding-right: 3px;"  @click="getBusinessByRequester('denied')"> 
                  <span
                  class="fa fa-search form-control-feedback1234" style="position:relative; top:0; left:0px !important"
                ></span>
              </span>
                <input
                  v-model="searchBusiness"
                  type="text"
                  class="form-control"
                  placeholder="Search Contact"
                  @keypress="getBusinessByRequester('denied')"
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
                      <th class="c-table__col-label" style="width: 200px">
                        Nombre usuario
                      </th>
                      <th class="c-table__col-label">Categoría</th>
                      <th class="c-table__col-label">Nombre del Negocio</th>
                      <th class="c-table__col-label">Estatus</th>
                    </tr>
                  </thead>
                  <tbody class="c-table__body">
                    <tr
                      v-for="(business, i) in businessList"
                      :key="i"
                      @click="openUserData(business.business_id)"
                    >
                      <td class="c-table__cell">
                        <div class="form-check">
                          <input
                            class="form-check-input custom-checkbox"
                            type="checkbox"
                            :value="business.business_id"
                            @change="handleOnCheck($event)"
                          />
                        </div>
                      </td>
                      <td class="c-table__cell">
                        {{ business.nombre_usuario }}
                      </td>
                      <td class="c-table__cell">{{ business.category }}</td>
                      <td class="c-table__cell">
                        {{ business.business_name }}
                      </td>
                      <td class="c-table__cell">
                        {{ business.business_status }}
                      </td>
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
      @show-confirm="openConfirmModal"
      :content="businessData"
      :businessId="businessId"
    />
    <!--    confirm modal-->
    <ConfirmModal
      v-show="confirmModalVisible"
      @close="closeConfirmModal"
      :businessId="businessId"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import UserDataModal from '@/components/business/UserDataModal.vue'
import ConfirmModal from '@/components/business/ConfirmModal.vue'
const store = useStore()
const users = ref([
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

let searchBusiness = ref(null)
let businessList = ref(0)
let businessData = ref({})

function getBusinessList(status) {
  const data = JSON.stringify({ business_status: status })
  store.dispatch('getBusinessesList', data).then((response) => {
    if (response.content) {
      businessList.value = response.content
    }
  })
}
getBusinessList('in review')

function getBusinessByRequester(type) {
  let payload = JSON.stringify({
    username: searchBusiness.value,
  })
  store.dispatch('getBusinessByRequester', payload).then((response) => {
    if (response.status == true) {
      this.businessList =
        response.content.length > 0 &&
        response.content.filter((e) => e.business_status === type)
    }
  })
}

const userDataVisible = ref(false)
const confirmModalVisible = ref(false)

function openUserData(businessId) {
  userDataVisible.value = true
  if (businessId) {
    const data = JSON.stringify({ business_id: businessId })
    store.dispatch('getBusinessInfo', data).then((response) => {
      if (response.content) {
        businessData.value = response.content
      }
    })
  }
}

function closeUserData() {
  userDataVisible.value = false
}

function openConfirmModal() {
  confirmModalVisible.value = true
}

function closeConfirmModal(closeAll) {
  confirmModalVisible.value = false

  if (closeAll) closeUserData()
}
</script>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Business',
  data: function () {
    return {
      businessId: '',
      businessData: {},
    }
  },
  methods: {
    handleOnCheck(event) {
      // this.businessId = event.target.value
      // if (this.businessId) {
      //   const data = JSON.stringify({ business_id: this.businessId })
      //   this.$store.dispatch('getBusinessInfo', data).then((response) => {
      //     if (response.content) {
      //       this.businessData = response.content
      //     }
      //   })
      // }
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
