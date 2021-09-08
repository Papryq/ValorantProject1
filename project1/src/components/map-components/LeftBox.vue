<template>
    <!--LeftBox-->
        <div class="col-xl-2 col-12">
            <div class="left-box p-4 my-4">
                <h1 class="text-white mx-4-md">Best Agents</h1>
                <div class="my-4 ">
                    <p class="lead text-danger">&nbsp;- Bad</p>
                    <p class="lead text-danger">&nbsp;- Bad</p>
                    <p class="lead text-danger">&nbsp;- Bad</p>
                    <p class="lead text-success">&nbsp;+ Good</p>
                    <p class="lead text-success">&nbsp;+ Good</p>
                    <p class="lead text-success">&nbsp;+ Good</p>
                    <p class="lead text-success">&nbsp;+ Good</p>
                    </div>
               </div>
            </div>
</template>

<script>
export default {
    name: 'LeftBox',
}
</script>

<style scoped>
    .left-box {
        background-color: #212529;
        border-radius: 5%;
        font-family: "Heebo", sans-serif;
    }
</style>