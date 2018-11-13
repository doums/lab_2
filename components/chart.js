import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import { VictoryBar, VictoryChart, VictoryPolarAxis, VictoryTheme } from 'victory-native'

class Chart extends PureComponent {
  render () {
    const { x, y, z } = this.props
    const point = [
      { x: 1, y: x },
      { x: 2, y: y },
      { x: 3, y: z }
    ]
    return (
      <View style={styles.container}>
        <VictoryChart
          polar
          theme={VictoryTheme.material}
          domain={{ x: [0.5, 3.5], y: [0, 30] }}
        >
          <VictoryPolarAxis
            style={{
              grid: { stroke: 'none' },
              axis: {stroke: 'none'},
              ticks: {stroke: 'none'},
              tickLabels: {display: 'none'}
            }}
            tickLabelComponent={<View/>}
            axisLabelComponent={<View/>}
          />
          <VictoryBar
            data={point}
            labels={['x', 'y', 'z']}
            style={{
              data: { fill: '#ef5350', stroke: '#212121', strokeWidth: 6 },
              labels: { fill: 'white', fontSize: '16' } }}
          />
        </VictoryChart>
      </View>
    )
  }
}

export default Chart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29434e'
  }
})
