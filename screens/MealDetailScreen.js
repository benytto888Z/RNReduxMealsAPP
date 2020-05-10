import React ,{useEffect,useCallback} from 'react';
import {ScrollView,Image,StyleSheet, Text, View} from 'react-native';
import {HeaderButtons,Item} from "react-navigation-header-buttons";

import {useSelector,useDispatch} from 'react-redux';

import HeaderButton from  '../components/HeaderButton';
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from '../store/actions/meals';

const ListItem = props=>{
    return  <View style={styles.listItem}>
                <DefaultText>{props.children}</DefaultText>
            </View>
};

//-----------------------------MealDetailScreen


const MealDetailScreen=props=> {
    const mealId = props.navigation.getParam('mealId');
    const availableMeals = useSelector(state=>state.meals.meals);
    const favMeals = useSelector(state=>state.meals.favoriteMeals);
    
    const selectedMeal = availableMeals.find(meal=>meal.id === mealId);
    
    // boolean pour savoir si ce plat fait partir des favoris
      const isFav=favMeals.includes(selectedMeal);
       
    const dispatch = useDispatch();
   // pour les likes
    const toggleFavoriteHandler=useCallback(()=>{
        dispatch(toggleFavorite(mealId));
    },[dispatch,mealId]);

    useEffect(()=>{
        //props.navigation.setParams({mealTitle:selectedMeal.title});
        props.navigation.setParams({toggleFav : toggleFavoriteHandler});
    },[toggleFavoriteHandler])

    useEffect(()=>{
         props.navigation.setParams({isFav:isFav});
    },[isFav]) // si isFav change je dois pouvoir envoyer une nouvelle information aux params
    
   
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
    //const mealId = navigationData.navigation.getParam('mealId');
    //const selectedMeal = MEALS.find(meal=>meal.id === mealId);
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFav=navigationData.navigation.getParam('isFav');
    return {
        headerTitle: mealTitle.length < 25 ? mealTitle: mealTitle.substring(0,22)+"...",
        headerRight: ()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Favoris' iconName= {isFav ? 'ios-heart' : 'ios-heart-empty'}
              onPress={toggleFavorite}/>
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
        fontSize:14,
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