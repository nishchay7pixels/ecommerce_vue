<template>
<div>
  <Navbar/>
  <div class="home">
    <Banner></Banner>
    <About-section></About-section>
    <product-section></product-section>
  </div>
</div>
  
</template>

<script>
import Banner from "../components/Banner.vue";
import AboutSection from "../sections/About-Section.vue";
import ProductSection from "../sections/Products-Section.vue";

export default {
  name: "Home",
  components: {
    Banner,
    AboutSection,
    ProductSection,
  },
};
</script>
<style>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

@media (min-width: 992px) {
  .rounded-lg-3 {
    border-radius: 0.3rem;
  }
}
</style>
