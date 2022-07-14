<script setup>
import Media from "./components/Media.vue";
import Ambition from "./components/Ambition.vue";
import HightLightPJ from "./components/HightLightPJ.vue";
import OurPillars from "./components/OutPillars.vue";
import Incubation from "./components/Incubation.vue";
import Nurture from "./components/Nurture.vue";
import Network from "./components/Network.vue";
import WeAre from "./components/WeAre.vue";
components: {
  Media,
    Ambition,
    HightLightPJ,
    OurPillars,
    Incubation,
    Network,
    Nurture,
    WeAre;
}
</script>

<template>
  <Ambition />
  <Network />
  <Incubation />
  <OurPillars />
  <Nurture />
  <WeAre />
  <Media />
  <HightLightPJ />
</template>
