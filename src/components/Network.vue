<template>
  <div id="network">
    <div class="uppercase flex justify-center items-center">
      <div class="text-[red] text-large mr-4">{{ "<" }}</div>
      <h3 class="text-stroke text-large font-extrabold tracking-[8px]">
        network
      </h3>
    </div>

    <div
      class="network-content text-center w-[fit-content] m-auto mt-[50px] text-xl text-gray3"
    >
      <div>
        We leverage
        <span class="highlight"> the largest and strongest crypto network</span>
        in <span class="underline highlight">VIETNAM</span>, to <br />
        help projects access one of the most dynamic markets in the world
      </div>
      <div class="mt-5">
        Vietnamese builders continue to push the forefront of blockchain<br />
        innovation, pioneering the new era of Defi to
        <span class="underline highlight">GAMEFI</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Network",
};
</script>

<style lang="scss">
#network {
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
        right: 60px;
        transform: translateX(-50%);
      }
    }
  }

  .network-content {
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
