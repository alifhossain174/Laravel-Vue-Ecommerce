<template>
  <div id="public_master">
    <public-header></public-header>

        <router-view></router-view>

    <public-footer></public-footer>
  </div>
</template>

<script>
import PublicHeader from "../public/inc/PublicHeader";
import PublicFooter from "../public/inc/PublicFooter";
export default {
  name: "PublicMaster",
  components: {
    PublicHeader,
    PublicFooter
  },
};
</script>
