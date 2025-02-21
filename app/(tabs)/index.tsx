import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Button,
  StyleSheet,
} from "react-native";
import { useProducts } from "@/hooks/useProducts";
import ProductList from "@/components/ProductList";

export default function HomeScreen() {
  const { products, fetchProducts, loading, hasMore, isConnected, error } =
    useProducts();

  if (!isConnected) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>⚠️ No Internet Connection</Text>
        <Text>Please check your network and try again.</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>❌ {error}</Text>
        <Button title="Retry" onPress={() => fetchProducts(true)} />
      </View>
    );
  }

  if (products.length === 0 && !loading) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>🔍 No products found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductList product={item} />}
      onEndReached={() => hasMore && fetchProducts()}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() =>
        loading ? (
          <ActivityIndicator size="large" />
        ) : !hasMore ? (
          <Text style={styles.endText}>🎉 No more products</Text>
        ) : null
      }
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorText: { fontSize: 16, fontWeight: "bold", color: "red" },
  endText: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
    color: "gray",
  },
});
