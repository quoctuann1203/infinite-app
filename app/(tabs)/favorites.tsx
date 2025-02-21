import { FlatList, Text } from "react-native";
import { useFavorites } from "@/context/FavoritesContext";
import ProductList from "@/components/ProductList";

export default function FavoritesScreen() {
  const { favorites } = useFavorites();

  return (
    <FlatList
      data={favorites}
      renderItem={({ item }) => <ProductList product={item} />}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={<Text>No favorites yet.</Text>}
    />
  );
}
