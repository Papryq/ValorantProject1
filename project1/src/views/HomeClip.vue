<template>
    <TheNavbar />
    <div v-for="clip in clips" :clip="clip" v-show="this.$route.href === clip.name">
            <h3>{{ clip.id }}</h3>
            <p>{{ clip.name }}</p>
            <video controls width="800" height="600" loop="">
                <source :src="require(`@/assets/video/${clip.path}`)" type="video/mp4" >
                <source  :src="require(`@/assets/video/${clip.path}`)" type="video/ogg">
            </video> 
    </div>
</template>

<script>
export default {
    name: 'HomeClip',

    data() {
    return {
      clips: [
          {
            id: '1',
            name: '/clip1',
            path: '1.mp4'
          },
          {
            id: '2',
            name: '/clip2',
            path: '2.mp4'
          },
                    {
            id: '3',
            name: '/clip3',
            path: '3.mp4'
          },
          {
            id: '4',
            name: '/clip4',
            path: '4.mp4'
          }
        ]
    }
  },
}
</script>

<style>
body {
    background: black;
}

h3, p {
    display: flex;
    justify-content: center;
    color: white;
}
video {
    display: block;
    margin: auto;
}

</style>