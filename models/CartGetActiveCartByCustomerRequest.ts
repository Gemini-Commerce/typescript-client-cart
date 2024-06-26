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

import { CartCurrency } from '../models/CartCurrency';
import { HttpFile } from '../http/http';

export class CartGetActiveCartByCustomerRequest {
    'tenantId'?: string;
    'customerGrn'?: string;
    'channel'?: string;
    'market'?: string;
    'currency'?: CartCurrency;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerGrn",
            "baseName": "customerGrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string",
            "format": ""
        },
        {
            "name": "market",
            "baseName": "market",
            "type": "string",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "CartCurrency",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CartGetActiveCartByCustomerRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



