<template>
  <div>
    <b-row>
      <b-col md="8">
        <h4 class="heading-users m-0">
          USUARIOS PIDIENDO APROBACIÓN DE SUS ANUNCIOS
        </h4>
      </b-col>
    </b-row>
    <b-card no-body>
      <b-tabs card>
        <b-tab no-body title="Faltan Procesar" @click="getAdsList('in review')">
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
                  v-model="searchAdvertise"
                  type="text"
                  class="form-control"
                  placeholder="Search Contact"
                  @keypress="getAdvertiseByRequester('in review')"
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
                      <th class="c-table__col-label w-25">Publicar enlace</th>
                      <th class="c-table__col-label">Estatus</th>
                    </tr>
                  </thead>
                  <tbody class="c-table__body">
                    <tr
                      v-for="(ad, i) in adsList"
                      :key="i"
                      @click="openUserData"
                    >
                      <td class="c-table__cell">
                        <div class="form-check">
                          <input
                            class="form-check-input custom-checkbox"
                            type="checkbox"
                            :value="ad.advertise_id"
                            @change="handleOnCheck($event)"
                          />
                        </div>
                      </td>
                      <td></td>
                      <td class="c-table__cell">{{ ad.owner }}</td>
                      <td class="c-table__cell w-25">{{ ad.post_link }}</td>
                      <td class="c-table__cell">{{ ad.status }}</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab no-body title="Procesados" @click="getAdsList('approved')">
          <b-row class="mt-5">
            <b-col md="10" class="d-inline-flex align-items-center">
              <div class="form-check search-cb">
                <input
                  class="form-check-input custom-checkbox"
                  type="checkbox"
                />
              </div>
              <!-- Actual search box -->
              <div
                class="form-group has-search d-inline-block position-relative"
              >
                <span class="fa fa-search form-control-feedback1234"></span>
                <input
                  v-model="searchAdvertise"
                  type="text"
                  class="form-control"
                  placeholder="Search Contact"
                  @keypress="getAdvertiseByRequester('approved')"
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
                      <th class="c-table__col-label">Publicar enlace</th>
                      <th class="c-table__col-label">Estatus</th>
                    </tr>
                  </thead>
                  <tbody class="c-table__body">
                    <tr
                      v-for="(ad, i) in adsList"
                      :key="i"
                      @click="openUserData"
                    >
                      <td class="c-table__cell">
                        <div class="form-check">
                          <input
                            class="form-check-input custom-checkbox"
                            type="checkbox"
                            :value="ad.advertise_id"
                            @change="handleOnCheck($event)"
                          />
                        </div>
                      </td>
                      <td></td>
                      <td class="c-table__cell">{{ ad.owner }}</td>
                      <td class="c-table__cell">{{ ad.post_link }}</td>
                      <td class="c-table__cell">{{ ad.status }}</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab no-body title="Negados" @click="getAdsList('denied')">
          <b-row class="mt-5">
            <b-col md="10" class="d-inline-flex align-items-center">
              <div class="form-check search-cb">
                <input
                  class="form-check-input custom-checkbox"
                  type="checkbox"
                />
              </div>
              <!-- Actual search box -->
              <div
                class="form-group has-search d-inline-block position-relative"
              >
                <span class="fa fa-search form-control-feedback1234"></span>
                <input
                  v-model="searchAdvertise"
                  type="text"
                  class="form-control"
                  placeholder="Search Contact"
                  @keypress="getAdvertiseByRequester('denied')"
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
                      <th class="c-table__col-label">Publicar enlace</th>
                      <th class="c-table__col-label">Estatus</th>
                    </tr>
                  </thead>
                  <tbody class="c-table__body">
                    <tr
                      v-for="(ad, i) in adsList"
                      :key="i"
                      @click="openUserData"
                    >
                      <td class="c-table__cell">
                        <div class="form-check">
                          <input
                            class="form-check-input custom-checkbox"
                            type="checkbox"
                            :value="ad.advertise_id"
                            @change="handleOnCheck($event)"
                          />
                        </div>
                      </td>
                      <td></td>
                      <td class="c-table__cell">{{ ad.owner }}</td>
                      <td class="c-table__cell">{{ ad.post_link }}</td>
                      <td class="c-table__cell">{{ ad.status }}</td>
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

    <!-- modal 18-->
    <UserDataModal
      v-show="userDataVisible"
      @close="closeUserData"
      @show-confirm="openConfirmModal"
      :content="adsData"
      :advertiseId="adsId"
    />

    <!--    confirm modal-->
    <ConfirmModal
      v-show="confirmModalVisible"
      @close="closeConfirmModal"
      :advertiseId="adsId"
    />
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import UserDataModal from '@/components/adApproval/UserDataModal.vue'
import ConfirmModal from '@/components/adApproval/ConfirmModal.vue'
const store = useStore()
let adsList = ref(0)
let adsDetails = ref(null)
let searchAdvertise = ref(null)

function getAdsList(status) {
  const data = JSON.stringify({ status: status })
  store.dispatch('getAdvertisesList', data).then((response) => {
    if (response.content) {
      adsList.value = response.content
    }
  })
}
getAdsList('in review')

const userDataVisible = ref(false)
const confirmModalVisible = ref(false)

function getAdvertiseByRequester(type) {
  let payload = JSON.stringify({
    username: searchAdvertise.value,
  })
  store.dispatch('getAdvertiseByRequester', payload).then((response) => {
    if (response.status) {
      this.adsList =
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
  name: 'Ad',
  data: function () {
    return {
      adsId: '',
      adsData: {},
    }
  },
  methods: {
    handleOnCheck(event) {
      this.adsId = event.target.value
      if (this.adsId) {
        const data = JSON.stringify({ advertise_id: this.adsId })
        this.$store.dispatch('getAdvertiseInfo', data).then((response) => {
          if (response.content) {
            this.adsData = response.content
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
