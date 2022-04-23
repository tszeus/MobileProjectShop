import React from 'react';
import { View,StyleSheet, Text,TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

function ShippingItem({item,isSelected,setCurrenIdShipping}) {
  const handleOnPress = () => {
  setCurrenIdShipping(item._id)
  }
  return (
  <TouchableOpacity onPress={() => handleOnPress()} style={[styles.container,{borderColor:isSelected ?'#40BFFF' : '#EBF0FF' }]}>
     <Text style={styles.name}>{item.name}</Text>
     <Text numberOfLines={3} style={styles.text}>{item.address}</Text>
     <Text  style={styles.text}>{item.phoneNumber}</Text>
     <View style={styles.action}>
       <TouchableOpacity style={styles.buttonAction}>
         <Text style={{color:'white',textAlign:'center'}}>Edit</Text>
       </TouchableOpacity>
       <Icon style={styles.iconDelete} name="trash" size={24} color="#9098B1" />
     </View>
   </TouchableOpacity>
  );
}

export default ShippingItem;
const styles = StyleSheet.create({
  container:{
    width:343,
    height:240,
    borderWidth:1,
    borderRadius:5,
    marginBottom:20,
    padding:20
  },
  name:{
    fontSize:14,
    fontWeight:'bold',
    color:'#223263',
    marginBottom:20
  },
  text:{
    color:'#9098B1',
    fontSize:12,
    marginBottom:20
  },
  action:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  buttonAction:{
    width:77,
    height:57,
    borderRadius:5,
    backgroundColor:'#40BFFF',
    justifyContent:'center',
    marginRight:20
  }
})