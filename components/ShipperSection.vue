<template>
  <section
    class="
      shipper-section
      mt-20
      relative
      flex
      justify-center
      items-center
      bg-center bg-cover bg-fixed
    "
  >
    <div class="container">
      <div class="shipper-content relative text-center text-white">
        <span class="text-sm bg-primary text-white p-1">Shippment</span>
        <h3 class="text-2xl sm:text-4xl font-bold">
          Are You A Shipper? You Can Download <br />Our Application
        </h3>
        <p class="max-w-xl mx-auto text-sm my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
          ipsa quasi! Porro exercitationem, neque enim incidunt corrupti eveniet
          excepturi iste qui id officiis vero ea veniam quia, obcaecati
          accusamus eum?
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a class="app-btn blu flex items-center vert px-5 py-1" href="#">
            <i class="lab la-apple"></i>
            <p>
              Available on the <br />
              <span class="big-txt">App Store</span>
            </p>
          </a>
          <a class="app-btn blu flex items-center vert px-5 py-1" href="#">
            <i class="lab la-google-play"></i>
            <p>
              Get it on <br />
              <span class="big-txt">Google Play</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.shipper-section {
  height: 70vh;
  background-image: url('~/assets/imgs/shipper-bg.jpg');
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.7);
    z-index: 0;
  }

  .app {
    &-btn {
      color: #fff;
      text-align: left;
      border-radius: 5px;
      text-decoration: none;
      font-size: 10px;
      text-transform: uppercase;
      &.blu {
        background-color: #101010;
        transition: background-color 0.25s linear;
        &:hover {
          background-color: #454545;
        }
      }
      i {
        width: 20%;
        text-align: center;
        font-size: 28px;
        margin-right: 7px;
      }
      .big-txt {
        font-size: 17px;
        text-transform: capitalize;
      }
    }
  }
}
</style>
