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

import { CartMoney } from '../models/CartMoney';
import { HttpFile } from '../http/http';

export class CartShipmentData {
    'code'?: string;
    'method'?: string;
    'shipmentGrn'?: string;
    'payload'?: string;
    'cartItemIds'?: Array<string>;
    'fee'?: CartMoney;
    'label'?: string;
    'vatAmount'?: CartMoney;
    'vatPercentage'?: number;
    'vatInaccurate'?: boolean;
    'vatCalculated'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string",
            "format": ""
        },
        {
            "name": "shipmentGrn",
            "baseName": "shipmentGrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "string",
            "format": ""
        },
        {
            "name": "cartItemIds",
            "baseName": "cartItemIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "CartMoney",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "vatAmount",
            "baseName": "vatAmount",
            "type": "CartMoney",
            "format": ""
        },
        {
            "name": "vatPercentage",
            "baseName": "vatPercentage",
            "type": "number",
            "format": "float"
        },
        {
            "name": "vatInaccurate",
            "baseName": "vatInaccurate",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "vatCalculated",
            "baseName": "vatCalculated",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CartShipmentData.attributeTypeMap;
    }

    public constructor() {
    }
}

