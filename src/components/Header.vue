<template>
  <div class="header-wrapper">
    <div @click="hideShowSideBar" class="d-inline-flex align-items-center">
      <i class="fas fa-bars pointer"></i>
    </div>
    <div class="d-inline-flex justify-content-end align-items-center">
      <b-dropdown
        class="text-right"
        right
        size="lg"
        variant="link"
        toggle-class="text-decoration-none"
        no-caret
      >
        <template #button-content>
          <span v-if="!userProfileImg">
            <i class="fas fa-user header-user-icon"></i>
          </span>
          <span v-else>
            <img
              :src="userProfileImg"
              alt="profile"
              style="height: 45px; width: 45px; border-radius: 50%"
            />
          </span>
        </template>
        <b-dropdown-item href="#" class="dropdown-c">
          <router-link tag="li" to="/profile" class="s-nav-link">
            <i class="fas fa-user w-25"></i>
            <span class="w-75 mll-4">Profile</span>
          </router-link>
        </b-dropdown-item>
        <!-- <b-dropdown-item href="#" class="dropdown-c">
          <router-link tag="li" to="/notifications" class="s-nav-link">
            <i class="fas fa-wallet w-25"></i>
            <span class="w-75 mll-4">Account</span>
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item href="#">
          <router-link tag="li" to="/chat" class="s-nav-link">
            <i class="fas fa-inbox w-25"></i>
            <span class="w-75 mll-4">Inbox</span>
          </router-link>
        </b-dropdown-item> -->
        <b-dropdown-item href="#">
          <router-link
            @click="location.reload()"
            tag="li"
            to="/login"
            class="s-nav-link"
          >
            <i class="fas fa-power-off w-25"></i>
            <span class="w-75 mll-4">Logout</span>
          </router-link>
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      isShow: true,
      userProfileImg: localStorage.getItem('userProfileImg'),
    }
  },
  methods: {
    hideShowSideBar() {
      // get the baseLayout in three variables
      // change the layout is case isMobile true
      // is isMobile false layout set to be as used in Desktop

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

      if (isMobile() && sidebar.style.display === 'block') {
        header.style.left = '0px'
        header.style.width = '100%'
        sidebar.style.display = 'none'
        sidebar.style.transition = 'all 0.5s ease 0s'
        home.style.marginLeft = '1px'
      } else if (isMobile() && sidebar.style.display === 'none') {
        header.style.left = '0px'
        header.style.width = '100%'
        sidebar.style.position = 'absolute'
        home.style.marginLeft = '1px'
        sidebar.style.display = 'block'
        sidebar.style.top = '60px'
      } else if (!isMobile() && sidebar.style.display === 'none') {
        header.style.left = '260px'
        header.style.width = 'calc(100% - 260px)'
        sidebar.style.display = 'block'
        home.style.marginLeft = '260px'
        sidebar.style.transition = 'all 0.5s ease 0s'
      } else if (!isMobile() && sidebar.style.display === 'fixed') {
        header.style.left = '260px'
        header.style.width = 'calc(100% - 260px)'
        sidebar.style.display = 'block'
        home.style.marginLeft = '260px'
        sidebar.style.transition = 'all 0.5s ease 0s'
      } else {
        header.style.left = '0px'
        header.style.width = 'calc(100% - 0px)'
        sidebar.style.display = 'none'
        home.style.marginLeft = '0px'
        sidebar.style.transition = 'all 0.5s ease 0s'
      }
    },
  },
}
</script>
<style lang="scss">
@import '../assets/scss/variables';

:root {
  --color--text: 0 0 35px 0 rgb(154 161 171 / 15%);
}

.header-wrapper {
  transition: all 0.5s ease 0s;
  background-color: $white;
  position: fixed;
  left: 260px;
  top: 0;
  height: 64px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  padding: 12px 30px;
  width: calc(100% - 260px);
  display: flex;
  justify-content: space-between;
  z-index: 9;
  .b-dropdown ul li a {
    display: block;
    width: 100%;
    clear: both;
    font-weight: 500;
    color: #6c757d;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    font-size: 14px;
  }
  .b-dropdown ul {
    box-shadow: var(--color--text);
    border: unset;
    border: 1px solid #e7ebf0;
    border-radius: unset;
  }
  .fa-user {
    color: #000000;
  }
  button {
    &:focus {
      outline: unset;
      box-shadow: unset;
    }
  }
}
.dropdown-c .fa-user {
  //color: #6c757d !important;
}
.mll-4 {
  margin-left: 4px;
}
.pointer {
  cursor: pointer;
}
</style>
