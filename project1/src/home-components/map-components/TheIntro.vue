<template>
    <!--Intro, Animation-->
   <div class="intro">
        <h1 class="hide">
            <div class="text">Ascent</div>
        </h1>
    </div> 
</template>

<script>
export default {
    name: 'TheIntro'
}
</script>

<style scoped>
    .intro {
        background: url('./../../assets/ascent.png');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hide div {
        transform: translateY(100%);
        display: inline-block;
    }

    .text {
        position: absolute;
        top: 50px;
        left: 750px;
        font-size: 7rem;
        color: rgb(22, 20, 20);
        text-shadow: 3px 3px 1px #212529;
        font-family: "Heebo", sans-serif;
    }
</style>