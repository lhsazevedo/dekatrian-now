<script setup>
import { ref, onBeforeUnmount } from 'vue'
import dekatrian from './dekatrian'

const date = ref({})

const updateDate = () => {
  date.value = dekatrian.date()
}
updateDate()

const interval = setInterval(updateDate, 1000)

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <div>
    <div
      v-if="date.dayName"
      class="date dayname"
    >
      {{ date.dayName }}
    </div>
    <template v-else>
      <div class="date day">
        {{ date.day }}
      </div>
      <div class="date month">
        {{ date.monthName }}
      </div>
    </template>
    <div class="year">
      {{ date.year.split('').join(' ') }}
    </div>
  </div>
</template>

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
