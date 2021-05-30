<template>
<div>
  <Navbar/>
  <div class="home">
    <Banner></Banner>
    <div class="b-example-divider"></div>
    <About-section></About-section>
    <Product-section></Product-section>
  </div>
  <div class="about">
    <AboutSection/>
  </div>
  </div>
</template>
<script>
import AboutSection from '../sections/About-Section';
export default {
  name:'About',
  components:{
    AboutSection
  }
}
</script>


