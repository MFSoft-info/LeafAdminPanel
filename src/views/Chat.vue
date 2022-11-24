<template>
  <div>
    <b-row>
      <b-col md="8">
        <h4 class="heading-users m-0">CHAT</h4>
      </b-col>
    </b-row>
    <div class="container chato">
      <div class="row no-gutters">
        <div class="col-md-12 col-lg-4 border-right">
          <div class="search-box">
            <!-- Actual search box -->
            <div class="icon-input">
              <input class="icon-input__text-field" type="text" />
              <i class="icon-input__icon material-icons fas fa-search"></i>
            </div>
          </div>
          <div class="friend-drawer friend-drawer--onhover">
            <img
              class="profile-image"
              src="https://randomuser.me/api/portraits/men/20.jpg"
              alt=""
            />
            <div class="text">
              <h6>Robo Cop</h6>
              <p class="text-muted">Hey, you're arrested!</p>
            </div>
            <span class="time text-muted small">13:21</span>
          </div>
          <hr />
          <div class="friend-drawer friend-drawer--onhover">
            <img
              class="profile-image"
              src="https://randomuser.me/api/portraits/women/64.jpg"
              alt=""
            />
            <div class="text">
              <h6>Optimus</h6>
              <p class="text-muted">Wanna grab a beer?</p>
            </div>
            <span class="time text-muted small">00:32</span>
          </div>
          <hr />
          <div class="friend-drawer friend-drawer--onhover">
            <img
              class="profile-image"
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg"
              alt=""
            />
            <div class="text">
              <h6>Skynet</h6>
              <p class="text-muted">Seen that canned piece of s?</p>
            </div>
            <span class="time text-muted small">13:21</span>
          </div>
          <hr />
          <div class="friend-drawer friend-drawer--onhover">
            <img
              class="profile-image"
              src="http://i66.tinypic.com/2qtbqxe.jpg"
              alt=""
            />
            <div class="text">
              <h6>Termy</h6>
              <p class="text-muted">Im studying spanish...</p>
            </div>
            <span class="time text-muted small">13:21</span>
          </div>
          <hr />
          <div class="friend-drawer friend-drawer--onhover">
            <img
              class="profile-image"
              src="https://cdn.vox-cdn.com/thumbor/AYUayCXcqYxHDkR4a1N9azY5c_8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9375391/MV5BYjg1Yjk1MTktYzE5Mi00ODkwLWFkZTQtNTYxYTY3ZDVmMWUxXkEyXkFqcGdeQXVyNjUwNzk3NDc_._V1_.jpg"
              alt=""
            />
            <div class="text">
              <h6>Richard</h6>
              <p class="text-muted">I'm not sure...</p>
            </div>
            <span class="time text-muted small">13:21</span>
          </div>
          <hr />
          <div class="friend-drawer friend-drawer--onhover">
            <img
              class="profile-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzQ3HEvJBpgptB48mdCwRt_BHrmNrDwQiIlrjgJbDKihAV_NI"
              alt=""
            />
            <div class="text">
              <h6>XXXXX</h6>
              <p class="text-muted">Hi, wanna see something?</p>
            </div>
            <span class="time text-muted small">13:21</span>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="settings-tray">
            <div class="friend-drawer no-gutters friend-drawer--grey">
              <img
                class="profile-image"
                src="https://randomuser.me/api/portraits/men/30.jpg"
                alt=""
              />
              <div class="text">
                <h6>Robo Cop</h6>
                <p class="text-muted">
                  Layin' down the law since like before Christ...
                </p>
              </div>
              <span class="settings-tray--right">
                <!--            <i class="material-icons">cached</i>-->
                <!--            <i class="material-icons">message</i>-->
                <i class="fas fa-ellipsis-v"></i>
              </span>
            </div>
          </div>
          <div class="chat-panel">
            <div class="row no-gutters">
              <div class="col-md-6">
                <div class="chat-bubble chat-bubble--left">Hello dude!</div>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-sm-10 col-lg-6 col-md-6 offset-md-6 offset-sm-2">
                <div class="chat-bubble chat-bubble--right">Hello dude!</div>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-sm-10 col-lg-6 col-md-6 offset-md-6 offset-sm-2">
                <div class="chat-bubble chat-bubble--right">Hello dude!</div>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-md-6">
                <div class="chat-bubble chat-bubble--left">Hello dude!</div>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-md-6">
                <div class="chat-bubble chat-bubble--left">Hello dude!</div>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-md-6">
                <div class="chat-bubble chat-bubble--left">Hello dude!</div>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-sm-10 col-lg-6 col-md-6 offset-md-6 offset-sm-2">
                <div class="chat-bubble chat-bubble--right">Hello dude!</div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="chat-box-tray">
                  <i class="fas fa-smile-beam"></i>
                  <input type="text" placeholder="Type your message here..." />
                  <i class="fas fa-microphone me-3"></i>
                  <i class="fas fa-paper-plane"></i>
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
  name: 'Chat',
}
</script>
<style scoped lang="scss">
// Video tutorial/codealong here: https://youtu.be/fCpw5i_2IYU
$blue: #74b9ff;

body {
  background-image: url('https://images.unsplash.com/photo-1560568082-c15188aa6510?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80');
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
.chat-bubble--right {
  background-color: $blue !important;
  color: #ffffff !important;
}

.container {
  margin: 60px auto;
  background: #fff;
  padding: 0;
  border-radius: 7px;
}

.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 40px;
}

.settings-tray {
  background: #f8f9fa !important;
  padding: 10px 15px;
  border-radius: 7px;

  .no-gutters {
    padding: 0;
  }

  &--right {
    float: right;

    i {
      margin-top: 10px;
      font-size: 25px;
      color: grey;
      margin-left: 14px;
      transition: 0.3s;

      &:hover {
        color: $blue;
        cursor: pointer;
      }
    }
  }
}

.search-box {
  background: #f8f9fa !important;
  padding: 22px 58px;

  .input-wrapper {
    background: #fff;
    border-radius: 40px;

    i {
      color: grey;
      margin-left: 7px;
      vertical-align: middle;
    }
  }
}

input {
  border: none;
  border-radius: 30px;
  width: 80%;

  &::placeholder {
    color: #e3e3e3;
    font-weight: 300;
    margin-left: 20px;
  }

  &:focus {
    outline: none;
  }
}

.friend-drawer {
  padding: 10px 15px;
  display: flex;
  vertical-align: baseline;
  background: #f8f9fa !important;
  transition: 0.3s ease;

  &--grey {
    background: #eee;
  }

  .text {
    margin-left: 12px;
    width: 88%;

    h6 {
      margin-top: 6px;
      margin-bottom: 0;
    }

    p {
      margin: 0;
    }
  }

  .time {
    color: grey;
  }

  &--onhover:hover {
    background: $blue !important;
    cursor: pointer;

    p,
    h6,
    .time {
      color: #fff !important;
    }
  }
}

hr {
  margin: 5px auto;
  width: 60%;
}

.chat-bubble {
  padding: 10px 14px;
  background: #ffffff;
  margin: 10px 30px;
  border-radius: 9px;
  position: relative;
  animation: fadeIn 1s ease-in;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-bottom: 0;
    margin-top: -10px;
  }

  &--left {
    &:after {
      left: 0;
      border-right-color: #ffffff;
      border-left: 0;
      margin-left: -20px;
    }
  }

  &--right {
    &:after {
      right: 0;
      border-left-color: $blue;
      border-right: 0;
      margin-right: -20px;
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.offset-md-9 {
  .chat-bubble {
    background: $blue;
    color: #fff;
  }
}

.chat-box-tray {
  background: #ffffff;
  display: flex;
  align-items: baseline;
  padding: 10px 15px;
  align-items: center;
  margin-top: 19px;
  bottom: 0;

  input {
    margin: 0 10px;
    padding: 6px 2px;
    background-color: #ffffff;
    width: 90%;
  }

  i {
    color: grey;
    font-size: 30px;
    vertical-align: middle;

    &:last-of-type {
      margin-left: 25px;
    }
  }
}
.chato {
  background-color: #f8f9fa !important;
  width: 100% !important;
}
.form-control-feedback-chat {
  position: absolute;
  top: 13px;
  right: 70px;
}
.container {
  background-color: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  max-width: 90%;
  min-height: 480px;
}

.icon-input {
  margin-bottom: 10px;
  position: relative;
  max-width: 300px;
  &__text-field {
    width: 100%;
    padding: 5px 30px 5px 5px;
  }
  &__icon {
    color: rgba(0, 0, 0, 1);
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
  &__text-field:focus + &__icon {
    color: #ff8400;
  }
}
</style>
