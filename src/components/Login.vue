<template>
  <div class="loginModal">
    <!-- Modal -->
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginTitle"
      aria-hidden="true"
      
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <ul
              class="nav nav-tabs nav-fill nav-pills mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                  >Login</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-register-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-register"
                  role="tab"
                  aria-controls="pills-register"
                  aria-selected="false"
                  >Signup</a
                >
              </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="pills-login-tab"
              >
                <h5 class="text-center">Login Please</h5>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    v-model="email"
                  />
                  <small class="form-text text-muted"
                    >We'll never share your email with anyone else.</small
                  >
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>

                <div class="form-group">
                  <button class="btn btn-primary" @click="signIn()">Login</button>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="pills-register-tab"
              >
                <h5 class="text-center">Create New Account</h5>

                <div class="form-group">
                  <label for="name">Your name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Your nice name"
                    v-model="name"
                  />
                </div>

                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    v-model="email"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>

                <div class="form-group">
                  <button @click="signup()" class="btn btn-primary">Signup</button>
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
import {fb} from '../firebase.js';

export default {
  name: "Login",
  props: {},
  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },
  methods:{
    random() {
      return fb;
    },
    hideModal(){
          var modal = document.getElementsByClassName('modal-backdrop');
          console.log(modal[0]);
          modal[0].classList.remove('fade');
          modal[0].classList.remove('show');
          modal[0].remove();
    },
    signup() {
      fb.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.hideModal();
          this.$router.replace('/admin');
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMsg = error.message;
          if(errorCode=='auth/weak-password'){
            alert('Password too weak.')
          }else{
            alert(errorMsg);
          }
        });
    },
     signIn() {
      fb.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.hideModal();
          this.$router.replace('/admin');
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMsg = error.message;
          if(errorCode=='auth/wrong-password'){
            alert('Wrong Password')
          }else if(errorCode=='auth/user-not-found'){
            alert('User not found.')
          }else{
            alert(errorMsg);
          }
        });
    }
  }
};
</script>