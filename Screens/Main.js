import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  ListView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CardButton from '../Components/CardButton';
import styles from './Styles';
import firebase from '../Storage/firebase';

export default class Main extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
    this.itemsRef = this.getRef().child('value');
  }

  getRef() {
    return firebase.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', snap => {
      if (snap !== null) {
        var items = [];
        snap.forEach(child => {
          items.push({
            title: child.val().title,
            desc: child.val().desc,
            _key: child.key,
          });
          this.setState({
            listData: items,
          });
        });
      }
    });
  }

  componentDidMount = () => {
    this.listenForItems(this.itemsRef);
  };
  save = item => {
    var storageItem = {
      title: item.title,
      desc: item.desc,
    };
    var newPostRef = this.itemsRef.push(storageItem);
    var key = newPostRef.key;
    console.log(key);
    var arr = this.state.listData;
    console.log(arr[arr.length - 1]);

    this.setState({});
  };

  remove = item => {
    this.itemsRef.child(item._key).remove();
  };

  edit = item => {
    console.log(item);
    this.itemsRef.child(item._key).set({
      title: item.title,
      desc: item.desc,
    });
  };

  addItem = data => {
    const arr = [data, ...this.state.listData];
    this.setState({
      listData: arr,
    });
    this.save(data);
  };
  deleteItem = index => {
    const arr = this.state.listData;
    const deleteItem = arr[index];
    this.state.listData.splice(index, 1);
    this.setState({
      listData: [...this.state.listData],
    });
    this.remove(deleteItem);
  };
  editItem = (data, index) => {
    const arr = this.state.listData;
    arr[index] = data;
    this.setState({
      listData: arr,
    });
    this.edit(arr[index]);
  };

  onPressAdd = () => {
    this.props.navigation.navigate('Add', {
      addItem: this.addItem,
    });
  };
  onPressEdit = index => {
    this.props.navigation.navigate('Edit', {
      editItem: this.editItem,
      deleteItem: this.deleteItem,
      data: this.state.listData[index],
      indexNo: index,
    });
  };
  _keyExtractor = (item, index) => item._key;

  renderList = ({ item, index }) => (
    <TouchableOpacity onPress={() => this.onPressEdit(index)}>
      <View style={styles.card}>
        <View style={styles.item}>
          <Text style={[styles.itemText]}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.appTitle}>To Do List</Text>

        <FlatList
          extraData={this.state}
          data={this.state.listData}
          renderItem={this.renderList}
          keyExtractor={this._keyExtractor}
        />

        <CardButton
          name="Add"
          style={styles.cardButton}
          func={this.onPressAdd}
        />

        <View style={{ padding: 10 }} />
      </View>
    );
  }
}
