import {StyleSheet, Dimensions} from 'react-native'

const { heigh, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#212733', // 282828
    // justifyContent: 'center'
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#39414f',
    margin: 4,
    width: width - 25,
    borderRadius: 13,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  input: {
    textAlignVertical: 'top',
    padding: 20,
    fontSize: 24,
    color: '#dedee0'
  },
  inputDesc: {
    textAlignVertical: 'top',
    paddingTop: 20,
    padding: 20,
    fontSize: 18,
    color: "#dedee0"
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemText: {
    flex: 1,
    fontSize: 25,
    paddingLeft: 10,
    color: '#dedee0'
  },
  button: {
    fontSize: 25,
    padding: 20,
    textAlign: 'center',
    color: '#fff'
  },
  cardButton: {
    backgroundColor: '#2b3242',
    margin: 6,
    width: width - 25,
    borderRadius: 13,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  cardButtonDelete: {
    backgroundColor: '#f44259',
    margin: 6,
    width: width - 25,
    borderRadius: 13,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
})