/* tslint:disable */
/* eslint-disable */
/**
 * Cart Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @interface CartAddProductsRequest
 */
export interface CartAddProductsRequest {
    /**
     * 
     * @type {string}
     * @memberof CartAddProductsRequest
     */
    'tenantId'?: string;
    /**
     * 
     * @type {string}
     * @memberof CartAddProductsRequest
     */
    'cartId'?: string;
    /**
     * 
     * @type {Array<CartAddProductsRequestItem>}
     * @memberof CartAddProductsRequest
     */
    'items'?: Array<CartAddProductsRequestItem>;
}
