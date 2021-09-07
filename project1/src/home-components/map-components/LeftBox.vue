<template>
    <!--LeftBox-->
    <div class="d-sm-flex flex-row">
        <div class="flex-col">
            <div class="left-box my-4">
                <h1 class="text-white mx-4">Best Agents</h1>
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
        padding: 1rem;
        margin-left: 1rem;
        font-family: "Heebo", sans-serif;
    }
</style>