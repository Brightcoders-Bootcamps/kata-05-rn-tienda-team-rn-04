import auth from '@react-native-firebase/auth';
export const useCreateOrder = (Products) => {
  let ProductList = [];
  let Total = 0;
  Products.map((product) => {
    Total += product.price;
    ProductList.push({
      product: product.name,
      price: product.price,
      quantity: '1kg',
    });
  });
  const Order = {
    list: ProductList,
    Total,
    UserId: auth().currentUser.uid,
  };
  return Order;
};



