<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-src"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>


<script>
  export default {
    name:'TabBarItem',
    props:{
        path: String,
        activeColor:{
            type: String,
            default: 'red'
        }
    },
    data(){
        return{
            // isActive: true
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path);
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle(){
            return this.isActive ? {color: this.activeColor} : {}
        }
    }
  }
</script>


<style>
</style>