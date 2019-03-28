import React from 'react'
import { AppRegistry, StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';

import Swiper from 'react-native-swiper';


const screenW = Dimensions.get('window').width;
const width = 165;
const space = (screenW - width * 2) / 3 / 2;

class Head extends React.Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <Swiper showsPagination={false}
          autoplay={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    )
  }
}

class Item extends React.Component {

  _itemPressed() {
    alert("pressed")
  }

  render() {
    return (
      <TouchableOpacity style={styles.item_container} onPress={this._itemPressed}>
        <ImageBackground style={styles.item_img}
          source={{ uri: this.props.chatIcon }} >

          <ImageBackground style={{ height: 14, position: "absolute", bottom: 0, left: 0, right: 0, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
            source={require("../../image/chatting_item_list_bg.png")}>
            <Text style={{ fontSize: 10, color: "#ffffff", textAlignVertical: "center", marginLeft: 6 }}>{this.props.chatOnlineNum}人在线</Text>
          </ImageBackground>
        </ImageBackground>
        <Text style={styles.item_title_text}>{this.props.chatName}</Text>

        <Text style={styles.item_content_text}>{this.props.chatHostNick}</Text>

      </TouchableOpacity>

    )
  }
}


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      data:[],
    }
  }
  componentDidMount(){
    this._loadData();
  }

  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.title_text}>小邂逅</Text>
        <FlatList
          refreshing ={this.state.refreshing}
          onRefresh={this._onRefresh.bind(this)}
          columnWrapperStyle={{ marginLeft: space, marginRight: space }}
          ListHeaderComponent={<Head />}

          data={this.state.data?.data?.list}
          // data={require('../../test/homeData.json').data.list}
          numColumns={2}
          renderItem={
            ({ item }) =>
              <Item chatIcon={item.chat_room_icon} chatName={item.chat_room_name} chatHostNick={item.chat_host_nick} chatOnlineNum={item.chat_online_num} />
          }
        />
      </View>
    );
  }


  _loadData() {
    this.setState({
      data : require('../../test/homeData.json'),
      refreshing : false,
    })
  }

  _onRefresh() {
    if (!this.state.isRefresh) {
      this._loadData();
    }
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  wrapper: {
    height: 160,
    marginBottom: 12,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  title_text: {
    color: '#ea7c7c',
    fontSize: 16,
    height: 48,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold'
  },

  item_container: {
    flex: 0.5,
    flexDirection: "column",
    borderLeftWidth: space,
    borderRightWidth: space,
    borderColor: '#00000000'
  },

  item_img: {
    width: 165,
    height: 165,
    borderRadius: 8,
    alignSelf: "center",
    overflow: 'hidden',
  },
  item_title_text: {
    alignSelf: "flex-start",
    color: '#222222',
    fontSize: 12,
    marginTop: 8,
    textAlign: "left",
    marginLeft: 8,
    textAlignVertical: 'center',
  },
  item_content_text: {
    alignSelf: "flex-start",
    color: '#aaaaaa',
    fontSize: 10,
    marginTop: 4,
    marginLeft: 8,
    marginBottom: 8,
    textAlignVertical: 'center',
  },
})