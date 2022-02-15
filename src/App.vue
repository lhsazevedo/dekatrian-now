<template>
  <div id="app">
    <div class="wrapper">
      <div
        v-if="date.dayName"
        class="date dayname"
      >
        {{ date.dayName }}
      </div>
      <div v-else>
        <div class="date day">
          {{ date.day }}
        </div>
        <div class="date month">
          {{ date.monthName }}
        </div>
      </div>
      <div class="year">
        {{ date.year.split('').join(' ') }}
      </div>
    </div>
  </div>
</template>

<script>
import dekatrian from './utils/dekatrian'

export default {
  name: 'App',
  data () {
    return {
      date: {},
      inverval: null
    }
  },

  created: function () {
    this.updateDate()
    this.interval = setInterval(this.updateDate, 1000)
  },

  destroyed: function () {
    clearInterval(this.interval)
  },

  methods: {
    updateDate: function () {
      this.date = dekatrian.date()
    }
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
  font-weight: bold;
  line-height: .8em;
}

.month {
  font-size: 20vmin;
  line-height: 1em;
}

.dayname {
  font-size: 15vmin;
  line-height: 1em;
}

.year {
  font-size: 10vmin;
}

</style>
