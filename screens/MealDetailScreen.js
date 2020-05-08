import React from 'react';
import {ScrollView,Image,Button, StyleSheet, Text, View} from 'react-native';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import {MEALS} from '../data/dummy-data';

import HeaderButton from  '../components/HeaderButton';
import DefaultText from "../components/DefaultText";

const ListItem = props=>{
    return  <View style={styles.listItem}>
                <DefaultText>{props.children}</DefaultText>
            </View>
};
const MealDetailScreen=props=> {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal=>meal.id === mealId);
    return (
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration} m</DefaultText>
                <DefaultText>{selectedMeal.complexity}</DefaultText>
                <DefaultText>{selectedMeal.affordability}</DefaultText>
            </View>
            <Text style={styles.title}>Ingrédients</Text>
            {selectedMeal.ingredients.map(ingredient=><ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Etapes de préparation</Text>
            {selectedMeal.steps.map(step=><ListItem key={step}>{step}</ListItem>)}

        </ScrollView>

    );
};


//------------------MealDetailScreen.navigationOptions

MealDetailScreen.navigationOptions =(navigationData)=>{
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal=>meal.id === mealId);
    return {
        headerTitle:selectedMeal.title,
        headerRight: ()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Favoris' iconName='ios-heart'
              onPress={()=>{
                  console.log('Marquer comme favoris')
              }}/>
        </HeaderButtons>
    }
}
const styles = StyleSheet.create({

    details:{
        flexDirection:'row',
        padding:15,
        justifyContent: 'space-around'
    },

    image:{
        width:'100%',
        height:200,
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:18,
        textAlign:'center'
    },
    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1,
        padding:10

    }
});

export default MealDetailScreen;