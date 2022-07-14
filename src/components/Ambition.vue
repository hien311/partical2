<template>
  <div class="text-center">
    <div class="uppercase flex justify-center items-center">
      <div class="text-[red] text-large mr-4">{{ "<" }}</div>
      <div class="text-stroke text-large font-extrabold tracking-[8px]">
        Ambition
      </div>
    </div>
    <div class="ambition-content text-gray3 text-xl">
      <div>
        To
        <span class="highlight"
          >magnify the network effect of crypto adoption</span
        >
        from Vietnam, the <br />
        most dynamic market to the world.
      </div>
      <div>
        Vietnam has leapfrogged the Internet era to be a pioneer in blockchain
        <br />
        applications <span class="highlight">from DeFi to GameFi</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ambition",
};
</script>

<style lang="scss">
.ambition-content {
  position: relative;
  width: fit-content;
  margin: auto;
  margin-top: 50px;
  padding: 14px 0;

  &::after,
  &::before {
    content: "";
    position: absolute;

    width: 100px;
    height: 1px;

    background: white;
  }

  &::before {
    top: 0;
    left: 30px;
  }

  &::after {
    bottom: 0;
    right: 120px;
  }
}
</style>
