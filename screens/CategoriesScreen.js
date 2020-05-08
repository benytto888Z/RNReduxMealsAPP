import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Platform} from 'react-native';
import CategoryGridTile from "../components/CategoryGridTile";
import {CATEGORIES} from "../data/dummy-data";
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";



const CategoriesScreen=props=> {
    const renderGridItem = (itemData)=>{
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={()=>{
                props.navigation.navigate('CategoryMeals',{categoryId:itemData.item.id})
             }}
            />
        )
    };
    return (
       <FlatList numColumns={2}
       keyExtractor={(item,index)=>item.id}
       data={CATEGORIES}
        renderItem={renderGridItem}
       />
    );
};

CategoriesScreen.navigationOptions =(navigationData)=>{
    return{
    headerTitle: 'Catégories et Spécialités',
    headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu'
              onPress={()=>{
                  navigationData.navigation.toggleDrawer();
              }}/>
    </HeaderButtons>}
};

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
}
});

export default CategoriesScreen;