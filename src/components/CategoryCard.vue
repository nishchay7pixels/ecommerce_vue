<template>
  <div class="card-content" style="margin: 0 auto;">
    <a :href="redirectTo"
      ><div >
        <img
          :src="image"
          alt="Buy Two Get One Freeimage"
        />
      </div>
      </a>
      <div class="card-desc">
      <p>{{offerText}}</p>
  </div>
  </div>
</template>
<script>
export default {
  name: "category-cards",
  props: {
    name: String,
    searchField: String,
    redirectTo: null,
    image: null,
    offerText:null
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
section {
  padding: 100px 0;
}
.details-card {
  background: #ecf0f1;
}

.card-content {
  background: #ffffff;
  border: 4px;
  width: auto;
  height: auto;
}

.card-img {
  position: relative;
  overflow: hidden;
  border-radius: 0;
  z-index: 1;
}

.card-img img {
  width: 120px;
  height: 120px;
  display: block;
}

.card-img span {
  position: absolute;
  top: 15%;
  left: 25%;
  background: #1abc9c;
  padding: 6px;
  color: #fff;
  font-size: 12px;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  transform: translate(-50%, -50%);
}
.card-img span h4 {
  font-size: 12px;
  margin: 0;
  padding: 10px 5px;
  line-height: 0;
}
.card-desc {
  padding: 1.25rem;
}

.card-desc h3 {
  color: #000000;
  font-weight: 600;
  font-size: 1.5em;
  line-height: 1.3em;
  margin-top: 0;
  margin-bottom: 5px;
  padding: 0;
}

.card-desc p {
  color: #747373;
  font-size: 14px;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.5;
  margin: 0px;
  margin-bottom: 20px;
  padding: 0;
  font-family: "Raleway", sans-serif;
}
.btn-card {
  background-color: #1abc9c;
  color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 0.84rem 2.14rem;
  font-size: 0.81rem;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  margin: 0;
  border: 0;
  -webkit-border-radius: 0.125rem;
  border-radius: 0.125rem;
  cursor: pointer;
  text-transform: uppercase;
  white-space: normal;
  word-wrap: break-word;
  color: #fff;
}
.btn-card:hover {
  background: orange;
}
a.btn-card {
  text-decoration: none;
  color: #fff;
}
</style>