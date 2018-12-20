import React from 'react';
import { View } from 'react-native';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { white } from './colors';

export function isBetween(num, x, y) {
  if (num >= x && num <= y) {
    return true
  }

  return false
}

export function calculateDirection(heading) {
  let direction = ''

  if (isBetween(heading, 0, 22.5)) {
    direction = 'North'
  } else if (isBetween(heading, 22.5, 67.5)) {
    direction = 'North East'
  } else if (isBetween(heading, 67.5, 112.5)) {
    direction = 'East'
  } else if (isBetween(heading, 112.5, 157.5)) {
    direction = 'South East'
  } else if (isBetween(heading, 157.5, 202.5)) {
    direction = 'South'
  } else if (isBetween(heading, 202.5, 247.5)) {
    direction = 'South West'
  } else if (isBetween(heading, 247.5, 292.5)) {
    direction = 'West'
  } else if (isBetween(heading, 292.5, 337.5)) {
    direction = 'North West'
  } else if (isBetween(heading, 337.5, 360)) {
    direction = 'North'
  } else {
    direction = 'Calculating'
  }

  return direction
}

export function timeToString(time = Date.now()) {
  const date = new Date(time)
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return todayUTC.toISOString().split('T')[0]
}

export function getMetricMetainfo(metric) {
  const info = {
    run: {
      displayName: 'Run',
      max: 50,
      unit: 'miles',
      step: 1,
      type: 'steppers',
      getIcon() {
        return (
              <MaterialIcons
                name='directions-run'
                color={'black'}
                size={35}
              />
            )
      }
    },
    bike: {
      displayName: 'Bike',
      max: 100,
      unit: 'miles',
      step: 1,
      type: 'steppers',
      getIcon() {
        return (
              <MaterialCommunityIcons
                name='bike'
                color={'black'}
                size={35}
              />
            )
      }
    },
    swim: {
      displayName: 'Swim',
      max: 9900,
      unit: 'meters',
      step: 100,
      type: 'steppers',
      getIcon() {
        return (
              <MaterialCommunityIcons
                name='swim'
                color={'black'}
                size={35}
              />
            )
      }
    },
    sleep: {
      displayName: 'Sleep',
      max: 24,
      unit: 'hours',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
              <FontAwesome
                name='bed'
                color={'black'}
                size={35}
              />
            )
      }
    },
    eat: {
      displayName: 'Ear',
      max: 10,
      unit: 'rating',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
              <MaterialCommunityIcons
                name='food'
                color={'black'}
                size={35}
              />
            )
      }
    },
  }

  return typeof metric === 'undefined'
  ? info
  : info[metric]
}

export function getDailyReminderValue () {
  return {
    today: 'U+1F44B Dont forget to log your data today!'
  }
}
