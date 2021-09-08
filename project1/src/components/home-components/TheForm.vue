<template>
          <section class="form">
            <div class="container py-4">
              <div class="row">
                <div class="col-md p-4 my-4 text-left">
                  <h1 class="">Wanna help us?</h1>
                  <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A repellat aliquid autem eius molestiae, mollitia quibusdam voluptatem dolore velit consequuntur.</p>
                </div>
                <div class="col-md">
                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">Topic</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">Description</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="d-flex justify-content-between py-2 my-2">
                        <div class="form-group">
                           <input type="file" class="form-control-sm" id="exampleFormControlFile1">
                        </div>
                        <button type="submit" class="btn btn-primary mx-2">Submit</button>
                    </div>
                   </form>
                </div>
              </div>
            </div>
          </section>
</template>

<script>

export default {
    name: 'TheForm',
}

</script>

<style scoped>
    .form
{
  color: white;
  background: #131416;
}

</style>