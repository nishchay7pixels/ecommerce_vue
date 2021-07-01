<template>
  <div>
    <div class="overlay"></div>

    <div class="banner">
      <div class="banner-1"></div>
      <div class="banner-text col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-5 fw-normal">Ecommerce for Developers</h1>
        <p class="lead fw-normal">
          An ecommerce store for the developers community by the developers
          community.
        </p>
        <router-link to="/products" class="btn d btn-primary" href="#"
          >Shop Now</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 960px;
}

.flex-equal > * {
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    flex: 1;
  }
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: #080d15;
  opacity: 0.4;
}

.btn.btn-lg {
  padding: 10px 40px;
}
.btn.btn-hero,
.btn.btn-hero:hover,
.btn.btn-hero:focus {
  color: #f5f5f5;
  background-color: #1abc9c;
  border-color: #1abc9c;
  outline: none;
  margin: 20px auto;
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.75);
  -webkit-transform: translate3d(-50%, -50%, 0);
  -moz-transform: translate3d(-50%, -50%, 0);
  -ms-transform: translate3d(-50%, -50%, 0);
  -o-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}
.banner-text h1 {
  font-size: 6em;
  font-weight: bold;
  margin: 0;
  padding: 0;
}

.banner .banner-1,
.banner .banner-2,
.banner .banner-3 {
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.banner .banner-2 {
  background-image: url(https://ununsplash.imgix.net/photo-1416339134316-0e91dc9ded92?q=75&fm=jpg&s=883a422e10fc4149893984019f63c818);
}
.banner .banner-1 {
  background-image: url(../assets/banner-background.jpg);
}

/********************************/
/*          Media Queries       */
/********************************/

/* MOTO G4 Galaxy S5 IPhone 5/SE */
@media screen and (min-width: 320px) and (max-width: 375px) and (min-height: 568px) and (max-height: 812px) {
  .banner-text h1{
    font-size: 2em;
  }
  .banner-text .lead{
    font-size: 1em;
    width: 280px;
  }
}
/* 
@media screen and (min-width: 320px)  and (min-height: 568px)  {
  .banner-text h1{
    font-size: 2em;
  }
  .banner-text .lead{
    font-size: 1em;
    width: 280px;
  }
} */
@media screen and (min-width: 376px) and (max-width: 768px) {
  .banner-text h1{
    font-size: 3em;
  }
  .banner-text .lead{
    font-size: 1em;
    width: 280px;
  }
}
/* @media screen and (min-width: 769px) {
  .banner-text h1 {
  font-size: 6em;
  font-weight: bold;
  margin: 0;
  padding: 0;
}
} */


@media screen and (min-width: 376px) and (max-width: 760px) {
  .banner-text h1{
    font-size: 3em;
  }
  
}
@media screen and (min-width: 761px) {
  .banner-text h1{
    font-size: 6em;
  }
  
}


@media screen and (min-width: 980px) {
  .banner-text {
    width: 980px;
  }
}
@media screen and (min-width: 640px) and (max-width: 980px) and (min-height: 623px){
  .banner-text {
    width: 640px;
  }
  .banner-text .lead{
    width: 640px;
  }
}
@media screen and (max-height: 622px){
  .banner-text h1 {
    font-size: 2em;
  }
}

@media screen and (max-height: 500px){
  .banner-text{
    display: none;
  }
}
/*
@media screen and (max-height: 513px){
  .banner-text h1 {
    display: none;
  }
}
@media screen and (max-height: 411px){
  .banner-text .lead {
    font-size: 14px;
  }
}
@media screen and (max-width: 640px) {
  .banner-text h1 {
    font-size: 4em;
    
  }
}
@media screen and (max-width: 480px) {
  .banner-text h1 {
    font-size: 3em;
  }
}
*/
</style>