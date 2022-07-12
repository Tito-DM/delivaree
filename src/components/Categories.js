import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
       paddingHorizontal: 15 ,
       paddingTop: 10
      }}
    >
      {/* categories card */}
     
      <CategoryCard title="African " imgUrl={require("../../assets/img/african.jpg")}/>
      <CategoryCard title="Asian" imgUrl={require("../../assets/img/asin_food.jpg")}/>
      <CategoryCard title="Pizza" imgUrl={require("../../assets/img/pizza.jpg")}/>
      <CategoryCard title="burger4" imgUrl={require("../../assets/img/burger.jpg")}/>
      <CategoryCard title="indian" imgUrl={require("../../assets/img/indian.jpg")}/>
      <CategoryCard title="Sea Food" imgUrl={require("../../assets/img/sea.jpg")}/>
      <CategoryCard title="testing" imgUrl={require("../../assets/img/logo.jpg")}/>
      <CategoryCard title="testing" imgUrl={require("../../assets/img/logo.jpg")}/>
      
    </ScrollView>
  )
}

export default Categories