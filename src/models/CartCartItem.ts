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
 * @interface CartCartItem
 */
export interface CartCartItem {
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    'productGrn'?: string;
    /**
     * 
     * @type {Array<CartProductConfigurationStep>}
     * @memberof CartCartItem
     */
    'productConfiguration'?: Array<CartProductConfigurationStep>;
    /**
     * 
     * @type {number}
     * @memberof CartCartItem
     */
    'quantity'?: number;
    /**
     * 
     * @type {CartMoney}
     * @memberof CartCartItem
     */
    'price'?: CartMoney;
    /**
     * 
     * @type {CartMoney}
     * @memberof CartCartItem
     */
    'listPrice'?: CartMoney;
    /**
     * 
     * @type {CartMoney}
     * @memberof CartCartItem
     */
    'discount'?: CartMoney;
    /**
     * 
     * @type {CartMoney}
     * @memberof CartCartItem
     */
    'basePrice'?: CartMoney;
    /**
     * 
     * @type {CartItemCustomPrice}
     * @memberof CartCartItem
     */
    'customPrice'?: CartItemCustomPrice;
    /**
     * 
     * @type {CartMoney}
     * @memberof CartCartItem
     */
    'vatAmount'?: CartMoney;
    /**
     * 
     * @type {number}
     * @memberof CartCartItem
     */
    'vatPercentage'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CartCartItem
     */
    'vatInaccurate'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CartCartItem
     */
    'vatCalculated'?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CartCartItem
     */
    'localizedName'?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    'productCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    'productSku'?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    'imageGrn'?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    'variantOptions'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CartCartItem
     */
    'isVirtual'?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof CartCartItem
     */
    'promotionGrns'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    'additionalInfo'?: string;
    /**
     * 
     * @type {string}
     * @memberof CartCartItem
     */
    'productData'?: string;
}