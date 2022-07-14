<template>
  <div id="highlight-pj" class="w-[100vw] h-[100vh] relative">
    <div
      class="title flex justify-center items-end font-bold text-white text-large uppercase tracking-[4px] pt-6"
    >
      <div class="text-[red]">{{ "<" }}</div>
      <div>
        hightlighted <span class="text-stroke font-extrabold">project</span>
      </div>
    </div>
    <div class="center-all pt-14">
      <img :src="img" alt="logo" />
      <div
        class="absolute w-60 left-[calc(100%+200px)] top-1/2 -translate-y-1/2"
      >
        <div
          class="relative uppercase font-bold text-lg text-[#ff0000] after:w-40 after:h-[2px] after:left-1/2 after:bottom-0 after:bg-white"
        >
          project
        </div>

        <div class="text-2xl uppercase text-white">{{ pjName }}</div>

        <div>
          <div v-for="item in pjDes" :key="item" class="flex">
            <div>arr</div>
            <div v-html="item"></div>
          </div>

          <div class="flex">
            <div class="uppercase">Head to site</div>
            <div>arr</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HightlightPJ",
  props: {
    img: {
      default:
        "https://pbs.twimg.com/profile_images/1508713706028478468/e8aC9VqW_400x400.jpg",
    },
    pjName: {
      default: "Cyball",
    },
    pjDes: {
      default: [
        "Cyball is a cyberpunk, football themed web3 game with innovative blockchain technology and competitive gameplay where players can earn rewards",
        "Backed by <span>Animoca, Kingsway Capital, Bitkraft</span> among others...",
      ],
    },
  },
};
</script>

<style lang="scss">
#highlight-pj {
  .title {
    position: relative;
    width: fit-content;
    margin: auto;

    &::after {
      content: "";
      position: absolute;
      right: 30px;
      bottom: 0;

      width: 160px;
      height: 2px;
      background: white;
    }
  }
}
</style>
