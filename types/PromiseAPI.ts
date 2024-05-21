import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CartAddProductsRequest } from '../models/CartAddProductsRequest';
import { CartAddProductsRequestItem } from '../models/CartAddProductsRequestItem';
import { CartAddProductsResponse } from '../models/CartAddProductsResponse';
import { CartAddProductsResponseItem } from '../models/CartAddProductsResponseItem';
import { CartApplyCouponsRequest } from '../models/CartApplyCouponsRequest';
import { CartCartData } from '../models/CartCartData';
import { CartCartItem } from '../models/CartCartItem';
import { CartCartStatus } from '../models/CartCartStatus';
import { CartCartSubtotal } from '../models/CartCartSubtotal';
import { CartCreateCartRequest } from '../models/CartCreateCartRequest';
import { CartCreateCartResponse } from '../models/CartCreateCartResponse';
import { CartCurrency } from '../models/CartCurrency';
import { CartCustomerData } from '../models/CartCustomerData';
import { CartGetActiveCartByCustomerRequest } from '../models/CartGetActiveCartByCustomerRequest';
import { CartGetActiveCartByCustomerResponse } from '../models/CartGetActiveCartByCustomerResponse';
import { CartGetCartRequest } from '../models/CartGetCartRequest';
import { CartGetCartResponse } from '../models/CartGetCartResponse';
import { CartItemCustomPrice } from '../models/CartItemCustomPrice';
import { CartListCartsRequest } from '../models/CartListCartsRequest';
import { CartListCartsResponse } from '../models/CartListCartsResponse';
import { CartListPaymentMethodsRequest } from '../models/CartListPaymentMethodsRequest';
import { CartListPaymentMethodsResponse } from '../models/CartListPaymentMethodsResponse';
import { CartListShipmentMethodsRequest } from '../models/CartListShipmentMethodsRequest';
import { CartListShipmentMethodsResponse } from '../models/CartListShipmentMethodsResponse';
import { CartLocalizedText } from '../models/CartLocalizedText';
import { CartMergeCartsRequest } from '../models/CartMergeCartsRequest';
import { CartMergeCartsResponse } from '../models/CartMergeCartsResponse';
import { CartMoney } from '../models/CartMoney';
import { CartPaymentData } from '../models/CartPaymentData';
import { CartPostalAddress } from '../models/CartPostalAddress';
import { CartProductConfigurationSelection } from '../models/CartProductConfigurationSelection';
import { CartProductConfigurationSelectionOption } from '../models/CartProductConfigurationSelectionOption';
import { CartProductConfigurationStep } from '../models/CartProductConfigurationStep';
import { CartProductConfigurationStepOption } from '../models/CartProductConfigurationStepOption';
import { CartPromotionData } from '../models/CartPromotionData';
import { CartRemoveCouponsRequest } from '../models/CartRemoveCouponsRequest';
import { CartRemoveProductsRequest } from '../models/CartRemoveProductsRequest';
import { CartSetAdditionalInfoRequest } from '../models/CartSetAdditionalInfoRequest';
import { CartSetBillingAddressRequest } from '../models/CartSetBillingAddressRequest';
import { CartSetCustomPriceOnItemsRequest } from '../models/CartSetCustomPriceOnItemsRequest';
import { CartSetCustomPriceOnItemsRequestCartItem } from '../models/CartSetCustomPriceOnItemsRequestCartItem';
import { CartSetNotesRequest } from '../models/CartSetNotesRequest';
import { CartSetPaymentsRequest } from '../models/CartSetPaymentsRequest';
import { CartSetPaymentsResponse } from '../models/CartSetPaymentsResponse';
import { CartSetShipmentAddressRequest } from '../models/CartSetShipmentAddressRequest';
import { CartSetShipmentsRequest } from '../models/CartSetShipmentsRequest';
import { CartShipmentData } from '../models/CartShipmentData';
import { CartSortOrder } from '../models/CartSortOrder';
import { CartSubtotalCode } from '../models/CartSubtotalCode';
import { CartTriggerRealignmentRequest } from '../models/CartTriggerRealignmentRequest';
import { CartTriggerRealignmentResponse } from '../models/CartTriggerRealignmentResponse';
import { CartUpdateCartRequest } from '../models/CartUpdateCartRequest';
import { CartUpdateProductsRequest } from '../models/CartUpdateProductsRequest';
import { CartUpdateProductsRequestItem } from '../models/CartUpdateProductsRequestItem';
import { ListCartsRequestFilter } from '../models/ListCartsRequestFilter';
import { ListCartsRequestFilterCartStatus } from '../models/ListCartsRequestFilterCartStatus';
import { ListCartsRequestFilterDate } from '../models/ListCartsRequestFilterDate';
import { ListCartsRequestSort } from '../models/ListCartsRequestSort';
import { OptionImage } from '../models/OptionImage';
import { ProtobufAny } from '../models/ProtobufAny';
import { ProtobufNullValue } from '../models/ProtobufNullValue';
import { RpcStatus } from '../models/RpcStatus';
import { SortSortField } from '../models/SortSortField';
import { UpdateCartRequestPayload } from '../models/UpdateCartRequestPayload';
import { ObservableAddressesApi } from './ObservableAPI';

import { AddressesApiRequestFactory, AddressesApiResponseProcessor} from "../apis/AddressesApi";
export class PromiseAddressesApi {
    private api: ObservableAddressesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AddressesApiRequestFactory,
        responseProcessor?: AddressesApiResponseProcessor
    ) {
        this.api = new ObservableAddressesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Set billing address
     * Set Billing Address
     * @param body 
     */
    public setBillingAddressWithHttpInfo(body: CartSetBillingAddressRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.setBillingAddressWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Set billing address
     * Set Billing Address
     * @param body 
     */
    public setBillingAddress(body: CartSetBillingAddressRequest, _options?: Configuration): Promise<any> {
        const result = this.api.setBillingAddress(body, _options);
        return result.toPromise();
    }

    /**
     * Set shipment address
     * Set Shipment Address
     * @param body 
     */
    public setShipmentAddressWithHttpInfo(body: CartSetShipmentAddressRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.setShipmentAddressWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Set shipment address
     * Set Shipment Address
     * @param body 
     */
    public setShipmentAddress(body: CartSetShipmentAddressRequest, _options?: Configuration): Promise<any> {
        const result = this.api.setShipmentAddress(body, _options);
        return result.toPromise();
    }


}



import { ObservableBasicOperationsApi } from './ObservableAPI';

import { BasicOperationsApiRequestFactory, BasicOperationsApiResponseProcessor} from "../apis/BasicOperationsApi";
export class PromiseBasicOperationsApi {
    private api: ObservableBasicOperationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicOperationsApiRequestFactory,
        responseProcessor?: BasicOperationsApiResponseProcessor
    ) {
        this.api = new ObservableBasicOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to add products to a shopping cart. The AddProducts method enables you to specify the tenantId and cartId to identify the target shopping cart, and provide a list of items to be added.
     * Add Products
     * @param body 
     */
    public addProductsWithHttpInfo(body: CartAddProductsRequest, _options?: Configuration): Promise<HttpInfo<CartAddProductsResponse>> {
        const result = this.api.addProductsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to add products to a shopping cart. The AddProducts method enables you to specify the tenantId and cartId to identify the target shopping cart, and provide a list of items to be added.
     * Add Products
     * @param body 
     */
    public addProducts(body: CartAddProductsRequest, _options?: Configuration): Promise<CartAddProductsResponse> {
        const result = this.api.addProducts(body, _options);
        return result.toPromise();
    }

    /**
     * The CreateCart endpoint allows users to create a new cart for their shopping session. By making a request to this endpoint, users can initiate a new cart and obtain a unique identifier for future cart operations. This endpoint enables seamless cart management and provides a foundation for adding products and performing checkout operations.
     * Create Cart
     * @param body 
     */
    public createCartWithHttpInfo(body: CartCreateCartRequest, _options?: Configuration): Promise<HttpInfo<CartCreateCartResponse>> {
        const result = this.api.createCartWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The CreateCart endpoint allows users to create a new cart for their shopping session. By making a request to this endpoint, users can initiate a new cart and obtain a unique identifier for future cart operations. This endpoint enables seamless cart management and provides a foundation for adding products and performing checkout operations.
     * Create Cart
     * @param body 
     */
    public createCart(body: CartCreateCartRequest, _options?: Configuration): Promise<CartCreateCartResponse> {
        const result = this.api.createCart(body, _options);
        return result.toPromise();
    }

    /**
     * Get the active cart by customer
     * Get Active Cart By Customer
     * @param body 
     */
    public getActiveCartByCustomerWithHttpInfo(body: CartGetActiveCartByCustomerRequest, _options?: Configuration): Promise<HttpInfo<CartGetActiveCartByCustomerResponse>> {
        const result = this.api.getActiveCartByCustomerWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get the active cart by customer
     * Get Active Cart By Customer
     * @param body 
     */
    public getActiveCartByCustomer(body: CartGetActiveCartByCustomerRequest, _options?: Configuration): Promise<CartGetActiveCartByCustomerResponse> {
        const result = this.api.getActiveCartByCustomer(body, _options);
        return result.toPromise();
    }

    /**
     * Get the cart
     * Get Cart
     * @param body Get cart request
     */
    public getCartWithHttpInfo(body: CartGetCartRequest, _options?: Configuration): Promise<HttpInfo<CartGetCartResponse>> {
        const result = this.api.getCartWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get the cart
     * Get Cart
     * @param body Get cart request
     */
    public getCart(body: CartGetCartRequest, _options?: Configuration): Promise<CartGetCartResponse> {
        const result = this.api.getCart(body, _options);
        return result.toPromise();
    }

    /**
     * List all carts
     * List Carts
     * @param body 
     */
    public listCartsWithHttpInfo(body: CartListCartsRequest, _options?: Configuration): Promise<HttpInfo<CartListCartsResponse>> {
        const result = this.api.listCartsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List all carts
     * List Carts
     * @param body 
     */
    public listCarts(body: CartListCartsRequest, _options?: Configuration): Promise<CartListCartsResponse> {
        const result = this.api.listCarts(body, _options);
        return result.toPromise();
    }

    /**
     * Merge carts
     * Merge Carts
     * @param body 
     */
    public mergeCartsWithHttpInfo(body: CartMergeCartsRequest, _options?: Configuration): Promise<HttpInfo<CartMergeCartsResponse>> {
        const result = this.api.mergeCartsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Merge carts
     * Merge Carts
     * @param body 
     */
    public mergeCarts(body: CartMergeCartsRequest, _options?: Configuration): Promise<CartMergeCartsResponse> {
        const result = this.api.mergeCarts(body, _options);
        return result.toPromise();
    }

    /**
     * Remove products from the cart
     * Remove Products
     * @param body 
     */
    public removeProductsWithHttpInfo(body: CartRemoveProductsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.removeProductsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Remove products from the cart
     * Remove Products
     * @param body 
     */
    public removeProducts(body: CartRemoveProductsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.removeProducts(body, _options);
        return result.toPromise();
    }

    /**
     * Set additional info
     * Set Additional Info
     * @param body 
     */
    public setAdditionalInfoWithHttpInfo(body: CartSetAdditionalInfoRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.setAdditionalInfoWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Set additional info
     * Set Additional Info
     * @param body 
     */
    public setAdditionalInfo(body: CartSetAdditionalInfoRequest, _options?: Configuration): Promise<any> {
        const result = this.api.setAdditionalInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Set notes
     * Set Notes
     * @param body 
     */
    public setNotesWithHttpInfo(body: CartSetNotesRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.setNotesWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Set notes
     * Set Notes
     * @param body 
     */
    public setNotes(body: CartSetNotesRequest, _options?: Configuration): Promise<any> {
        const result = this.api.setNotes(body, _options);
        return result.toPromise();
    }

    /**
     * Trigger realignment
     * Trigger Realignment
     * @param body 
     */
    public triggerRealignmentWithHttpInfo(body: CartTriggerRealignmentRequest, _options?: Configuration): Promise<HttpInfo<CartTriggerRealignmentResponse>> {
        const result = this.api.triggerRealignmentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Trigger realignment
     * Trigger Realignment
     * @param body 
     */
    public triggerRealignment(body: CartTriggerRealignmentRequest, _options?: Configuration): Promise<CartTriggerRealignmentResponse> {
        const result = this.api.triggerRealignment(body, _options);
        return result.toPromise();
    }

    /**
     * Update the cart
     * Update Cart
     * @param body 
     */
    public updateCartWithHttpInfo(body: CartUpdateCartRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updateCartWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Update the cart
     * Update Cart
     * @param body 
     */
    public updateCart(body: CartUpdateCartRequest, _options?: Configuration): Promise<any> {
        const result = this.api.updateCart(body, _options);
        return result.toPromise();
    }

    /**
     * Update products in the cart
     * Update Products
     * @param body 
     */
    public updateProductsWithHttpInfo(body: CartUpdateProductsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updateProductsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Update products in the cart
     * Update Products
     * @param body 
     */
    public updateProducts(body: CartUpdateProductsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.updateProducts(body, _options);
        return result.toPromise();
    }


}



import { ObservableCartApi } from './ObservableAPI';

import { CartApiRequestFactory, CartApiResponseProcessor} from "../apis/CartApi";
export class PromiseCartApi {
    private api: ObservableCartApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CartApiRequestFactory,
        responseProcessor?: CartApiResponseProcessor
    ) {
        this.api = new ObservableCartApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param body 
     */
    public cartSetCustomPriceOnItemsWithHttpInfo(body: CartSetCustomPriceOnItemsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.cartSetCustomPriceOnItemsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public cartSetCustomPriceOnItems(body: CartSetCustomPriceOnItemsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.cartSetCustomPriceOnItems(body, _options);
        return result.toPromise();
    }


}



import { ObservablePaymentsApi } from './ObservableAPI';

import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor} from "../apis/PaymentsApi";
export class PromisePaymentsApi {
    private api: ObservablePaymentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentsApiRequestFactory,
        responseProcessor?: PaymentsApiResponseProcessor
    ) {
        this.api = new ObservablePaymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List payment methods
     * List Payment Methods
     * @param body 
     */
    public listPaymentMethodsWithHttpInfo(body: CartListPaymentMethodsRequest, _options?: Configuration): Promise<HttpInfo<CartListPaymentMethodsResponse>> {
        const result = this.api.listPaymentMethodsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List payment methods
     * List Payment Methods
     * @param body 
     */
    public listPaymentMethods(body: CartListPaymentMethodsRequest, _options?: Configuration): Promise<CartListPaymentMethodsResponse> {
        const result = this.api.listPaymentMethods(body, _options);
        return result.toPromise();
    }

    /**
     * Set SetPayments
     * Set SetPayments
     * @param body 
     */
    public setSetPaymentsWithHttpInfo(body: CartSetPaymentsRequest, _options?: Configuration): Promise<HttpInfo<CartSetPaymentsResponse>> {
        const result = this.api.setSetPaymentsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Set SetPayments
     * Set SetPayments
     * @param body 
     */
    public setSetPayments(body: CartSetPaymentsRequest, _options?: Configuration): Promise<CartSetPaymentsResponse> {
        const result = this.api.setSetPayments(body, _options);
        return result.toPromise();
    }


}



import { ObservablePromotionsApi } from './ObservableAPI';

import { PromotionsApiRequestFactory, PromotionsApiResponseProcessor} from "../apis/PromotionsApi";
export class PromisePromotionsApi {
    private api: ObservablePromotionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PromotionsApiRequestFactory,
        responseProcessor?: PromotionsApiResponseProcessor
    ) {
        this.api = new ObservablePromotionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Apply coupons to the cart
     * Apply Coupons
     * @param body 
     */
    public applyCouponsWithHttpInfo(body: CartApplyCouponsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.applyCouponsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Apply coupons to the cart
     * Apply Coupons
     * @param body 
     */
    public applyCoupons(body: CartApplyCouponsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.applyCoupons(body, _options);
        return result.toPromise();
    }

    /**
     * Remove coupons from the cart
     * Remove Coupons
     * @param body 
     */
    public removeCouponsWithHttpInfo(body: CartRemoveCouponsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.removeCouponsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Remove coupons from the cart
     * Remove Coupons
     * @param body 
     */
    public removeCoupons(body: CartRemoveCouponsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.removeCoupons(body, _options);
        return result.toPromise();
    }


}



import { ObservableShipmentsApi } from './ObservableAPI';

import { ShipmentsApiRequestFactory, ShipmentsApiResponseProcessor} from "../apis/ShipmentsApi";
export class PromiseShipmentsApi {
    private api: ObservableShipmentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ShipmentsApiRequestFactory,
        responseProcessor?: ShipmentsApiResponseProcessor
    ) {
        this.api = new ObservableShipmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List shipment methods
     * List Shipment Methods
     * @param body 
     */
    public listShipmentMethodsWithHttpInfo(body: CartListShipmentMethodsRequest, _options?: Configuration): Promise<HttpInfo<CartListShipmentMethodsResponse>> {
        const result = this.api.listShipmentMethodsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List shipment methods
     * List Shipment Methods
     * @param body 
     */
    public listShipmentMethods(body: CartListShipmentMethodsRequest, _options?: Configuration): Promise<CartListShipmentMethodsResponse> {
        const result = this.api.listShipmentMethods(body, _options);
        return result.toPromise();
    }

    /**
     * Set shipments
     * Set Shipments
     * @param body 
     */
    public setShipmentsWithHttpInfo(body: CartSetShipmentsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.setShipmentsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Set shipments
     * Set Shipments
     * @param body 
     */
    public setShipments(body: CartSetShipmentsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.setShipments(body, _options);
        return result.toPromise();
    }


}



