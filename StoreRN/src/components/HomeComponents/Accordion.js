import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const Accordion = ({order}) => {
  return (
    <Collapse style={styles.accordion}>
      <CollapseHeader>
        <View style={styles.header}>
          <Text>Order</Text>
          <Icon name="down" color="gray" size={25} />
        </View>
      </CollapseHeader>
      <CollapseBody>
        <View style={styles.body}>
          <Text>{order.Total}</Text>
        </View>
      </CollapseBody>
    </Collapse>
  );
};
const styles = StyleSheet.create({
  accordion: {
    height: 50,
    elevation: 4,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  body: {
    padding: 20,
    borderColor: 'red',
    borderWidth: 1
  },
});
export default Accordion;
