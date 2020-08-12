import { gregToDeka } from '@sepbit/dekajs'
import months from './months.js'

const getDate = function () {
  const date = new Date()

  const gregDate = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  }

  const dekajsDate = gregToDeka(gregDate.year, gregDate.month, gregDate.day).split('-')

  return {
    year: dekajsDate[0],
    month: dekajsDate[1],
    day: dekajsDate[2]
  }
}

const dekatrianMonthName = function (month) {
  return months[month - 1]
}

export default {
  date () {
    const dekajsDate = getDate()
    const dekaDate = dekajsDate

    if (dekajsDate.month === '0') {
      if (dekajsDate.day === '1') { dekaDate.dayName = 'Achronian' } else if (dekajsDate.day === '2') { dekaDate.dayName = 'Sinchronian' }
    } else {
      dekaDate.monthName = dekatrianMonthName(dekaDate.month)
    }

    return dekaDate
  }
}
