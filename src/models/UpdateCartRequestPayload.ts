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
 * @interface UpdateCartRequestPayload
 */
export interface UpdateCartRequestPayload {
    /**
     * 
     * @type {CartCartStatus}
     * @memberof UpdateCartRequestPayload
     */
    'cartStatus'?: CartCartStatus;
    /**
     * 
     * @type {CartCustomerData}
     * @memberof UpdateCartRequestPayload
     */
    'customerData'?: CartCustomerData;
    /**
     * 
     * @type {string}
     * @memberof UpdateCartRequestPayload
     */
    'locale'?: string;
}
