<template>
  <div class="bg">
    <div class="container">
      <div class="row justify-content-center align-items-end">
        <div class="col-8 col-md-6">
          <div class="text">
            <h1>Lake Show Squad</h1>
            <p>17x Champions, get to know your Lakers team.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
};
</script>
<style scoped>
.bg {
  background-image: url("https://wallpapers.com/images/file/rough-texture-la-lakers-background-ni0sa1xje9ca7ae5.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
}
.bg .text {
  text-align: center;
  color: white;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 200%;
  margin-bottom: 30%;
  text-shadow: 2px 3px 5px #000000;
  font-size: 20px;
}
.bg .container {
  height: 100%;
}
.bg .container > .row {
  height: 100%;
}
@media (max-width: 450px) {
  .bg {
    background-image: url("https://wallpapers.com/images/file/rough-texture-la-lakers-background-ni0sa1xje9ca7ae5.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;
    width: 100%;
  }
  .bg .text {
    font-size: 14px;
    margin-bottom: 30%;
  }
}
@media (max-width: 820px) {
  .bg {
    background-image: url("https://wallpapers.com/images/file/rough-texture-la-lakers-background-ni0sa1xje9ca7ae5.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 70vh;
    width: 100%;
  }
  .bg .text {
    font-size: 14px;
    margin-bottom: 30%;
  }
}
</style>
