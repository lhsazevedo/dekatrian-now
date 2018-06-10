<template>
  <div id="app">
    <div class="wrapper">
      <div class="day">{{day}}</div>
      <div class="month">{{month}}</div>
    </div>
  </div>
</template>

<script>
import dekajs from "vitorteccom-dekajs"

const meses = [
  'Auroran',
  'Borean',
  'Coronian',
  'Driadan',
  'Electran',
  'Faian',
  'Gaian',
  'Hermetian',
  'Irisian',
  'Kaosian',
  'Lunan',
  'Maian',
  'Nixan'
]
 
export default {
  name: 'app',
  data () {
    return {
      date: ["", "", ""]
    }
  },

  computed: {
    day: (self) => self.date[0],
    month: (self) => self.date[1],
    year: (self) => self.date[2]
  },

  methods: {
    updateDate: function() {
      const date = new Date

      const year = date.getFullYear()
      const month = date.getMonth()+1
      const day = date.getDate()

      dekajs.gregToDeka(year, month, day)
        .split('-')
        .reverse()
        .map( (v, i) => {
          this.$set(this.date, i, (i==1) ? meses[v-1] : v)
        })
    }
  },

  created: function () {
    this.updateDate()
    setInterval(this.updateDate, 1000)
  }
}
</script>

<style>

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
}

.day {
  font-size: 50vmin;
  line-height: 80%;
  font-weight: bold;
}

.month {
  font-size: 20vmin;
}

</style>
