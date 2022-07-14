<template>
  <div id="our-pillars" class="w-fit mx-auto">
    <div class="our-pillars-title uppercase text-[60px] text-white font-bold">
      our
      <span class="text-stroke font-extrabold" style="--width: 2px"
        >pillars</span
      >
    </div>

    <div class="text-white font-bold text-[40px] mt-3 ml-32">
      <div class="flex items-center leading-[55px]">
        <div class="mr-2 text-[red]">{{ "<" }}</div>
        <div>network</div>
      </div>
      <div class="flex items-center leading-[55px]">
        <div class="mr-2 text-[red]">{{ "<" }}</div>
        <div>incubation</div>
      </div>
      <div class="flex items-center leading-[55px]">
        <div class="mr-2 text-[red]">{{ "<" }}</div>
        <div>media</div>
      </div>
      <div class="flex items-center leading-[55px]">
        <div class="mr-2 text-[red]">{{ "<" }}</div>
        <div>research</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Incubate",
};
</script>

<style lang="scss">
.our-pillars-title {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 20px;

    width: 180px;
    height: 2px;
    background: white;
  }
}
</style>
