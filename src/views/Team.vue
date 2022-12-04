<template>
  <div class="team-wrapper">
    <b-row>
      <b-col md="8">
        <h4 class="heading-users m-0">EQUIPO</h4>
      </b-col>
    </b-row>
    <b-row class="d-flex align-items-center mt-3">
      <b-col md="6">
        <input
          v-model="searchTeam"
          type="text"
          placeholder="Buscar"
          @keypress="getTeamByUserName()"
          class="common buscar"
        />
      </b-col>
      <b-col
        md="3"
        class="d-inline align-items-center justify-content-center res-mt"
      >
        <span>DIRECTOS : </span><strong>25</strong>
      </b-col>
      <b-col md="3" class="res-mt">
        <span>INDIRECTOS : </span><strong>120</strong>
      </b-col>
    </b-row>

    <div class="row-team">
      <div class="top-levels">
        <div class="level" v-for="(data, index) in childs_count" :key="index">
          <p>n {{ doMath(index) }}</p>
          <p class="level-value">{{ data }}</p>
        </div>

        <!-- <div class="level">
          <p>n2</p>
          <p class="level-value">4</p>
        </div>

        <div class="level">
          <p>n3</p>
          <p class="level-value">1</p>
        </div>

        <div class="level">
          <p>n4</p>
          <p class="level-value">7</p>
        </div>

        <div class="level">
          <p>n5</p>
          <p class="level-value">8</p>
        </div>

        <div class="level">
          <p>n6</p>
          <p class="level-value">3</p>
        </div>

        <div class="level">
          <p>n7</p>
          <p class="level-value">7</p>
        </div>

        <div class="level">
          <p>n8</p>
          <p class="level-value">2</p>
        </div>

        <div class="level">
          <p>n9</p>
          <p class="level-value">1</p>
        </div>

        <div class="level">
          <p>n10</p>
          <p class="level-value">2</p>
        </div> -->
      </div>
      <div class="middle-div">
        <div>
          <div @click="isName = !isName">
            <i class="fas fa-user-plus"></i>
            <span class="team-span"> {{ teamList.user.nombre_usuario }} </span>
            <i class="fas fa-greater-than ms-2"></i>
          </div>
          <div v-if="isName" class="nested-team-span">
            <div v-for="(data, index) in teamList.children" :key="index">
              <div @click="isChildName = !isChildName" class="team-span">
                <i class="fas fa-user-plus"></i>
                <span class="team-span-n">
                  {{ data.user.nombre_usuario }}
                </span>
              </div>
              <div v-if="isChildName" class="nested-team-span">
                <div v-for="(childData, index) in data.children" :key="index">
                  <div
                    @click="isChildNameee = !isChildNameee"
                    class="team-span"
                  >
                    <i class="fas fa-user-plus"></i>
                    <span class="team-span-n">
                      {{ childData.user.nombre_usuario }}
                    </span>
                  </div>
                  <div v-if="isChildNameee" class="nested-team-span">
                    <div
                      v-for="(childDataaa, index) in childData.children"
                      :key="index"
                    >
                      <div @click="isChild = !isChild" class="team-span">
                        <i class="fas fa-user-plus"></i>
                        <span class="team-span-n">
                          {{ childDataaa.user.nombre_usuario }}
                        </span>
                      </div>
                      <div v-if="isChild" class="nested-team-span">
                        <div
                          v-for="(
                            childDataaaaaa, index
                          ) in childDataaa.children"
                          :key="index"
                        >
                          <div @click="isChildd = !isChildd" class="team-span">
                            <i class="fas fa-user-plus"></i>
                            <span class="team-span-n">
                              {{ childDataaaaaa.user.nombre_usuario }}
                            </span>
                          </div>
                          <div v-if="isChildd" class="nested-team-span">
                            <div
                              v-for="(
                                childDatas, index
                              ) in childDataaaaaa.children"
                              :key="index"
                            >
                              <div
                                @click="isChildddd = !isChildddd"
                                class="team-span"
                              >
                                <i class="fas fa-user-plus"></i>
                                <span class="team-span-n">
                                  {{ childDatas.user.nombre_usuario }}
                                </span>
                              </div>
                              <div v-if="isChildddd" class="nested-team-span">
                                <div
                                  v-for="(
                                    childDatasss, index
                                  ) in childDatas.children"
                                  :key="index"
                                >
                                  <div
                                    @click="isChilddddsssss = !isChilddddsssss"
                                    class="team-span"
                                  >
                                    <i class="fas fa-user-plus"></i>
                                    <span class="team-span-n">
                                      {{ childDatasss.user.nombre_usuario }}
                                    </span>
                                  </div>
                                  <div
                                    v-if="isChilddddsssss"
                                    class="nested-team-span"
                                  >
                                    <div
                                      v-for="(
                                        isChilddddsssddddss, index
                                      ) in childDatasss.children"
                                      :key="index"
                                    >
                                      <i class="fas fa-user-plus"></i>
                                      <span class="team-span-n">
                                        {{
                                          isChilddddsssddddss.user
                                            .nombre_usuario
                                        }}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Team',
  data() {
    return {
      isName: false,
      isChildName: false,
      isChildNameee: false,
      isChild: false,
      isChildd: false,
      isChildddd: false,
      isChilddddsssss: false,
      searchTeam: '',
      childs_count: [],
      teamList: {
        children: [],
      },
    }
  },
  beforeMount() {
    this.getTeam()
  },
  methods: {
    getTeam() {
      this.$store.dispatch('getTeam').then((response) => {
        if (response.status) {
          this.teamList = response.content
          this.childs_count = response.childs_count
        }
      })
    },
    getTeamByUserName() {
      let payload = JSON.stringify({
        text: this.searchTeam,
      })
      this.$store.dispatch('getTeamByUserName', payload).then((response) => {
        if (response.status) {
          this.teamList = response.content
          this.childs_count = response.childs_count
        }
      })
    },
    doMath: function (index) {
      return index + 1
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables';
:root {
  --bg-shadow--: 0 0.5rem 1rem rgb(0 0 0 / 15%);
}

.top-levels {
  display: flex;
  padding: 30px 20px 20px 20px;
  flex-wrap: wrap;
  gap: 15px 10px;
  justify-content: center;
}

.level {
  padding: 0 15px;
  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #031f4b;
    text-align: center;
  }
}

.buscar {
  width: 200px;
  border-radius: 200px;
}
.row-team {
  box-shadow: var(--bg-shadow--);
  border-radius: 1rem;
  background-color: #ffffff;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
}
.team-span {
  border-radius: 4px;
  color: #031f4b;
  font-weight: 600;
  transition: 0.2s ease-in;
  font-size: 24px;
  padding-left: 20px;
  cursor: pointer;
}
.team-span-n {
  border-radius: 4px;
  color: #031f4b;
  transition: 0.2s ease-in;
  font-size: 20px;
  padding-left: 20px;
  cursor: pointer;
}
.fa-user-plus {
  font-size: 24px !important;
}
.nested-team-span {
  margin-left: 20px;
  margin-top: 10px;
  div .fa-user-plus {
    font-size: 20px !important;
  }
}
.middle-div {
  width: 40% !important;
  padding: 20px 20px 30px 20px;
}

@media screen and (max-width: 1400px) and (min-width: 1000px) {
  .middle-div {
    width: 70% !important;
  }
}
@media screen and (max-width: 1000px) and (min-width: 800px) {
  .middle-div {
    width: 80% !important;
  }
}
@media screen and (max-width: 800px) and (min-width: 500px) {
  .middle-div {
    width: 90% !important;
  }
}
@media screen and (max-width: 500px) and (min-width: 300px) {
  .middle-div {
    width: 90% !important;
  }
}
@media screen and (max-width: 767px) and (min-width: 300px) {
  .res-mt {
    margin-top: 14px !important;
  }
}
@media screen and (max-width: 450px) and (min-width: 300px) {
  .team-span {
    font-size: 14px !important;
  }
  .team-span-n {
    font-size: 14px !important;
  }
}
</style>

