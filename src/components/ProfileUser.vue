<template>
  <div class="profile-user">
    <h2>Profile Settings</h2>
    <br />

    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="true"
        >
          Profile
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="account-tab"
          data-bs-toggle="tab"
          data-bs-target="#account"
          type="button"
          role="tab"
          aria-controls="account"
          aria-selected="false"
        >
          Account
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <br />
        <div class="form-group">
          <div class="container">
            <div
              class="
                row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2
                g-3
              "
            >
              <div class="col">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Full name"
                    v-model="profile.fullname"
                  />
                  <label for="floatingInput">Fullname</label>
                </div>
              </div>
              <div class="col">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Phone Number"
                    v-model="profile.phone"
                  />
                  <label for="floatingInput">Phone Number</label>
                </div>
              </div>
              <div class="col">
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Address"
                    id="floatingTextarea"
                    v-model="profile.address"
                  ></textarea>
                  <label for="floatingTextarea">Address</label>
                </div>
              </div>
              <div class="col">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Pincode"
                    v-model="profile.postcode"
                  />
                  <label for="floatingInput">Pincode</label>
                </div>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="d-grid gap-2 col-2 mx-auto">
                <button class="btn btn-primary" @click="saveProfile">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="tab-pane fade"
        id="account"
        role="tabpanel"
        aria-labelledby="account-tab"
      >
        <br />
        <div class="form-group">
          <div class="container">
            <div
              class="
                row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2
                g-3
              "
            >
              <div class="col">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Username"
                    v-model="account.username"
                  />
                  <label for="floatingInput">Username</label>
                </div>
              </div>
              <div class="col">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Email"
                    v-model="account.email"
                    disabled
                  />
                  <label for="floatingInput">Email</label>
                </div>
              </div>

              <div class="col">
                <input
                  type="text"
                  placeholder="New password"
                  class="form-control"
                  v-model="password.new"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  placeholder="Confirm password"
                  class="form-control"
                  v-model="password.repeat"
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="d-grid gap-2 col-2 mx-auto">
                <button class="btn btn-primary" @click="saveAccount">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { fb, db } from "../firebase";
import { EventBus } from "../main";
export default {
  name: "profile-user",
  data() {
    return {
      account: {
        userId: null,
        username: null,
        email: null,
      },
      profile: {
        fullname: "",
        phone: "",
        address: "",
        postcode: "",
      },
      password: {
        new: "",
        repeat: "",
      },
    };
  },
  methods: {
    saveProfile() {
      console.log(this.profile);
      if (
        this.profile.fullname == "" ||
        this.profile.phone == "" ||
        this.profile.address == "" ||
        this.profile.postcode == ""
      ) {
        alert("Enter Required details");
      } else {
        db.collection("Profile")
          .doc(this.account.userId)
          .set(this.profile)
          .then(() => {
            console.log("Profile Information Saved.");
            EventBus.$emit(
                "notification-success",
                "Profile Information Saved!"
              );
          })
          .catch((error) => {
            console.error("Error saving profile information", error);
            EventBus.$emit(
                "notification-error",
                "Something went wrong!"
              );

          });
      }
    },
    saveAccount() {
      if (
        this.account.userId == null ||
        this.account.username == null ||
        this.account.email == ""
      ) {
        alert("Enter Required details");
      } else {
        if (
          this.password.new === this.password.repeat &&
          this.password.new != ""
        ) {
          fb.auth()
            .currentUser.updatePassword(this.password.new)
            .then(function () {
              EventBus.$emit(
                "notification-success",
                "Password updated successfully!"
              );
            })
            .catch(function (error) {
              // An error happened.
              console.error(error);
              alert("Please choose a valid password.");
            });
        }
        if (this.account.username != null) {
          db.collection("Account")
            .doc(this.account.userId + "")
            .set(this.account)
            .then(() => {
              EventBus.$emit(
                "notification-success",
                "Username Saved!"
              );
            })
            .catch((error) => {
              alert("Error saving account information");
              console.log(error);
            });
        }
      }
    },
  },
  created() {
    let user = fb.auth().currentUser;
    this.account.userId = user.uid;
    this.account.email = user.email;
    console.log(this.account.userId);
    //var docRef = db.collection("Profile").doc(this.account.userId);
    db.collection("Profile")
      .doc(this.account.userId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.profile = doc.data();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
    db.collection("Account")
      .doc(this.account.userId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.account = doc.data();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  },
};
</script>
<style scoped>
.profile-user{
  background-color:rgba(248, 248, 248, 0.501);
}
</style>