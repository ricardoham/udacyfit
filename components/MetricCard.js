import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DateHeader from './DateHeader';
import { getMetricMetainfo } from '../utils/helpers';
import { gray } from '../utils/colors';

export default function MetricCard ({ date, metrics }) {
  return (
    <View>
      {date && <DateHeader date={date} />}
      {Object.keys(metrics).map((metric) => {
        const { getIcon, displayName, unit, backgroundColor } = getMetricMetainfo(metric)

        return (
          <View style={style.metric} key={metric}>
            {getIcon()}
            <View>
              <Text style={{fontSize: 20}}>
                {displayName}
              </Text>
              <Text style={{fontSize: 16, color: gray}}>
                {metrics[metric]} {unit}
              </Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  metric: {
    flexDirection: 'row',
    marginTop: 12,
  }
})
