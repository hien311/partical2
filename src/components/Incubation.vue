<template>
  <div id="incubation">
    <div class="uppercase flex justify-center items-center">
      <div class="text-[red] text-large mr-4">{{ "<" }}</div>
      <h3 class="text-stroke text-large font-extrabold tracking-[8px]">
        incubation
      </h3>
    </div>

    <div
      class="incubation-content text-center w-[fit-content] m-auto mt-[50px] text-xl text-gray3"
    >
      <div>
        We incubation talented <span class="highlight">teams</span> and great
        minds, and equip them with the <br />
        tools and resources they need to seize oppotunity, and create change.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Incubation",
};
</script>

<style lang="scss">
#incubation {
  > div {
    &:first-child {
      position: relative;

      &::after {
        content: "";
        width: 25%;
        height: 2px;

        background: white;

        position: absolute;
        bottom: 0;
        left: 60px;
        transform: translateX(50%);
      }
    }
  }

  .incubation-content {
    position: relative;
    padding-bottom: 24px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      width: 60px;
      height: 1px;
      background: white;
    }
  }
}
</style>
