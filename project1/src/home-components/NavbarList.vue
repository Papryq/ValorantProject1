<template>


    <div class="collapse navbar-collapse" id="navmenu">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle btn-grad" href="#maps" role="button" id="dropdownMenuLink" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Maps</a>
                      <div  class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <router-link  class="dropdown-item" to='/maps/bind'>Bind</router-link>
                        <router-link class="dropdown-item" to='/maps/haven'>Haven</router-link>
                        <router-link class="dropdown-item" to='/maps/split'>Split</router-link>
                        <router-link class="dropdown-item" to='/maps/ascent'>Ascent</router-link>
                        <router-link class="dropdown-item" to='/maps/icebox'>Icebox</router-link>
                        <router-link class="dropdown-item" to='/maps/breeze'>Breeze</router-link>
                      </div>
                  </div>
                </li>
              </ul>
            </div>
</template>

<script>

export default {
  name: 'NavbarList',
  data() {
    return {
      mapList: []
    }
  },

  created() {
    this.mapList = [
      {
        id: '1',
        name: 'bind'
      },

      {
        id: '2',
        name: 'haven'
      },

      {
        id: '3',
        name: 'split'
      },

      {
        id: '4',
        name: 'ascent'
      },

      {
        id: '5',
        name: 'icebox'
      },

      {
        id: '6',
        name: 'breeze'
      },
    ]
  }
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

