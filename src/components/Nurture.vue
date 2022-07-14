<template>
  <div
    id="nurture"
    class="w-fit mx-auto uppercase text-[46px] text-center text-white font-extrabold leading-[58px]"
  >
    we nurture
    <span class="text-stroke" style="--width: 1px">early stage</span>
    <br />
    <span class="text-stroke" style="--width: 1px">talent</span> in order to
    bring <br />
    <span class="text-stroke" style="--width: 1px"> the nextwave of </span>
    <br />
    blockchain innovation.
  </div>
</template>

<script>
export default {
  name: "Nurture",
};
</script>

<style lang="scss">
#nurture {
  position: relative;
  padding-bottom: 10px;

  &::after,
  &::before {
    content: "";
    position: absolute;

    width: 140px;
    height: 1px;
    background: white;
  }

  &::before {
    top: 60px;
    left: 0;
    transform: translateX(-40%);
  }

  &::after {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
