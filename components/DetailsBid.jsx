import { View, Text, Image } from 'react-native'
import React from 'react'

import { EThPrice } from './SubInfo'
import {COLORS, SIZES, FONTS} from '../constants'

const DetailsBid = ({bid}) => {
  return (
    <View style={{
        width:'100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center', 
        marginVertical:SIZES.base * 2, paddingHorizontal: SIZES.base * 2,
      }}>

      <Image source={bid.image}  resizeMode='contain' style={{width: 48, height:48}}></Image>
    
    <View>
      <Text style={{fontFamily: SIZES.semiBold, fontSize:SIZES.small, color: COLORS.primary}}>Bid placed by {bid.name}</Text>
      <Text style={{fontFamily: SIZES.regular, fontSize:SIZES.small - 2, color: COLORS.secondary}}>{bid.date}</Text>
    </View>


    <EThPrice price={bid.price}/>
    </View>
  )
}

export default DetailsBid