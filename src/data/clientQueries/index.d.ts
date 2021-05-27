export declare module '*.gql' {
    import {DocumentNode} from 'graphql';

    const value: DocumentNode;
    export = value;
};

// for the benefit of src\cart\CartProvider.tsx
export type AddCartItem = any;
export type AddItemToCart = any;
export type addItemToCartMutationVariables= any;
export type removeItemFromCartMutationVariables= any;
export type getCartQueryVariables= any;
export type checkoutCartMutationVariables= any;

