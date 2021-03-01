export const useCreateTotal = (Products) => {
    let Total = 0;
    Products.map((product) => {
      Total += product.price;
    });
};