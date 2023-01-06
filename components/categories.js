import { ScrollView, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingRight: 20
      }}
    >
      <CategoryCard title="Sea Food" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard
        title="Burger"
        imgUrl="https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg"
      />

      <CategoryCard title="Sea Food" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Sea Food" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Sea Food" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Sea Food" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Sea Food" imgUrl="https://links.papareact.com/gn7" />
    </ScrollView>
  );
}

export default Categories