import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CateGoryGridTile from "../components/CateGoryGridTile";

function CategoriesScreen({navigation}) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview' , {
        categoryID: itemData.item.id,
      });
    }
    return (
      <CateGoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  const numColumns = 1;
  return (
    <FlatList
  data={CATEGORIES}
  keyExtractor={(item) => item.id}
  renderItem={renderCategoryItem}
  numColumns={2}
/>
  );
}
export default CategoriesScreen;
