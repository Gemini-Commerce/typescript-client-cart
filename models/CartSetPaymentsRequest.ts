/**
 * Cart Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CartPaymentData } from '../models/CartPaymentData';
import { HttpFile } from '../http/http';

export class CartSetPaymentsRequest {
    'tenantId'?: string;
    'cartId'?: string;
    'payments'?: Array<CartPaymentData>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "cartId",
            "baseName": "cartId",
            "type": "string",
            "format": ""
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<CartPaymentData>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CartSetPaymentsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

