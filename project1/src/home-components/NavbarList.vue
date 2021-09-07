<template>


    <div class="collapse navbar-collapse" id="navmenu">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle btn-grad" href="#maps" role="button" id="dropdownMenuLink" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Maps</a>
                      <div  class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a  class="dropdown-item" href="../Bind/bind.html">Bind</a>
                        <a  class="dropdown-item" href="#haven">Haven</a>
                        <a  class="dropdown-item" href="#split">Split</a>
                        <a  class="dropdown-item" href="../Ascent/ascent.html">Ascent</a>
                        <a  class="dropdown-item" href="#icebox">Icebox</a>
                        <a  class="dropdown-item" href="#breeze">Breeze</a>
                      </div>
                  </div>
                </li>
              </ul>
            </div>
</template>

<script>

export default {
  name: 'NavbarList',
}
</script>

<style scoped>
.btn-grad {background-image: linear-gradient(to right, #343a40 0%, #343a40  51%, #26a0da  100%)}
.btn-grad {
   text-align: center;
   transition: 0.5s;
   background-size: 200% auto;
   border-radius: 10px;
   display: block;
 }

 .btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.dropdown-menu
{
  background-color:#343a40;
}

.dropdown-menu:hover
{
  color: black;
}

.dropdown-item {
  color: white;
}

.dropdown-item:hover {
  background-color: #26a0da;
}

</style>

