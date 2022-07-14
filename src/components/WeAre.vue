<template>
  <div
    id="we-are"
    class="!mt-10 w-fit mx-auto uppercase text-[46px] text-center text-white font-extrabold leading-[58px]"
  >
    we are the gateway of<br />
    accessibility to
    <span class="text-stroke" style="--width: 1px">vietnam</span>,<br />
    <span class="text-stroke" style="--width: 1px"> the fastest growing </span>
    <br />
    crypto market in the <br />
    world.
  </div>
</template>

<script>
export default {
  name: "WeAre",
};
</script>

<style lang="scss">
body {
  background: #000;
  div {
    background: white;
  }
}
</style>

<style lang="scss">
#we-are {
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
