import {Store} from "../common/store/store";
import {Registry} from "../common/store/registry";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";


const ProductsStore = new Store("products", {
  data: {
    products: [],
    productsNewArray: []
  },
  options: {
    shouldInitFromState: true,
    stateKey: "products",
  },
  reducers: [
    {
      type: ADD_PRODUCT,
      action(state, payload) {

        const {product} = payload;

        const productsNewArray = [...state.productsNewArray, product];

        return {
          ...state,
          productsNewArray,
        };
      },
    },
    {
      type: REMOVE_PRODUCT,
      action(state, payload) {
        const {id} = payload;
        const productsNewArray = [...state.productsNewArray];
        const index = productsNewArray.findIndex((product) => product.id === id);

        if (index !== -1) {
          productsNewArray.splice(index, 1);
        }

        return {
          ...state,
          productsNewArray,
        };
      },
    },
  ],
});

Registry.addStore(ProductsStore);

export {ProductsStore};
