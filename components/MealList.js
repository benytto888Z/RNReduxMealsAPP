import React from 'react';
import {StyleSheet,View,FlatList} from 'react-native';
import MealItem from "./MealItem";

import {useSelector} from 'react-redux';


const MealList = props=>{
    const favMeals=useSelector(state=>state.meals.favoriteMeals);

    const renderMealItem = itemData=>{
        const isFavorite = favMeals.some(meal=>meal.id === itemData.item.id);
        return(
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                image={itemData.item.imageUrl}
                complexity={itemData.item.complexity.toUpperCase()}
                affordability={itemData.item.affordability.toUpperCase()}
                onSelectMeal={()=>{props.navigation.navigate({routeName:'MealDetail',
                params:{
                    mealId:itemData.item.id,
                    mealTitle:itemData.item.title,
                    isFav:isFavorite
                }})}}
            />
        );
    };

  return  <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item,index)=>item.id}
                renderItem={renderMealItem}
                style={{width:'90%'}}
            />
        </View>
};

const styles = StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default MealList;