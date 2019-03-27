import React from 'react'
import { AppRegistry, StyleSheet, Text, View, FlatList, Image, TouchableOpacity,ImageBackground } from 'react-native';

import Swiper from 'react-native-swiper';

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

  _itemPressed(){
    alert("pressed")
  }

  render() {
    return (
      <TouchableOpacity style={styles.item_container} onPress={this._itemPressed}>
          <ImageBackground style={styles.item_img}
            source={{ uri: this.props.chatIcon }} >
            
              <ImageBackground style={{height:14,position:"absolute",bottom:0,left:0,right:0}} source={require("../../image/chatting_item_list_bg.png")}>
                <Text style={{fontSize:10,color:"#ffffff",textAlignVertical:"center"}}>{this.props.chatOnlineNum}人在线</Text>
              </ImageBackground>
            </ImageBackground>
          <Text style={styles.item_title_text}>{this.props.chatName}</Text>

          <Text style={styles.item_content_text}>{this.props.chatHostNick}</Text>

      </TouchableOpacity>

    )
  }
}


let data = require('../../test/homeData.json');

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title_text}>小邂逅</Text>
        <FlatList
          ListHeaderComponent={<Head />}
          data={data.data.list}
          numColumns={2}
          renderItem={
            ({ item }) =>
              <Item chatIcon={item.chat_room_icon} chatName={item.chat_room_name} chatHostNick={item.chat_host_nick} chatOnlineNum={item.chat_online_num}/>
          }
        />
      </View>
    );
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
    flex: 1,
    alignItems:"flex-start",
  },

  item_img: {
    width: 165,
    height: 165,

  },
  item_title_text: {
    flex:1,
    color: '#222222',
    fontSize: 12,
    marginTop: 8,
    justifyContent:"flex-start",
    textAlignVertical: 'center',
  },
  item_content_text: {
    flex:1,
    color: '#aaaaaa',
    fontSize: 10,
    marginTop: 4,
    justifyContent:"flex-start",
    marginBottom:8,
    textAlignVertical: 'center',
  },
})