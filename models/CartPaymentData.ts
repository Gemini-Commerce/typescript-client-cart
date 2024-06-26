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

import { CartLocalizedText } from '../models/CartLocalizedText';
import { CartMoney } from '../models/CartMoney';
import { HttpFile } from '../http/http';

export class CartPaymentData {
    'code'?: string;
    'title'?: CartLocalizedText;
    'payload'?: string;
    'fee'?: CartMoney;
    'amount'?: CartMoney;
    'label'?: CartLocalizedText;
    'description'?: CartLocalizedText;
    'vatAmount'?: CartMoney;
    'vatPercentage'?: number;
    'vatInaccurate'?: boolean;
    'vatCalculated'?: boolean;
    'isUpfront'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "CartLocalizedText",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "string",
            "format": ""
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "CartMoney",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "CartMoney",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "CartLocalizedText",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "CartLocalizedText",
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
        },
        {
            "name": "isUpfront",
            "baseName": "isUpfront",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CartPaymentData.attributeTypeMap;
    }

    public constructor() {
    }
}

