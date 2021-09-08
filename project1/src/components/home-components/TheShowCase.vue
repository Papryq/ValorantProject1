<template>
              <section class=" text-light p-5 my-2">
            <div class="container">
               <div class="d-sm-flex justify-content-between">
                  <img class="img-fluid w-50 d-none d-sm-block omenAnimation" src="@/assets/photo1.png" alt="">
                      <div class="text-center my-3">
                         <h1>Pamiętaj, że <span id="show" class="text-warning">przystojniakiem, nie zmieniaj się</span></h1>
                         <p class="lead my-3 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem explicabo voluptatibus voluptatum officia quaerat architecto esse nesciunt tempore deserunt animi, perferendis, similique qui? Nobis ex quod in doloribus voluptatibus voluptates! </p>
                      </div>
                </div>
            </div>
          </section>
</template>

<script>

export default {
   name: 'TheShowCase',
}

</script>

<style scoped>
.omenAnimation
{
  animation: fadeIn 7s;
}

@keyframes fadeIn{
  from { opacity: 0};
  to { opacity: 1};
}
</style>