import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  useContext,
} from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContext {
  addToCart(prod: Product): void;
  removeToCart(id: string): void;
  clearCart(): void;
  getTotal(): { total: number; counter: number };
  products: Product[];
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productsFromLocalStorage = localStorage.getItem('@FastCommerce:Cart');

    if (productsFromLocalStorage) {
      setProducts([...JSON.parse(productsFromLocalStorage)]);
    }
  }, []);

  const addToCart = useCallback(
    (productToAdd: Product) => {
      const existsInCartIndex = products.findIndex(
        prod => prod.id === productToAdd.id,
      );

      let newProductsInCart = [...products];

      if (existsInCartIndex >= 0) {
        newProductsInCart[existsInCartIndex].quantity += productToAdd.quantity;
      } else {
        newProductsInCart = [...products, productToAdd];
      }

      setProducts(newProductsInCart);

      localStorage.setItem('@FastCommerce:Cart', JSON.stringify(products));
    },
    [products],
  );

  const removeToCart = useCallback(
    (idProduct: string) => {
      const productsAfterRemove = products.filter(
        prod => prod.id !== idProduct,
      );

      setProducts(productsAfterRemove);

      localStorage.setItem(
        '@FastCommerce:Cart',
        JSON.stringify(productsAfterRemove),
      );
    },
    [products],
  );

  const clearCart = useCallback(() => {
    setProducts([]);
  }, []);

  const getTotal = useCallback(() => {
    const { total, counter } = products.reduce(
      (accumulator, product) => {
        const valueToAccumaltor = product.quantity * product.price;
        accumulator.total += valueToAccumaltor;
        accumulator.counter += 1;
        return accumulator;
      },
      {
        total: 0,
        counter: 0,
      },
    );

    return { total, counter };
  }, [products]);

  const value = React.useMemo(
    () => ({ clearCart, addToCart, removeToCart, products, getTotal }),
    [addToCart, removeToCart, products, clearCart, getTotal],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
