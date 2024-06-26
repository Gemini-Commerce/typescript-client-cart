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

import { CartShipmentData } from '../models/CartShipmentData';
import { HttpFile } from '../http/http';

export class CartSetShipmentsRequest {
    'tenantId'?: string;
    'cartId'?: string;
    'shipments'?: Array<CartShipmentData>;

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
            "name": "shipments",
            "baseName": "shipments",
            "type": "Array<CartShipmentData>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CartSetShipmentsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

