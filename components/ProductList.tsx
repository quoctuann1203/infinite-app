import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useFavorites } from "@/context/FavoritesContext";

export default function ProductList({ product }: any) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav: any) => fav.id === product.id);

  return (
    <View
      style={{
        flexDirection: "row",
        padding: 10,
        gap: 10,
        rowGap: 10,
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <View>
        <Image
          source={{ uri: product.thumbnail }}
          style={{ width: 50, height: 50, borderRadius: 10 }}
        />
      </View>
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={{ fontWeight: "bold" }}>{product.title}</Text>
        <Text>${product.price}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => toggleFavorite(product)}>
          <Text style={{ fontSize: 24, color: isFavorite ? "red" : "gray" }}>
            {isFavorite ? "❤️" : "🤍"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
