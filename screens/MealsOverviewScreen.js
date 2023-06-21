import { useLayoutEffect } from "react";
import MealItem from "../components/MealsList/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, FlatList, StyleSheet, Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
function MealsOverviewScreen({ route, navigation }) {
  const catID = route.params.categoryID;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catID]);
return <MealsList items={displayedMeals}/>
  
}
export default MealsOverviewScreen;


