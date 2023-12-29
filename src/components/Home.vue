<template>
  <div class="wrapper" id="app">
    <div class="header-wrapper">
      <Top />
      <Menu />
    </div>
    <div class="page-wrapper">
      <div class="page-content">
        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Top from "./Top.vue";
import Menu from "./Menu.vue";
import "../assets/plugins/fancy-file-uploader/jquery.ui.widget.js";
	// import "../assets/plugins/fancy-file-uploader/jquery.fileupload.js";
	// import "../assets/plugins/fancy-file-uploader/jquery.iframe-transport.js";
	// import "../assets/plugins/fancy-file-uploader/jquery.fancy-fileupload.js";
	import "../assets/plugins/Drag-And-Drop/dist/imageuploadify.min.js";
export default {
  components: {
    Top,
    Menu,
  },
};

</script>
<style>
/* @import "../assets/images/favicon-32x32.png"; */
  /* @import "../assets/plugins/vectormap/jquery-jvectormap-2.0.2.css"; */
  @import "../assets/plugins/simplebar/css/simplebar.css";
  @import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
  @import "../assets/plugins/metismenu/css/metisMenu.min.css";

  @import "../assets/css/pace.min.css";
  /* @import "../assets/js/pace.min.js"; */

  @import "../assets/css/bootstrap.min.css";
  @import "../assets/css/bootstrap-extended.css";
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

  @import "../assets/css/app.css";
  @import "../assets/css/icons.css";

  @import "../assets/css/dark-theme.css";
  @import "../assets/css/semi-dark.css";
  @import "../assets/css/header-colors.css";
</style>
