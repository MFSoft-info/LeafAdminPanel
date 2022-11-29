<template>
  <div>
    <b-row>
      <b-col md="8">
        <h4 class="heading-users m-0">USUARIOS PIDIENDO RETIRAR SU TOKEN</h4>
      </b-col>
    </b-row>
    <b-card no-body>
      <b-tabs card>
        <b-tab no-body title="Faltan Procesar">
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
                  type="text"
                  class="form-control"
                  placeholder="Search Contact"
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
                      <th class="c-table__col-label">Nombre</th>
                      <th class="c-table__col-label">Nombre de usuario</th>
                      <th class="c-table__col-label">Monto</th>
                      <th class="c-table__col-label">Fecha</th>
                      <th class="c-table__col-label">Direccion de token</th>
                    </tr>
                  </thead>
                  <tbody class="c-table__body">
                    <tr
                      v-for="(user, i) in users"
                      :key="i"
                      @click="openUserData"
                    >
                      <td class="c-table__cell">
                        <div class="form-check">
                          <input
                            class="form-check-input custom-checkbox"
                            type="checkbox"
                            value=""
                          />
                        </div>
                      </td>
                      <td class="c-table__cell">
                        <img
                          class="c-img-table"
                          width="40px"
                          height="40px"
                          src="/img/profile.jpg"
                        />
                      </td>
                      <td class="c-table__cell">Alice Blue</td>
                      <td class="c-table__cell">aliceblue@example.com</td>
                      <td class="c-table__cell">763012721</td>
                      <td class="c-table__cell"></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab no-body title="Procesados">
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
                  type="text"
                  class="form-control"
                  placeholder="Search Contact"
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
                      <th class="c-table__col-label">Nombre</th>
                      <th class="c-table__col-label">Nombre de usuario</th>
                      <th class="c-table__col-label">Monto</th>
                      <th class="c-table__col-label">Fecha</th>
                      <th class="c-table__col-label">Direccion de token</th>
                    </tr>
                  </thead>
                  <tbody class="c-table__body">
                    <tr
                      v-for="(user, i) in users"
                      :key="i"
                      @click="openUserData"
                    >
                      <td class="c-table__cell">
                        <div class="form-check">
                          <input
                            class="form-check-input custom-checkbox"
                            type="checkbox"
                            value=""
                          />
                        </div>
                      </td>
                      <td class="c-table__cell">
                        <img
                          class="c-img-table"
                          width="40px"
                          height="40px"
                          src="/img/profile.jpg"
                        />
                      </td>
                      <td class="c-table__cell">Alice Blue</td>
                      <td class="c-table__cell">aliceblue@example.com</td>
                      <td class="c-table__cell">763012721</td>
                      <td class="c-table__cell"></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab no-body title="Negados">
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
                  type="text"
                  class="form-control"
                  placeholder="Search Contact"
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
                      <th class="c-table__col-label">Nombre</th>
                      <th class="c-table__col-label">Nombre de usuario</th>
                      <th class="c-table__col-label">Monto</th>
                      <th class="c-table__col-label">Fecha</th>
                      <th class="c-table__col-label">Direccion de token</th>
                    </tr>
                  </thead>
                  <tbody class="c-table__body">
                    <tr
                      v-for="(user, i) in users"
                      :key="i"
                      @click="openUserData"
                    >
                      <td class="c-table__cell">
                        <div class="form-check">
                          <input
                            class="form-check-input custom-checkbox"
                            type="checkbox"
                            value=""
                          />
                        </div>
                      </td>
                      <td class="c-table__cell">
                        <img
                          class="c-img-table"
                          width="40px"
                          height="40px"
                          src="/img/profile.jpg"
                        />
                      </td>
                      <td class="c-table__cell">Alice Blue</td>
                      <td class="c-table__cell">aliceblue@example.com</td>
                      <td class="c-table__cell">763012721</td>
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
    />
    <!--    delete modal-->
    <ModalDelete v-show="modalDeleteVisible" @close="closeModalDelete" />
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
]);
const store = useStore();
const userDataVisible = ref(false)
const modalDeleteVisible = ref(false);
const data= JSON.stringify({status:"successful"})
 store.dispatch("getWithdrawlsList", data ).then((response) => {
        if(response.content){
            users.value = response.content;
        }
    })

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
