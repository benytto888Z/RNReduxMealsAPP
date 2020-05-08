import React from "react";
import {Platform,Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FiltersScreen from "../screens/FiltersScreen";


const defaultStackNavOptions = {
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? Colors.primaryColor: ''
        },
        headerTitleStyle:{
            fontFamily:'open-sans-bold'
        },
        headerBackTitleStyle:{
            fontFamily:'open-sans'
        },
        headerTintColor: Platform.OS === 'android' ?'white':Colors.primaryColor
};


//------------------------------------------------------------MealsStackNavigator

const MealsStackNavigator = createStackNavigator(
    {
        Categories:{
            screen: CategoriesScreen,
        },

        CategoryMeals: {
            screen: CategoryMealsScreen
        },
        MealDetail: MealDetailScreen,
        }, {
        // initialRouteName: 'Categories',  // par défaut il y est
        //mode:'modal', // apparition d ecran du bas vers le haut ou du haut en bas sur android
        defaultNavigationOptions: defaultStackNavOptions
    }
);

//-----------------------------------------------------------FavStacknavigator

const FavStacknavigator= createStackNavigator({
    Favorites:{
        screen:FavoritesScreen,
    },
    MealDetail:MealDetailScreen
},
   {
       defaultNavigationOptions: defaultStackNavOptions
   }
);

//-------------------------------------------------FilterStackNavigator
//only use a stack navigator here so they also have a header there; and for no other reason.

const FilterStackNavigator = createStackNavigator({
    Filters:FiltersScreen
},{
    // navigationOptions:{
    //     drawerLabel:'Filtrer'
    // },
        defaultNavigationOptions: defaultStackNavOptions
}

);

//----------------------------------------------------------MealsFavTabNavigator  //the tabnavigator is above the stacknavigator in the hierarchy
const tabScreenConfig= {
    Meals: {
        screen: MealsStackNavigator,
        navigationOptions: {
            tabBarLabel:  Platform.OS === 'android'
                ? <Text style={{fontFamily:'open-sans-bold'}}> Spéc & Categ</Text> : 'Spéc & Categ'  ,
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor:Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavStacknavigator,
        navigationOptions: {
            tabBarLabel: Platform.OS === 'android'
                ? <Text style={{fontFamily:'open-sans-bold'}}> Coups de cœur</Text> : 'Coups de cœur'  ,
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-heart' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor:Colors.accentColor
        }
    }
};

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig,{
        activeColor:'white',
        shifting:false,
        barStyle:{
            backgroundColor:Colors.primary
        }
    })
    : createBottomTabNavigator(
        tabScreenConfig,
        {
        tabBarOptions:{
        labelStyle:{
            fontFamily:'open-sans'
        },
        activeTintColor:Colors.accentColor
    }
});

//---------------------------------------------------MainDrawerNavigator   // the drawer navigator is above the tabnavigator in the hierarchy

const MainDrawerNavigator=createDrawerNavigator({
    MealsFavTabs :{
        screen:MealsFavTabNavigator,
        navigationOptions:{
            drawerLabel:'Accueil'},
        },
    Filters:{
        screen:FilterStackNavigator,
        navigationOptions:{
            drawerLabel:'Filtres des Plats'
         },
        }
},{
        contentOptions:{
            activeTintColor:Colors.accentColor,
            labelStyle:{
                fontFamily:'open-sans-bold'
            }
        }
});

export default  createAppContainer(MainDrawerNavigator);