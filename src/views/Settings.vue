<template>
  <div>
    <b-row>
      <b-col md="8">
        <h4 class="heading-users m-0">CONFIGURACIÓN</h4>
      </b-col>
    </b-row>
    <b-card no-body>
      <b-tabs card>
        <b-tab no-body title="P2p">
          <P2p />
        </b-tab>

        <b-tab no-body title="CHAT"></b-tab>
        <b-tab no-body title="NEGOCIOS">
          <!-- Do the same for the rest of tab's content -->
          <Negocios />
        </b-tab>
        <b-tab no-body title="ANUNCIOS">
          <b-row class="mt-5 justify-content-center">
            <b-col md="12" lg="4" class="d-flex">
              <div class="mt-2 mb-2">
                <span class="cong-span-heading d-block text-left-c"
                  >Tiempo entre anuncio y anuncio</span
                >
                <input
                  type="text"
                  v-model="time_between_ads"
                  class="btn btn-outline-primary me-2 mt-2"
                />
              </div>
            </b-col>
            <b-col md="12" lg="4" class="d-flex">
              <div class="mt-2 mb-2">
                <span class="cong-span-heading d-block text-left-c"
                  >URL del tutorial</span
                >
                <input
                  v-model="tutorial_url"
                  type="text"
                  class="btn btn-outline-primary me-2 mt-2"
                />
              </div>
            </b-col>
          </b-row>
          <b-row class="mt-2 justify-content-center">
            <b-col lg="4" md="12" class="d-flex">
              <div class="mt-2 mb-2">
                <span class="cong-span-heading d-block text-left-c"
                  >URL de página de Facebook</span
                >
                <input
                  type="text"
                  v-model="facebook_url"
                  class="btn btn-outline-primary me-2 mt-2"
                />
              </div>
            </b-col>
            <b-col md="12" lg="4" class=" "> </b-col>
          </b-row>
          <b-row class="mt-2 justify-content-center">
            <b-col lg="4" md="12" class="d-flex">
              <div class="mt-2 mb-2">
                <span class="cong-span-heading d-block text-left-c"
                  >URL de cuenta de Tiktok</span
                >
                <input
                  type="text"
                  v-model="tiktok_url"
                  class="btn btn-outline-primary me-2 mt-2"
                  style="width: 500px"
                />
              </div>
            </b-col>
            <b-col md="12" lg="4" class=" "> </b-col>
          </b-row>
          <b-row class="mt-2 justify-content-center">
            <b-col lg="4" md="12" class="d-flex flex-wrap flex-md-nowrap">
              <div class="mt-2 mb-2">
                <span class="cong-span-heading d-block text-left-c"
                  >Código semanal</span
                >
                <input
                  type="text"
                  v-model="code"
                  class="btn btn-outline-primary col-md-1 me-2 mt-2"
                />
              </div>
              <div class="mt-2 mb-2 md-ms-3">
                <span class="cong-span-heading d-block text-left-c"
                  >Hastag semanal</span
                >
                <input
                  type="text"
                  v-model="hashtag"
                  class="btn btn-outline-primary col-md-1 me-2 mt-2"
                />
              </div>
            </b-col>
            <b-col md="12" lg="4" class=" "> </b-col>
          </b-row>
        </b-tab>
        <b-tab class="h-90" no-body title="SPLIT">
          <b-row class="mt-5 flex-wrap">
            <b-col sm="6" md="6" lg="3" class="d-flex flex-wrap">
              <div class="mt-2 mb-2">
                <span class="cong-span-heading d-block text-left-c fs-sm"
                  >Precio de leals.</span
                >
                <input
                  type="text"
                  value="0.25"
                  class="btn btn-outline-primary me-2 mt-2"
                />
              </div>
            </b-col>
            <b-col sm="6" md="6" lg="3" class="d-flex flex-wrap">
              <div class="mt-2 mb-2">
                <span class="cong-span-heading d-block text-left-c fs-sm"
                  >Balance split</span
                >
                <input
                  type="text"
                  value="11,000,000,000"
                  class="btn btn-outline-primary me-2 mt-2"
                />
              </div>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
      <!-- This button is just for demostration -->
      <!-- Make the changes that requires the API integration and update this code -->
      <div class="d-flex justify-content-end mb-4 mx-4">
        <button class="btn btn-primary" @click="submit">Guardar cambios</button>
      </div>
    </b-card>
  </div>
</template>
<script setup>
import Negocios from '@/components/settings/negocios/'
import P2p from '@/components/settings/p2p/'
import { useStore } from 'vuex'
const store = useStore()
function submit() {
  const data = JSON.stringify({
    // code: code,
    // hashtag:hashtag,
    // time_between_ads:time_between_ads,
    // facebook_url:facebook_url,
    // tiktok_url:tiktok_url,
    code: '',
    hashtag: '',
    time_between_ads: '',
    facebook_url: '',
    tiktok_url: '',
  })
  console.log('data', data)
  store.dispatch('updateAdsConfig', data).then((response) => {
    if (response.content) {
      console.log(response.content)
      adsConfig.value = response.content
      console.log('adsConfig', adsConfig)
    }
  })
}
// submit();
</script>
<style lang="scss">
.btn-outline-primary {
  background-color: rgba(140, 207, 238, 0.13) !important;
  border: 1px solid #031f4b !important;
  border-radius: 4px;
  color: #031f4b !important;
  font-weight: 600;
  transition: 0.2s ease-in;
  min-width: 100px;
  max-width: 200px;
  &:hover {
    background-color: #4650dd;
  }
  &:focus {
    box-shadow: unset !important;
  }
}
.span-psp {
  color: #031f4b;
  font-weight: 600;
  transition: 0.2s ease-in;
  text-align: center;
}

.headling {
  margin: 40px 0;

  h2 {
    color: #031f4b;
    font-size: 1.1rem;
    font-weight: 600;
  }
}
.cong-span-heading {
  color: #031f4b;
  font-weight: 600;
  transition: 0.2s ease-in;
  text-align: center;
  font-size: 16px;
}
.cong-span-heading1 {
  color: #031f4b;
  transition: 0.2s ease-in;
  text-align: center;
  font-size: 14px;
  display: block;
  margin-bottom: 20px;
  height: 60px;
}

.m-p2p {
  margin-right: 13px;
}

.new-w {
  width: 100% !important;
  height: 55px;
}
.text-left-c {
  text-align: left !important;
}
.h-90 {
  height: 300px;
}
.w-20P {
  width: 20%;
}

@media screen and (max-width: 980px) and (min-width: 300px) {
  .cong-span-heading1 {
    text-align: left !important;
  }
  .fs-sm {
    font-size: 16px !important;
  }
  .h-90 {
    height: auto !important;
  }
}
@media screen and (max-width: 1100px) and (min-width: 970px) {
  .fs-sm {
    font-size: 12px !important;
  }
}

.fs-sm {
  height: 50px;
}
</style>
