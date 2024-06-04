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
 */
export const CartSubtotalCode = {
    Unknown: 'UNKNOWN',
    Payment: 'PAYMENT',
    Shipment: 'SHIPMENT',
    Tax: 'TAX',
    Items: 'ITEMS',
    Discount: 'DISCOUNT'
} as const;
export type CartSubtotalCode = typeof CartSubtotalCode[keyof typeof CartSubtotalCode];


export function CartSubtotalCodeFromJSON(json: any): CartSubtotalCode {
    return CartSubtotalCodeFromJSONTyped(json, false);
}

export function CartSubtotalCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartSubtotalCode {
    return json as CartSubtotalCode;
}

export function CartSubtotalCodeToJSON(value?: CartSubtotalCode | null): any {
    return value as any;
}

