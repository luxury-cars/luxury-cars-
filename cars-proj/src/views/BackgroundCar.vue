<template>
    <div  class="top-div">
      <video  autoplay loop muted>
        <source src="../assets/car-72541.mp4" type="video/mp4">
      </video>
   
    </div>
    
  </template>





<style>
.top-div {
  position: relative;
  height: 450px;
  background: #000;
}

.top-div video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>