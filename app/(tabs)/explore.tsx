import React, { useState, useEffect } from "react";
import { View, TextInput, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";
import { API_URL } from "@/constants/api";
import ProductList from "@/components/ProductList";
import { debounce } from "lodash";

export default function ExploreScreen() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = debounce(async (text) => {
    if (!text) return;
    setLoading(true);
    try {
      console.log("Searching for:", text);

      const response = await axios.get(`${API_URL}/search?q=${text}`);
      setResults(response.data.products);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  }, 1000);

  useEffect(() => {
    debouncedSearch(query);
    return () => debouncedSearch.cancel();
  }, [query]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        placeholder="Search products..."
        style={{
          height: 40,
          borderBottomWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 8,
        }}
        onChangeText={(text) => setQuery(text)}
        value={query}
      />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }) => <ProductList product={item} />}
        />
      )}
    </View>
  );
}
