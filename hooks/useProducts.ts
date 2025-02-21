import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useNetwork } from "@/hooks/useNetwork"; // Import network hook

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export const useProducts = (searchQuery = "") => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isConnected } = useNetwork();

  const fetchProducts = async (reset = false) => {
    if (loading) return;
    if (!isConnected) {
      setError("No internet connection.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const url = searchQuery
        ? `https://dummyjson.com/products/search?q=${searchQuery}`
        : `https://dummyjson.com/products?limit=20&skip=${
            reset ? 0 : page * 20
          }`;

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data.");

      const data = await response.json();

      if (reset) {
        setProducts(data.products);
        setPage(1);
      } else {
        setProducts((prev) => [...prev, ...data.products]);
        setPage(page + 1);
      }

      setHasMore(data.products.length === 20);
    } catch (err) {
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(true);
  }, [searchQuery]);

  return { products, fetchProducts, loading, hasMore, isConnected, error };
};
