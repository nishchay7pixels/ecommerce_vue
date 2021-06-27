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
            <div class="row">
              <div class="col-6">
                <input
                  type="text"
                  placeholder="Full name"
                  class="form-control"
                  v-model="profile.fullname"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  placeholder="Phone Number"
                  class="form-control"
                  v-model="profile.phone"
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col">
                <textarea
                  type="text"
                  placeholder="Address"
                  class="form-control"
                  v-model="profile.address"
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-10">
                <input
                  type="text"
                  placeholder="Postcode"
                  class="form-control"
                  v-model="profile.postcode"
                />
              </div>
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
            <div class="row">
              <div class="col-6">
                <input
                  type="text"
                  placeholder="User name"
                  class="form-control"
                  v-model="account.username"
                />
              </div>
              <div class="col">
                <input
                  type="email"
                  placeholder="Email"
                  class="form-control"
                  v-model="account.email"
                />
              </div>
            </div>

            <br />
            <div class="row">
              <div class="col-6">
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
              <div class="col-4"></div>
              <div class="d-grid gap-2 col-4 mx-auto">
                <button class="btn btn-primary" @click="saveAccount">
                  Save
                </button>
              </div>
              <div class="col-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { fb, db } from "../firebase";
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
          })
          .catch((error) => {
            console.error("Error saving profile information", error);
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
              console.log("Password updated successfully");
            })
            .catch(function (error) {
              // An error happened.
              console.log("Password update failed due to below error");
              console.error(error);
              alert("Please choose a valid password.");
            });
        }
        db.collection("Account")
          .doc(this.account.userId + "")
          .set(this.account)
          .then(() => {
            console.log("Account Information Saved");
          })
          .catch((error) => {
            console.error("Error saving account information", error);
          });
        console.log(this.password);
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
<style>
</style>