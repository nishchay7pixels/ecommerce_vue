<template>
  <div class="profile">
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
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  placeholder="Phone Number"
                  class="form-control"
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
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-10">
                <INPUT
                  type="text"
                  placeholder="Postcode"
                  class="form-control"
                />
              </div>
              <div class="d-grid gap-2 col-2 mx-auto">
                <button class="btn btn-primary">Save Changes</button>
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
                />
              </div>
              <div class="col">
                <input type="text" placeholder="Email" class="form-control" />
              </div>
            </div>

            <br />
            <div class="row">
              <div class="col-6">
                <INPUT
                  type="text"
                  placeholder="New password"
                  class="form-control"
                />
              </div>
              <div class="col">
                <INPUT
                  type="text"
                  placeholder="Confirm password"
                  class="form-control"
                />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-10">
                <div>
                  <input class="form-control" type="file" id="formFile" />
                </div>
              </div>
              <div class="d-grid gap-2 col-2 mx-auto">
                <button class="btn btn-primary">Save Changes</button>
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
  name: "admin-profile",
};
</script>
<style>
.profile {
  margin-top: 2rem;
  background: #f2f2f2;
}
</style>