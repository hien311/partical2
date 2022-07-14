<template>
  <div
    id="media"
    class="w-[100vw] h-[100vh] relative flex flex-col justify-between items-center"
  >
    <div
      class="media-title flex justify-center items-center text-[80px] font-extrabold tracking-[6px] text-[red] pt-10"
    >
      <div class="mr-5">{{ "<" }}</div>
      <div class="uppercase text-stroke" style="--width: 3.5px">Media</div>
    </div>

    <div class="center-all w-[460px] pt-20">
      <img :src="img" alt="coin" class="w-full" />
    </div>

    <div class="flex gap-20 justify-between pb-20">
      <div v-for="(item, index) in list" :key="index" class="text-[28px]">
        <div class="flex">
          <div class="text-[red] mr-2 leading-[34px]">{{ "<" }}</div>
          <div>
            <div
              class="text-white font-bold leading-[34px]"
              v-html="item.title"
            ></div>
            <div class="text-gray3 text-lg mt-[2px]">{{ item.des }}</div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3">
        <div
          class="col-span-1 w-14 flex justify-center items-center"
          v-for="item in 6"
          :key="item"
        >
          <div
            class="bg-gray3 rounded-full w-8 h-8 flex justify-center items-center text-white cursor-pointer hover:bg-[red]"
          >
            O
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Media",
  props: {
    img: {
      default:
        "https://coin68.com/wp-content/uploads/2022/03/Coin68_logo-1.png",
    },
  },
  data() {
    return {
      list: [
        {
          title: "5M",
          des: "Monthly traffic",
        },
        {
          title: "1.7M",
          des: "Monthly Users",
        },
        {
          title: "Top 1 <br/> Blockchain <br/> Media",
          des: "in Vietnam",
        },
        {
          title: "Top 1 <br> biggest <br> Finance Media",
          des: "in Vietnam",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#media {
  .media-title {
    position: relative;

    &::after {
      content: "";
      width: 70%;
      height: 2px;
      background: white;

      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateX(40%);
    }
  }
}
</style>
