import React,{useState,useEffect,useCallback} from 'react';
import { StyleSheet, Text, View,Switch,Platform } from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import {setFilters} from '../store/actions/meals';

import {useDispatch} from 'react-redux';

const FilterSwitch = props=>{
    return(
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{true:Colors.primaryColor}}
                thumColor= {Platform.OS === 'android' ? Colors.primaryColor : ''}
                value={props.state}
                onValueChange={props.onChange}/>
        </View>
    )
}


const FiltersScreen=props=> {

    const {navigation}=props;

    const [isGlutenFree,setIsGlutenFree]=useState(false);
    const [isLactoseFree,setIsLactoseFree]=useState(false);
    const [isVegan,setIsVegan]=useState(false);
    const [isVegetarian,setIsVegetarian]=useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(()=>{ // pour assurer que seul le changement d'état de saveFilters est pris en compte dans useEffect on utilise useCallback.
        const appliedFilters = {
            glutenFree:isGlutenFree,
            lactoseFree:isLactoseFree,
            vegan:isVegan,
            vegetarian:isVegetarian
        }

        dispatch(setFilters(appliedFilters));
    },[isGlutenFree,isVegetarian,isVegan,isLactoseFree,dispatch]);

    useEffect(()=>{
        navigation.setParams({save:saveFilters}) //setParams causes the component to rebuild because its props (the navigation prop) change
    },[saveFilters]); // we have avoid to put "navigation" in this array because of infinite loop.instead we use callback above

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filtres Disponibles / Restrictions</Text>
            <FilterSwitch label='Sans Gluten' state={isGlutenFree} onChange={newValue=>setIsGlutenFree(newValue)}/>
            <FilterSwitch label='Sans Lactose' state={isLactoseFree} onChange={newValue=>setIsLactoseFree(newValue)}/>
            <FilterSwitch label='Végétalien' state={isVegan} onChange={newValue=>setIsVegan(newValue)}/>
            <FilterSwitch label='Végétarien' state={isVegetarian} onChange={newValue=>setIsVegetarian(newValue)}/>
        </View>
    );
};

/*
FiltersScreen.navigationOptions={
   headerTitle:'Filtrer les plats'
}
*/

FiltersScreen.navigationOptions =(navigationData)=>{
    return{
        headerTitle: 'Filtrer les Plats',
        headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu'
                  onPress={()=>{
                      navigationData.navigation.toggleDrawer();
                  }}/>
        </HeaderButtons>,
    headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Save' iconName='ios-save'
              onPress={
                 navigationData.navigation.getParam('save')
              }/>
    </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:14,
        margin:20,
        textAlign:'center'
    },
    filterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width:'80%',
        marginVertical:15
    }
});

export default FiltersScreen;