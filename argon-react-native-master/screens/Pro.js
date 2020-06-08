import React from 'react';
import { View, ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform, Linking, TouchableOpacity} from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import { Table, Row, Rows, TableWrapper, Cell, Col, Cols } from 'react-native-table-component';

const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import MapContainer from "../components/MapContainer";
export default class Pro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Store', 'Price', 'Distance', 'Select'],
      tableData: [
        ['Target', '$10.99', '0.6 miles'],
        ['Ralphs', '$11.69', '0.8 miles'],
        ['Walmart', '$10.05', '1.6 miles'],
        ['Sprouts', '14.99', '1.1 miles'],
        ['Walmart', '$10.05', '1.6 miles'],
        ['Sprouts', '14.99', '1.1 miles']
      ],
      tableDataRow1: 
        ['Target', '$10.99', '0.6 miles'],
      tableDataRow2 :
        ['Ralphs', '$11.69', '0.8 miles'],
      tableDataRow3 : 
        ['Walmart', '$10.05', '1.6 miles'],
      tableDataRow4 : 
        ['Sprouts', '14.99', '1.1 miles'],
      tableDataRow5 : 
        ['Vons', '$10.05', '1.6 miles'],
      tableDataRow6 : 
        ['Jimbos', '14.99', '1.1 miles']
    }
  }

  _alertIndex(index) {
    Alert.alert(`Hi!`);
  }

  render() {
    const { navigation } = this.props;
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View>
          <Text style={styles.text}>Choose</Text>
          </View>
      </TouchableOpacity>
    );
    return (
      <Block flex style={styles.container}>
        <MapContainer />
        <View style={styles.containerTable}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#525F7F', borderRadius: 7}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <TouchableOpacity style={styles.bigButton} onPress={() => navigation.navigate('Elements')}>
          <Row data={state.tableDataRow1} textStyle={styles.text}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigButton}>
          <Row data={state.tableDataRow2} textStyle={styles.text}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigButton}>
          <Row data={state.tableDataRow3} textStyle={styles.text}/>
          </TouchableOpacity>   
          <TouchableOpacity style={styles.bigButton}>
          <Row data={state.tableDataRow4} textStyle={styles.text}/>
          </TouchableOpacity>   
          <TouchableOpacity style={styles.bigButton}>
          <Row data={state.tableDataRow5} textStyle={styles.text}/>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.bigButton}>
          <Row data={state.tableDataRow6} textStyle={styles.text}/>
          </TouchableOpacity>     
    </Table>

{/*<Table borderStyle={{borderWidth: 2, borderColor: '#525F7F', borderRadius: 7}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <TouchableOpacity key={cellIndex} onPress={() => this._alertIndex(index)}>
                      <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                    </TouchableOpacity>
                    ))
                }
              </TableWrapper>
            ))
          }
        </Table>*/}
      </View>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE,
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,
  },
  bigButton: {
    borderRightWidth: 2, 
    borderColor: '#525F7F',
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  containerTable: { flex: 0.5, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: { height: 40, backgroundColor: '#b8ddf2',     borderBottomWidth: 2,},
  text: { margin: 6, fontFamily: 'Montserrat'},
  pro: {
    backgroundColor: argonTheme.COLORS.INFO,
    paddingHorizontal: 8,
    marginLeft: 3,
    borderRadius: 4,
    height: 22,
    marginTop: 15
  },
  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66,
  },
  smallText: {
    lineHeight: 20,
    fontWeight: '400',
    backgroundColor: 'white',
    paddingLeft: 23,
    paddingRight: 23,
    fontSize: 15,
    fontFamily: 'Montserrat',
    marginTop: 20,
    marginBottom: 20,
    color: 'black'
  },
});
