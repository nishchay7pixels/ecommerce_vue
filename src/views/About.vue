<template>
<div>
  <Navbar/>
  <div class="about">
    <Banner></Banner>
    <div class="b-example-divider"></div>
    <About-section></About-section>
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


