import * as React from 'react';
import { Component, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import * as counterActions from '../modules/counter/counterActions';
import {CounterModel} from '../modules/counter/counterModel';

class MainScreen extends Component<any, any> {

  onIncrementPress() {
    let { dispatch } = this.props;
    dispatch(counterActions.increment());
  }

  render() {
    let counter: CounterModel = this.props.counter;

    return (
      <View style={{ flex: 1, padding: 20 }}>

        <Text style={styles.text}>
          <Text style={{ fontWeight: '500' }}>Counter: </Text> {counter.get('count') }
        </Text>

        <TouchableOpacity onPress={ this.onIncrementPress.bind(this) }>
          <Text style={styles.button}>Increment Counter</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue'
  }
});

function mapStateToProps(state: any) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps)(MainScreen);