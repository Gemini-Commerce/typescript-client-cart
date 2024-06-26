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

import { HttpFile } from '../http/http';

export class CartSetAdditionalInfoRequest {
    'tenantId'?: string;
    'cartId'?: string;
    'productId'?: string;
    'additionalInfo'?: string;

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
            "name": "productId",
            "baseName": "productId",
            "type": "string",
            "format": ""
        },
        {
            "name": "additionalInfo",
            "baseName": "additionalInfo",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CartSetAdditionalInfoRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

