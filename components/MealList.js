import React from 'react';
import {StyleSheet,View,FlatList} from 'react-native';
import MealItem from "./MealItem";


const MealList = props=>{

    const renderMealItem = itemData=>{
        return(
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                image={itemData.item.imageUrl}
                complexity={itemData.item.complexity.toUpperCase()}
                affordability={itemData.item.affordability.toUpperCase()}
                onSelectMeal={()=>{props.navigation.navigate('MealDetail',{mealId:itemData.item.id})}}
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