<template>
  <div class="about-us mt-20">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-6 items-center">
        <div class="about-img relative">
          <base-img alt="About us img" img="about-main.jpg" />
          <div
            class="
              ex-years
              bg-white
              absolute
              bottom-10
              right-6
              text-center
              sm:px-8 sm:py-12
              px-4
              py-8
            "
          >
            <div class="text-5xl sm:text-7xl text-primary font-bold">19</div>
            <span class="text-sm sm:text-base font-semibold"
              >Years of experince</span
            >
          </div>
        </div>

        <div class="about-us-content">
          <span class="text-sm bg-primary text-white p-1">About Company</span>
          <h3 class="text-4xl font-bold mb-5">
            Modern And Trusted Logistic Company
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            iusto vel dolor maxime perspiciatis nemo temporibus labore, beatae
            porro obcaecati eaque fugiat unde? Eligendi quis unde, doloremque
            alias labore commodi.
          </p>
          <ul class="mt-5">
            <li class="mb-2 font-semibold">
              <i class="las la-check bg-primary text-white rounded-full"></i>
              <span>24/7 Business Support</span>
            </li>
            <li class="mb-2 font-semibold">
              <i class="las la-check bg-primary text-white rounded-full"></i>
              <span>Secure Transportation</span>
            </li>
            <li class="mb-2 font-semibold">
              <i class="las la-check bg-primary text-white rounded-full"></i>
              <span>Easy And Quick Problem Analysis</span>
            </li>
            <li class="mb-2 font-semibold">
              <i class="las la-check bg-primary text-white rounded-full"></i>
              <span>World Wide Most Effective Business</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseImg from './baseImg.vue'
export default {
  components: { BaseImg },
}
</script>

<style lang="scss">
.about-us {
  .about-img {
    img {
      position: relative;
      z-index: -2;
    }
    img,
    .ex-years {
      border-radius: 0 70px 0 70px;
    }
    .ex-years {
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 20px;
        right: -20px;
        background: theme('colors.primary');
        border-radius: 0 70px 0 70px;
        z-index: -1;
      }
    }
  }
}
</style>
