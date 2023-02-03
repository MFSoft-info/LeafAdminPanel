<template>
  <div class="left-wrapper">
    <div>
      <div class="app-log">
        <span v-if="!userProfileImg">
          <i class="fas fa-user logo"></i>
        </span>
        <span v-else>
          <img
            :src="userProfileImg"
            alt="profile"
            style="height: 80px; width: 80px; border-radius: 50%"
          />
        </span>
      </div>
      <div v-if="userProfileName" class="text-center text-capitalize">
        <strong>{{ userProfileName }}</strong>
      </div>
    </div>

    <ul class="nav-list">
      <li @click="checkTheRoute" class="s-nav">
        <router-link tag="li" to="/" class="s-nav-link" exact>
          Home
        </router-link>
      </li>
      <li class="s-nav">
        <div v-b-toggle.accordion-1 class="s-nav-link">
          <span>Usuarios</span> <i class="fa fa-caret-down ms-2"></i>
        </div>
        <b-collapse
          v-model="collaspe"
          id="accordion-1"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <div @click="onClickTest">
              <router-link tag="li" to="/Activos" class="s-nav-link">
                Activos
              </router-link>
            </div>
            <div @click="onClickTest">
              <router-link tag="li" to="/Inactivos" class="s-nav-link">
                Inactivos
              </router-link>
            </div>
            <div @click="onClickTest">
              <router-link tag="li" to="/Bloqueados" class="s-nav-link">
                Bloqueados (buy y sell)
              </router-link>
            </div>
            <div @click="onClickTest">
              <router-link tag="li" to="/ConCompras" class="s-nav-link">
                Con compras
              </router-link>
            </div>
            <div @click="onClickTest">
              <router-link tag="li" to="/Conventas" class="s-nav-link">
                Con ventas
              </router-link>
            </div>
            <div @click="onClickTest">
              <router-link tag="li" to="/ConNegocios" class="s-nav-link">
                Con Negocios
              </router-link>
            </div>
            <div @click="onClickTest">
              <router-link tag="li" to="/SinNegocios" class="s-nav-link">
                Sin Negocios
              </router-link>
            </div>
            <div @click="onClickTest">
              <router-link tag="li" to="/Eliminados" class="s-nav-link">
                Eliminados
              </router-link>
            </div>
            <div @click="onClickTest">
              <router-link tag="li" to="/Admin" class="s-nav-link">
                Admin
              </router-link>
            </div>
          </b-card-body>
        </b-collapse>
      </li>
      <li @click="checkTheRoute" class="s-nav">
        <router-link tag="li" to="/team" class="s-nav-link">
          Equipo
        </router-link>
      </li>
      <li @click="checkTheRoute" class="s-nav" v-if="role == 'superadmin'">
        <router-link tag="li" to="/settings" class="s-nav-link">
          Configuración
        </router-link>
      </li>
      <li @click="checkTheRoute" class="s-nav">
        <router-link tag="li" to="/withdrawal" class="s-nav-link">
          Solicitudes de retiros
        </router-link>
      </li>
      <li @click="checkTheRoute" class="s-nav">
        <router-link tag="li" to="/business" class="s-nav-link">
          Aprobación de negocios
        </router-link>
      </li>
      <li @click="checkTheRoute" class="s-nav">
        <router-link tag="li" to="/approval" class="s-nav-link">
          Aprobación de anuncios
        </router-link>
      </li>
      <li @click="checkTheRoute" class="s-nav">
        <router-link tag="li" to="/chat" class="s-nav-link"> Chat </router-link>
      </li>
      <li @click="checkTheRoute" class="s-nav">
        <router-link tag="li" to="/login" class="s-nav-link">
          Salir
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  data() {
    return {
      collaspe: false,
      userProfileImg: localStorage.getItem('userProfileImg'),
      role: localStorage.getItem('userRole'),
      userProfileName: localStorage.getItem('userProfileName'),
      userDeleted: localStorage.getItem('userDeleted'),
    }
  },
  computed: {
    // ...mapGetters(['getUserProfileImg']),
  },
  mounted() {
    const header = document.querySelector('.header-wrapper')
    const sidebar = document.querySelector('.left-wrapper')
    const home = document.querySelector('.content-wrapper')
    let isMobile = (window.mobileCheck = () => {
      let check = false
      ;(function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true
      })(navigator.userAgent || navigator.vendor || window.opera)
      return check
    })
    if (isMobile()) {
      header.style.left = '0px'
      header.style.width = '100%'
      sidebar.style.display = 'none'
      sidebar.style.transition = 'all 0.5s ease 0s'
      home.style.marginLeft = '1px'
      return
    }
    // window.addEventListener('resize', (event) =>{
    //  if(event.currentTarget.outerWidth < 767){
    //    if (!this.isShow) {
    //      header.style.left = "0px";
    //      header.style.width = "100%";
    //      sidebar.style.display = "none";
    //      sidebar.style.transition= "all 0.5s ease 0s";
    //      home.style.marginLeft = "1px"
    //    }
    //   }
    //  else{
    //    header.style.left = "260px";
    //    header.style.width = "calc(100% - 260px)";
    //    sidebar.style.display = "block";
    //    home.style.marginLeft = "260px";
    //    sidebar.style.transition= "all 0.5s ease 0s";
    //  }
    //
    // });
  },
  methods: {
    checkTheRoute() {
      const header = document.querySelector('.header-wrapper')
      const sidebar = document.querySelector('.left-wrapper')
      const home = document.querySelector('.content-wrapper')
      let isMobile = (window.mobileCheck = () => {
        let check = false
        ;(function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            check = true
        })(navigator.userAgent || navigator.vendor || window.opera)
        return check
      })
      if (isMobile()) {
        header.style.left = '0px'
        header.style.width = '100%'
        sidebar.style.display = 'none'
        sidebar.style.transition = 'all 0.5s ease 0s'
        home.style.marginLeft = '1px'
      }
    },
    onClickTest() {
      this.collaspe = !this.collaspe
      const header = document.querySelector('.header-wrapper')
      const sidebar = document.querySelector('.left-wrapper')
      const home = document.querySelector('.content-wrapper')
      let isMobile = (window.mobileCheck = () => {
        let check = false
        ;(function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            check = true
        })(navigator.userAgent || navigator.vendor || window.opera)
        return check
      })
      if (isMobile()) {
        header.style.left = '0px'
        header.style.width = '100%'
        sidebar.style.display = 'none'
        sidebar.style.transition = 'all 0.5s ease 0s'
        home.style.marginLeft = '1px'
      }
    },
  },
}
</script>
<style lang="scss">
@import '../assets/scss/variables';
.left-wrapper {
  transition: all 0.5s ease 0s;
  width: 260px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: $white;
  box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.app-log {
  padding: 24px 53px;
  justify-content: center;
  display: flex;
  .fa-user {
    font-size: 3rem !important;
  }
}

.nav-list {
  padding: 20px 16px;
}

.s-nav-link {
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: $dark-blue;
  padding: 12px 16px;
  text-decoration: none;

  &:hover,
  &.router-link-active {
    background-color: $active-link;
    border-radius: 4px;
    color: $dark-blue;
    font-weight: 600;
    transition: 0.2s ease-in;
  }
}

.sn-image {
  margin-right: 14px;
}
.s-nav {
  list-style: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
}
</style>
