import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AddressesApiRequestFactory, AddressesApiResponseProcessor} from "../apis/AddressesApi";
export class ObservableAddressesApi {
    private requestFactory: AddressesApiRequestFactory;
    private responseProcessor: AddressesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AddressesApiRequestFactory,
        responseProcessor?: AddressesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AddressesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AddressesApiResponseProcessor();
    }

    /**
     * Set billing address
     * Set Billing Address
     * @param body 
     */
    public setBillingAddressWithHttpInfo(body: CartSetBillingAddressRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.setBillingAddress(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setBillingAddressWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set billing address
     * Set Billing Address
     * @param body 
     */
    public setBillingAddress(body: CartSetBillingAddressRequest, _options?: Configuration): Observable<any> {
        return this.setBillingAddressWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Set shipment address
     * Set Shipment Address
     * @param body 
     */
    public setShipmentAddressWithHttpInfo(body: CartSetShipmentAddressRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.setShipmentAddress(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setShipmentAddressWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set shipment address
     * Set Shipment Address
     * @param body 
     */
    public setShipmentAddress(body: CartSetShipmentAddressRequest, _options?: Configuration): Observable<any> {
        return this.setShipmentAddressWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { BasicOperationsApiRequestFactory, BasicOperationsApiResponseProcessor} from "../apis/BasicOperationsApi";
export class ObservableBasicOperationsApi {
    private requestFactory: BasicOperationsApiRequestFactory;
    private responseProcessor: BasicOperationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicOperationsApiRequestFactory,
        responseProcessor?: BasicOperationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BasicOperationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BasicOperationsApiResponseProcessor();
    }

    /**
     * This endpoint allows you to add products to a shopping cart. The AddProducts method enables you to specify the tenantId and cartId to identify the target shopping cart, and provide a list of items to be added.
     * Add Products
     * @param body 
     */
    public addProductsWithHttpInfo(body: CartAddProductsRequest, _options?: Configuration): Observable<HttpInfo<CartAddProductsResponse>> {
        const requestContextPromise = this.requestFactory.addProducts(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addProductsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint allows you to add products to a shopping cart. The AddProducts method enables you to specify the tenantId and cartId to identify the target shopping cart, and provide a list of items to be added.
     * Add Products
     * @param body 
     */
    public addProducts(body: CartAddProductsRequest, _options?: Configuration): Observable<CartAddProductsResponse> {
        return this.addProductsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CartAddProductsResponse>) => apiResponse.data));
    }

    /**
     * The CreateCart endpoint allows users to create a new cart for their shopping session. By making a request to this endpoint, users can initiate a new cart and obtain a unique identifier for future cart operations. This endpoint enables seamless cart management and provides a foundation for adding products and performing checkout operations.
     * Create Cart
     * @param body 
     */
    public createCartWithHttpInfo(body: CartCreateCartRequest, _options?: Configuration): Observable<HttpInfo<CartCreateCartResponse>> {
        const requestContextPromise = this.requestFactory.createCart(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCartWithHttpInfo(rsp)));
            }));
    }

    /**
     * The CreateCart endpoint allows users to create a new cart for their shopping session. By making a request to this endpoint, users can initiate a new cart and obtain a unique identifier for future cart operations. This endpoint enables seamless cart management and provides a foundation for adding products and performing checkout operations.
     * Create Cart
     * @param body 
     */
    public createCart(body: CartCreateCartRequest, _options?: Configuration): Observable<CartCreateCartResponse> {
        return this.createCartWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CartCreateCartResponse>) => apiResponse.data));
    }

    /**
     * Get the active cart by customer
     * Get Active Cart By Customer
     * @param body 
     */
    public getActiveCartByCustomerWithHttpInfo(body: CartGetActiveCartByCustomerRequest, _options?: Configuration): Observable<HttpInfo<CartGetActiveCartByCustomerResponse>> {
        const requestContextPromise = this.requestFactory.getActiveCartByCustomer(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getActiveCartByCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the active cart by customer
     * Get Active Cart By Customer
     * @param body 
     */
    public getActiveCartByCustomer(body: CartGetActiveCartByCustomerRequest, _options?: Configuration): Observable<CartGetActiveCartByCustomerResponse> {
        return this.getActiveCartByCustomerWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CartGetActiveCartByCustomerResponse>) => apiResponse.data));
    }

    /**
     * Get the cart
     * Get Cart
     * @param body Get cart request
     */
    public getCartWithHttpInfo(body: CartGetCartRequest, _options?: Configuration): Observable<HttpInfo<CartGetCartResponse>> {
        const requestContextPromise = this.requestFactory.getCart(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCartWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the cart
     * Get Cart
     * @param body Get cart request
     */
    public getCart(body: CartGetCartRequest, _options?: Configuration): Observable<CartGetCartResponse> {
        return this.getCartWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CartGetCartResponse>) => apiResponse.data));
    }

    /**
     * List all carts
     * List Carts
     * @param body 
     */
    public listCartsWithHttpInfo(body: CartListCartsRequest, _options?: Configuration): Observable<HttpInfo<CartListCartsResponse>> {
        const requestContextPromise = this.requestFactory.listCarts(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCartsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all carts
     * List Carts
     * @param body 
     */
    public listCarts(body: CartListCartsRequest, _options?: Configuration): Observable<CartListCartsResponse> {
        return this.listCartsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CartListCartsResponse>) => apiResponse.data));
    }

    /**
     * Merge carts
     * Merge Carts
     * @param body 
     */
    public mergeCartsWithHttpInfo(body: CartMergeCartsRequest, _options?: Configuration): Observable<HttpInfo<CartMergeCartsResponse>> {
        const requestContextPromise = this.requestFactory.mergeCarts(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mergeCartsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Merge carts
     * Merge Carts
     * @param body 
     */
    public mergeCarts(body: CartMergeCartsRequest, _options?: Configuration): Observable<CartMergeCartsResponse> {
        return this.mergeCartsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CartMergeCartsResponse>) => apiResponse.data));
    }

    /**
     * Remove products from the cart
     * Remove Products
     * @param body 
     */
    public removeProductsWithHttpInfo(body: CartRemoveProductsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.removeProducts(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeProductsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove products from the cart
     * Remove Products
     * @param body 
     */
    public removeProducts(body: CartRemoveProductsRequest, _options?: Configuration): Observable<any> {
        return this.removeProductsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Set additional info
     * Set Additional Info
     * @param body 
     */
    public setAdditionalInfoWithHttpInfo(body: CartSetAdditionalInfoRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.setAdditionalInfo(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setAdditionalInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set additional info
     * Set Additional Info
     * @param body 
     */
    public setAdditionalInfo(body: CartSetAdditionalInfoRequest, _options?: Configuration): Observable<any> {
        return this.setAdditionalInfoWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Set notes
     * Set Notes
     * @param body 
     */
    public setNotesWithHttpInfo(body: CartSetNotesRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.setNotes(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setNotesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set notes
     * Set Notes
     * @param body 
     */
    public setNotes(body: CartSetNotesRequest, _options?: Configuration): Observable<any> {
        return this.setNotesWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Trigger realignment
     * Trigger Realignment
     * @param body 
     */
    public triggerRealignmentWithHttpInfo(body: CartTriggerRealignmentRequest, _options?: Configuration): Observable<HttpInfo<CartTriggerRealignmentResponse>> {
        const requestContextPromise = this.requestFactory.triggerRealignment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.triggerRealignmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Trigger realignment
     * Trigger Realignment
     * @param body 
     */
    public triggerRealignment(body: CartTriggerRealignmentRequest, _options?: Configuration): Observable<CartTriggerRealignmentResponse> {
        return this.triggerRealignmentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CartTriggerRealignmentResponse>) => apiResponse.data));
    }

    /**
     * Update the cart
     * Update Cart
     * @param body 
     */
    public updateCartWithHttpInfo(body: CartUpdateCartRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updateCart(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCartWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the cart
     * Update Cart
     * @param body 
     */
    public updateCart(body: CartUpdateCartRequest, _options?: Configuration): Observable<any> {
        return this.updateCartWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Update products in the cart
     * Update Products
     * @param body 
     */
    public updateProductsWithHttpInfo(body: CartUpdateProductsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updateProducts(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update products in the cart
     * Update Products
     * @param body 
     */
    public updateProducts(body: CartUpdateProductsRequest, _options?: Configuration): Observable<any> {
        return this.updateProductsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { CartApiRequestFactory, CartApiResponseProcessor} from "../apis/CartApi";
export class ObservableCartApi {
    private requestFactory: CartApiRequestFactory;
    private responseProcessor: CartApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CartApiRequestFactory,
        responseProcessor?: CartApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CartApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CartApiResponseProcessor();
    }

    /**
     * @param body 
     */
    public cartSetCustomPriceOnItemsWithHttpInfo(body: CartSetCustomPriceOnItemsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.cartSetCustomPriceOnItems(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cartSetCustomPriceOnItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public cartSetCustomPriceOnItems(body: CartSetCustomPriceOnItemsRequest, _options?: Configuration): Observable<any> {
        return this.cartSetCustomPriceOnItemsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor} from "../apis/PaymentsApi";
export class ObservablePaymentsApi {
    private requestFactory: PaymentsApiRequestFactory;
    private responseProcessor: PaymentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentsApiRequestFactory,
        responseProcessor?: PaymentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentsApiResponseProcessor();
    }

    /**
     * List payment methods
     * List Payment Methods
     * @param body 
     */
    public listPaymentMethodsWithHttpInfo(body: CartListPaymentMethodsRequest, _options?: Configuration): Observable<HttpInfo<CartListPaymentMethodsResponse>> {
        const requestContextPromise = this.requestFactory.listPaymentMethods(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPaymentMethodsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List payment methods
     * List Payment Methods
     * @param body 
     */
    public listPaymentMethods(body: CartListPaymentMethodsRequest, _options?: Configuration): Observable<CartListPaymentMethodsResponse> {
        return this.listPaymentMethodsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CartListPaymentMethodsResponse>) => apiResponse.data));
    }

    /**
     * Set SetPayments
     * Set SetPayments
     * @param body 
     */
    public setSetPaymentsWithHttpInfo(body: CartSetPaymentsRequest, _options?: Configuration): Observable<HttpInfo<CartSetPaymentsResponse>> {
        const requestContextPromise = this.requestFactory.setSetPayments(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setSetPaymentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set SetPayments
     * Set SetPayments
     * @param body 
     */
    public setSetPayments(body: CartSetPaymentsRequest, _options?: Configuration): Observable<CartSetPaymentsResponse> {
        return this.setSetPaymentsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CartSetPaymentsResponse>) => apiResponse.data));
    }

}

import { PromotionsApiRequestFactory, PromotionsApiResponseProcessor} from "../apis/PromotionsApi";
export class ObservablePromotionsApi {
    private requestFactory: PromotionsApiRequestFactory;
    private responseProcessor: PromotionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PromotionsApiRequestFactory,
        responseProcessor?: PromotionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PromotionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PromotionsApiResponseProcessor();
    }

    /**
     * Apply coupons to the cart
     * Apply Coupons
     * @param body 
     */
    public applyCouponsWithHttpInfo(body: CartApplyCouponsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.applyCoupons(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyCouponsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Apply coupons to the cart
     * Apply Coupons
     * @param body 
     */
    public applyCoupons(body: CartApplyCouponsRequest, _options?: Configuration): Observable<any> {
        return this.applyCouponsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Remove coupons from the cart
     * Remove Coupons
     * @param body 
     */
    public removeCouponsWithHttpInfo(body: CartRemoveCouponsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.removeCoupons(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeCouponsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove coupons from the cart
     * Remove Coupons
     * @param body 
     */
    public removeCoupons(body: CartRemoveCouponsRequest, _options?: Configuration): Observable<any> {
        return this.removeCouponsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { ShipmentsApiRequestFactory, ShipmentsApiResponseProcessor} from "../apis/ShipmentsApi";
export class ObservableShipmentsApi {
    private requestFactory: ShipmentsApiRequestFactory;
    private responseProcessor: ShipmentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ShipmentsApiRequestFactory,
        responseProcessor?: ShipmentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ShipmentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ShipmentsApiResponseProcessor();
    }

    /**
     * List shipment methods
     * List Shipment Methods
     * @param body 
     */
    public listShipmentMethodsWithHttpInfo(body: CartListShipmentMethodsRequest, _options?: Configuration): Observable<HttpInfo<CartListShipmentMethodsResponse>> {
        const requestContextPromise = this.requestFactory.listShipmentMethods(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listShipmentMethodsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List shipment methods
     * List Shipment Methods
     * @param body 
     */
    public listShipmentMethods(body: CartListShipmentMethodsRequest, _options?: Configuration): Observable<CartListShipmentMethodsResponse> {
        return this.listShipmentMethodsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CartListShipmentMethodsResponse>) => apiResponse.data));
    }

    /**
     * Set shipments
     * Set Shipments
     * @param body 
     */
    public setShipmentsWithHttpInfo(body: CartSetShipmentsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.setShipments(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setShipmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set shipments
     * Set Shipments
     * @param body 
     */
    public setShipments(body: CartSetShipmentsRequest, _options?: Configuration): Observable<any> {
        return this.setShipmentsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}
