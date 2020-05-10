import React from 'react';
import {View,StyleSheet} from 'react-native';
import MealList from "../components/MealList";
import {useSelector} from 'react-redux';

import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from '../components/DefaultText';



const FavoritesScreen=props=> {
    const favMeals = useSelector(state=>state.meals.favoriteMeals);

    //const favMeals = MEALS.filter(meal=>meal.id ==='m1' || meal.id==='m2'); // c etais un jeu d essais
    
    // si il y a pas encore de plat favoris
    if(favMeals.length === 0 || !favMeals){
        return (
            <View style={styles.content}>
                <DefaultText>Vous n'avez pas encore de plat favoris</DefaultText>
            </View>
        )
    }



    return (
       <MealList listData={favMeals} navigation={props.navigation}/>
    );
};

FavoritesScreen.navigationOptions =(navigationData)=>{
    return{
        headerTitle: 'Mes coups de cœur',
        headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu'
                  onPress={()=>{
                      navigationData.navigation.toggleDrawer();
                  }}/>
        </HeaderButtons>}
};

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default FavoritesScreen;