import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const CategoryMealsScreen=props=> {
    return (
        <View style={styles.screen}>
            <Text>Recette de ce plat</Text>
            <Button title='aller' onPress={()=>{props.navigation.navigate(
                {routeName:'MealDetail'}
            )}}/>
            <Button title="Retour" onPress={()=>props.navigation.pop()}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default CategoryMealsScreen;