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

import { ObservableAddressesApi } from "./ObservableAPI";
import { AddressesApiRequestFactory, AddressesApiResponseProcessor} from "../apis/AddressesApi";

export interface AddressesApiSetBillingAddressRequest {
    /**
     * 
     * @type CartSetBillingAddressRequest
     * @memberof AddressesApisetBillingAddress
     */
    body: CartSetBillingAddressRequest
}

export interface AddressesApiSetShipmentAddressRequest {
    /**
     * 
     * @type CartSetShipmentAddressRequest
     * @memberof AddressesApisetShipmentAddress
     */
    body: CartSetShipmentAddressRequest
}

export class ObjectAddressesApi {
    private api: ObservableAddressesApi

    public constructor(configuration: Configuration, requestFactory?: AddressesApiRequestFactory, responseProcessor?: AddressesApiResponseProcessor) {
        this.api = new ObservableAddressesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Set billing address
     * Set Billing Address
     * @param param the request object
     */
    public setBillingAddressWithHttpInfo(param: AddressesApiSetBillingAddressRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.setBillingAddressWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Set billing address
     * Set Billing Address
     * @param param the request object
     */
    public setBillingAddress(param: AddressesApiSetBillingAddressRequest, options?: Configuration): Promise<any> {
        return this.api.setBillingAddress(param.body,  options).toPromise();
    }

    /**
     * Set shipment address
     * Set Shipment Address
     * @param param the request object
     */
    public setShipmentAddressWithHttpInfo(param: AddressesApiSetShipmentAddressRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.setShipmentAddressWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Set shipment address
     * Set Shipment Address
     * @param param the request object
     */
    public setShipmentAddress(param: AddressesApiSetShipmentAddressRequest, options?: Configuration): Promise<any> {
        return this.api.setShipmentAddress(param.body,  options).toPromise();
    }

}

import { ObservableBasicOperationsApi } from "./ObservableAPI";
import { BasicOperationsApiRequestFactory, BasicOperationsApiResponseProcessor} from "../apis/BasicOperationsApi";

export interface BasicOperationsApiAddProductsRequest {
    /**
     * 
     * @type CartAddProductsRequest
     * @memberof BasicOperationsApiaddProducts
     */
    body: CartAddProductsRequest
}

export interface BasicOperationsApiCreateCartRequest {
    /**
     * 
     * @type CartCreateCartRequest
     * @memberof BasicOperationsApicreateCart
     */
    body: CartCreateCartRequest
}

export interface BasicOperationsApiGetActiveCartByCustomerRequest {
    /**
     * 
     * @type CartGetActiveCartByCustomerRequest
     * @memberof BasicOperationsApigetActiveCartByCustomer
     */
    body: CartGetActiveCartByCustomerRequest
}

export interface BasicOperationsApiGetCartRequest {
    /**
     * Get cart request
     * @type CartGetCartRequest
     * @memberof BasicOperationsApigetCart
     */
    body: CartGetCartRequest
}

export interface BasicOperationsApiListCartsRequest {
    /**
     * 
     * @type CartListCartsRequest
     * @memberof BasicOperationsApilistCarts
     */
    body: CartListCartsRequest
}

export interface BasicOperationsApiMergeCartsRequest {
    /**
     * 
     * @type CartMergeCartsRequest
     * @memberof BasicOperationsApimergeCarts
     */
    body: CartMergeCartsRequest
}

export interface BasicOperationsApiRemoveProductsRequest {
    /**
     * 
     * @type CartRemoveProductsRequest
     * @memberof BasicOperationsApiremoveProducts
     */
    body: CartRemoveProductsRequest
}

export interface BasicOperationsApiSetAdditionalInfoRequest {
    /**
     * 
     * @type CartSetAdditionalInfoRequest
     * @memberof BasicOperationsApisetAdditionalInfo
     */
    body: CartSetAdditionalInfoRequest
}

export interface BasicOperationsApiSetNotesRequest {
    /**
     * 
     * @type CartSetNotesRequest
     * @memberof BasicOperationsApisetNotes
     */
    body: CartSetNotesRequest
}

export interface BasicOperationsApiTriggerRealignmentRequest {
    /**
     * 
     * @type CartTriggerRealignmentRequest
     * @memberof BasicOperationsApitriggerRealignment
     */
    body: CartTriggerRealignmentRequest
}

export interface BasicOperationsApiUpdateCartRequest {
    /**
     * 
     * @type CartUpdateCartRequest
     * @memberof BasicOperationsApiupdateCart
     */
    body: CartUpdateCartRequest
}

export interface BasicOperationsApiUpdateProductsRequest {
    /**
     * 
     * @type CartUpdateProductsRequest
     * @memberof BasicOperationsApiupdateProducts
     */
    body: CartUpdateProductsRequest
}

export class ObjectBasicOperationsApi {
    private api: ObservableBasicOperationsApi

    public constructor(configuration: Configuration, requestFactory?: BasicOperationsApiRequestFactory, responseProcessor?: BasicOperationsApiResponseProcessor) {
        this.api = new ObservableBasicOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to add products to a shopping cart. The AddProducts method enables you to specify the tenantId and cartId to identify the target shopping cart, and provide a list of items to be added.
     * Add Products
     * @param param the request object
     */
    public addProductsWithHttpInfo(param: BasicOperationsApiAddProductsRequest, options?: Configuration): Promise<HttpInfo<CartAddProductsResponse>> {
        return this.api.addProductsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * This endpoint allows you to add products to a shopping cart. The AddProducts method enables you to specify the tenantId and cartId to identify the target shopping cart, and provide a list of items to be added.
     * Add Products
     * @param param the request object
     */
    public addProducts(param: BasicOperationsApiAddProductsRequest, options?: Configuration): Promise<CartAddProductsResponse> {
        return this.api.addProducts(param.body,  options).toPromise();
    }

    /**
     * The CreateCart endpoint allows users to create a new cart for their shopping session. By making a request to this endpoint, users can initiate a new cart and obtain a unique identifier for future cart operations. This endpoint enables seamless cart management and provides a foundation for adding products and performing checkout operations.
     * Create Cart
     * @param param the request object
     */
    public createCartWithHttpInfo(param: BasicOperationsApiCreateCartRequest, options?: Configuration): Promise<HttpInfo<CartCreateCartResponse>> {
        return this.api.createCartWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The CreateCart endpoint allows users to create a new cart for their shopping session. By making a request to this endpoint, users can initiate a new cart and obtain a unique identifier for future cart operations. This endpoint enables seamless cart management and provides a foundation for adding products and performing checkout operations.
     * Create Cart
     * @param param the request object
     */
    public createCart(param: BasicOperationsApiCreateCartRequest, options?: Configuration): Promise<CartCreateCartResponse> {
        return this.api.createCart(param.body,  options).toPromise();
    }

    /**
     * Get the active cart by customer
     * Get Active Cart By Customer
     * @param param the request object
     */
    public getActiveCartByCustomerWithHttpInfo(param: BasicOperationsApiGetActiveCartByCustomerRequest, options?: Configuration): Promise<HttpInfo<CartGetActiveCartByCustomerResponse>> {
        return this.api.getActiveCartByCustomerWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get the active cart by customer
     * Get Active Cart By Customer
     * @param param the request object
     */
    public getActiveCartByCustomer(param: BasicOperationsApiGetActiveCartByCustomerRequest, options?: Configuration): Promise<CartGetActiveCartByCustomerResponse> {
        return this.api.getActiveCartByCustomer(param.body,  options).toPromise();
    }

    /**
     * Get the cart
     * Get Cart
     * @param param the request object
     */
    public getCartWithHttpInfo(param: BasicOperationsApiGetCartRequest, options?: Configuration): Promise<HttpInfo<CartGetCartResponse>> {
        return this.api.getCartWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get the cart
     * Get Cart
     * @param param the request object
     */
    public getCart(param: BasicOperationsApiGetCartRequest, options?: Configuration): Promise<CartGetCartResponse> {
        return this.api.getCart(param.body,  options).toPromise();
    }

    /**
     * List all carts
     * List Carts
     * @param param the request object
     */
    public listCartsWithHttpInfo(param: BasicOperationsApiListCartsRequest, options?: Configuration): Promise<HttpInfo<CartListCartsResponse>> {
        return this.api.listCartsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List all carts
     * List Carts
     * @param param the request object
     */
    public listCarts(param: BasicOperationsApiListCartsRequest, options?: Configuration): Promise<CartListCartsResponse> {
        return this.api.listCarts(param.body,  options).toPromise();
    }

    /**
     * Merge carts
     * Merge Carts
     * @param param the request object
     */
    public mergeCartsWithHttpInfo(param: BasicOperationsApiMergeCartsRequest, options?: Configuration): Promise<HttpInfo<CartMergeCartsResponse>> {
        return this.api.mergeCartsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Merge carts
     * Merge Carts
     * @param param the request object
     */
    public mergeCarts(param: BasicOperationsApiMergeCartsRequest, options?: Configuration): Promise<CartMergeCartsResponse> {
        return this.api.mergeCarts(param.body,  options).toPromise();
    }

    /**
     * Remove products from the cart
     * Remove Products
     * @param param the request object
     */
    public removeProductsWithHttpInfo(param: BasicOperationsApiRemoveProductsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.removeProductsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Remove products from the cart
     * Remove Products
     * @param param the request object
     */
    public removeProducts(param: BasicOperationsApiRemoveProductsRequest, options?: Configuration): Promise<any> {
        return this.api.removeProducts(param.body,  options).toPromise();
    }

    /**
     * Set additional info
     * Set Additional Info
     * @param param the request object
     */
    public setAdditionalInfoWithHttpInfo(param: BasicOperationsApiSetAdditionalInfoRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.setAdditionalInfoWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Set additional info
     * Set Additional Info
     * @param param the request object
     */
    public setAdditionalInfo(param: BasicOperationsApiSetAdditionalInfoRequest, options?: Configuration): Promise<any> {
        return this.api.setAdditionalInfo(param.body,  options).toPromise();
    }

    /**
     * Set notes
     * Set Notes
     * @param param the request object
     */
    public setNotesWithHttpInfo(param: BasicOperationsApiSetNotesRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.setNotesWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Set notes
     * Set Notes
     * @param param the request object
     */
    public setNotes(param: BasicOperationsApiSetNotesRequest, options?: Configuration): Promise<any> {
        return this.api.setNotes(param.body,  options).toPromise();
    }

    /**
     * Trigger realignment
     * Trigger Realignment
     * @param param the request object
     */
    public triggerRealignmentWithHttpInfo(param: BasicOperationsApiTriggerRealignmentRequest, options?: Configuration): Promise<HttpInfo<CartTriggerRealignmentResponse>> {
        return this.api.triggerRealignmentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Trigger realignment
     * Trigger Realignment
     * @param param the request object
     */
    public triggerRealignment(param: BasicOperationsApiTriggerRealignmentRequest, options?: Configuration): Promise<CartTriggerRealignmentResponse> {
        return this.api.triggerRealignment(param.body,  options).toPromise();
    }

    /**
     * Update the cart
     * Update Cart
     * @param param the request object
     */
    public updateCartWithHttpInfo(param: BasicOperationsApiUpdateCartRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updateCartWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Update the cart
     * Update Cart
     * @param param the request object
     */
    public updateCart(param: BasicOperationsApiUpdateCartRequest, options?: Configuration): Promise<any> {
        return this.api.updateCart(param.body,  options).toPromise();
    }

    /**
     * Update products in the cart
     * Update Products
     * @param param the request object
     */
    public updateProductsWithHttpInfo(param: BasicOperationsApiUpdateProductsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updateProductsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Update products in the cart
     * Update Products
     * @param param the request object
     */
    public updateProducts(param: BasicOperationsApiUpdateProductsRequest, options?: Configuration): Promise<any> {
        return this.api.updateProducts(param.body,  options).toPromise();
    }

}

import { ObservableCartApi } from "./ObservableAPI";
import { CartApiRequestFactory, CartApiResponseProcessor} from "../apis/CartApi";

export interface CartApiCartSetCustomPriceOnItemsRequest {
    /**
     * 
     * @type CartSetCustomPriceOnItemsRequest
     * @memberof CartApicartSetCustomPriceOnItems
     */
    body: CartSetCustomPriceOnItemsRequest
}

export class ObjectCartApi {
    private api: ObservableCartApi

    public constructor(configuration: Configuration, requestFactory?: CartApiRequestFactory, responseProcessor?: CartApiResponseProcessor) {
        this.api = new ObservableCartApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public cartSetCustomPriceOnItemsWithHttpInfo(param: CartApiCartSetCustomPriceOnItemsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.cartSetCustomPriceOnItemsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cartSetCustomPriceOnItems(param: CartApiCartSetCustomPriceOnItemsRequest, options?: Configuration): Promise<any> {
        return this.api.cartSetCustomPriceOnItems(param.body,  options).toPromise();
    }

}

import { ObservablePaymentsApi } from "./ObservableAPI";
import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor} from "../apis/PaymentsApi";

export interface PaymentsApiListPaymentMethodsRequest {
    /**
     * 
     * @type CartListPaymentMethodsRequest
     * @memberof PaymentsApilistPaymentMethods
     */
    body: CartListPaymentMethodsRequest
}

export interface PaymentsApiSetSetPaymentsRequest {
    /**
     * 
     * @type CartSetPaymentsRequest
     * @memberof PaymentsApisetSetPayments
     */
    body: CartSetPaymentsRequest
}

export class ObjectPaymentsApi {
    private api: ObservablePaymentsApi

    public constructor(configuration: Configuration, requestFactory?: PaymentsApiRequestFactory, responseProcessor?: PaymentsApiResponseProcessor) {
        this.api = new ObservablePaymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List payment methods
     * List Payment Methods
     * @param param the request object
     */
    public listPaymentMethodsWithHttpInfo(param: PaymentsApiListPaymentMethodsRequest, options?: Configuration): Promise<HttpInfo<CartListPaymentMethodsResponse>> {
        return this.api.listPaymentMethodsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List payment methods
     * List Payment Methods
     * @param param the request object
     */
    public listPaymentMethods(param: PaymentsApiListPaymentMethodsRequest, options?: Configuration): Promise<CartListPaymentMethodsResponse> {
        return this.api.listPaymentMethods(param.body,  options).toPromise();
    }

    /**
     * Set SetPayments
     * Set SetPayments
     * @param param the request object
     */
    public setSetPaymentsWithHttpInfo(param: PaymentsApiSetSetPaymentsRequest, options?: Configuration): Promise<HttpInfo<CartSetPaymentsResponse>> {
        return this.api.setSetPaymentsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Set SetPayments
     * Set SetPayments
     * @param param the request object
     */
    public setSetPayments(param: PaymentsApiSetSetPaymentsRequest, options?: Configuration): Promise<CartSetPaymentsResponse> {
        return this.api.setSetPayments(param.body,  options).toPromise();
    }

}

import { ObservablePromotionsApi } from "./ObservableAPI";
import { PromotionsApiRequestFactory, PromotionsApiResponseProcessor} from "../apis/PromotionsApi";

export interface PromotionsApiApplyCouponsRequest {
    /**
     * 
     * @type CartApplyCouponsRequest
     * @memberof PromotionsApiapplyCoupons
     */
    body: CartApplyCouponsRequest
}

export interface PromotionsApiRemoveCouponsRequest {
    /**
     * 
     * @type CartRemoveCouponsRequest
     * @memberof PromotionsApiremoveCoupons
     */
    body: CartRemoveCouponsRequest
}

export class ObjectPromotionsApi {
    private api: ObservablePromotionsApi

    public constructor(configuration: Configuration, requestFactory?: PromotionsApiRequestFactory, responseProcessor?: PromotionsApiResponseProcessor) {
        this.api = new ObservablePromotionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Apply coupons to the cart
     * Apply Coupons
     * @param param the request object
     */
    public applyCouponsWithHttpInfo(param: PromotionsApiApplyCouponsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.applyCouponsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Apply coupons to the cart
     * Apply Coupons
     * @param param the request object
     */
    public applyCoupons(param: PromotionsApiApplyCouponsRequest, options?: Configuration): Promise<any> {
        return this.api.applyCoupons(param.body,  options).toPromise();
    }

    /**
     * Remove coupons from the cart
     * Remove Coupons
     * @param param the request object
     */
    public removeCouponsWithHttpInfo(param: PromotionsApiRemoveCouponsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.removeCouponsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Remove coupons from the cart
     * Remove Coupons
     * @param param the request object
     */
    public removeCoupons(param: PromotionsApiRemoveCouponsRequest, options?: Configuration): Promise<any> {
        return this.api.removeCoupons(param.body,  options).toPromise();
    }

}

import { ObservableShipmentsApi } from "./ObservableAPI";
import { ShipmentsApiRequestFactory, ShipmentsApiResponseProcessor} from "../apis/ShipmentsApi";

export interface ShipmentsApiListShipmentMethodsRequest {
    /**
     * 
     * @type CartListShipmentMethodsRequest
     * @memberof ShipmentsApilistShipmentMethods
     */
    body: CartListShipmentMethodsRequest
}

export interface ShipmentsApiSetShipmentsRequest {
    /**
     * 
     * @type CartSetShipmentsRequest
     * @memberof ShipmentsApisetShipments
     */
    body: CartSetShipmentsRequest
}

export class ObjectShipmentsApi {
    private api: ObservableShipmentsApi

    public constructor(configuration: Configuration, requestFactory?: ShipmentsApiRequestFactory, responseProcessor?: ShipmentsApiResponseProcessor) {
        this.api = new ObservableShipmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List shipment methods
     * List Shipment Methods
     * @param param the request object
     */
    public listShipmentMethodsWithHttpInfo(param: ShipmentsApiListShipmentMethodsRequest, options?: Configuration): Promise<HttpInfo<CartListShipmentMethodsResponse>> {
        return this.api.listShipmentMethodsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List shipment methods
     * List Shipment Methods
     * @param param the request object
     */
    public listShipmentMethods(param: ShipmentsApiListShipmentMethodsRequest, options?: Configuration): Promise<CartListShipmentMethodsResponse> {
        return this.api.listShipmentMethods(param.body,  options).toPromise();
    }

    /**
     * Set shipments
     * Set Shipments
     * @param param the request object
     */
    public setShipmentsWithHttpInfo(param: ShipmentsApiSetShipmentsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.setShipmentsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Set shipments
     * Set Shipments
     * @param param the request object
     */
    public setShipments(param: ShipmentsApiSetShipmentsRequest, options?: Configuration): Promise<any> {
        return this.api.setShipments(param.body,  options).toPromise();
    }

}
