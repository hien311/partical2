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
          class="pj-name w-fit pb-[2px] uppercase font-bold text-lg text-[red] tracking-[1px]"
        >
          project
        </div>

        <div
          class="text-4xl mt-3 mb-2 uppercase font-bold tracking-[4px] text-white"
        >
          {{ pjName }}
        </div>

        <div class="-ml-4">
          <div v-for="item in pjDes" :key="item" class="flex mt-2">
            <div class="text-[red] mr-1 w-4">{{ "<" }}</div>
            <div v-html="item" class="text-gray3"></div>
          </div>

          <div class="flex items-center ml-4 mt-2">
            <div
              class="uppercase text-sm text-gray3 font-semibold tracking-wide"
            >
              Head to site
            </div>
            <div class="text-[red] ml-2">{{ ">" }}</div>
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
        "Backed by <span class='highlight'>Animoca, Kingsway Capital, Bitkraft</span> among others...",
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

  .pj-name {
    position: relative;

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background: white;
      position: absolute;

      bottom: 0;
      left: 0;
      transform: translateX(-50%);
    }
  }
}
</style>
