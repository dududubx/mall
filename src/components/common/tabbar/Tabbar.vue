<template>
  <div id='tab-bar'>
    <slot></slot>
  </div>
</template>


<script>
  export default {
    name: 'TabBar',
  }
</script>


<style>
  #tab-bar{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f6f6f6;
    font-size: 1rem;
    box-shadow: 0 -3px 1px rgba(100,100,100,0.1)
  }
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 3.4286rem;
    cursor: pointer;
  }
  .tab-bar-item img{
    width: 1.7857rem;
    height: 1.7857rem;
    margin-top: .2143rem;
    vertical-align: middle;
  }
</style>