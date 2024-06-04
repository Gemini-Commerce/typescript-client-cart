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

import { ListCartsRequestFilterCartStatus } from '../models/ListCartsRequestFilterCartStatus';
import { ListCartsRequestFilterDate } from '../models/ListCartsRequestFilterDate';
import { HttpFile } from '../http/http';

export class ListCartsRequestFilter {
    'searchTerms'?: Array<string>;
    'customerEmails'?: Array<string>;
    'customerFirstnames'?: Array<string>;
    'customerLastnames'?: Array<string>;
    'customerPhones'?: Array<string>;
    'cartIds'?: Array<string>;
    'cartStatus'?: ListCartsRequestFilterCartStatus;
    'createdAt'?: Array<ListCartsRequestFilterDate>;
    'agentGrn'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "searchTerms",
            "baseName": "searchTerms",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "customerEmails",
            "baseName": "customerEmails",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "customerFirstnames",
            "baseName": "customerFirstnames",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "customerLastnames",
            "baseName": "customerLastnames",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "customerPhones",
            "baseName": "customerPhones",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "cartIds",
            "baseName": "cartIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "cartStatus",
            "baseName": "cartStatus",
            "type": "ListCartsRequestFilterCartStatus",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Array<ListCartsRequestFilterDate>",
            "format": ""
        },
        {
            "name": "agentGrn",
            "baseName": "agentGrn",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListCartsRequestFilter.attributeTypeMap;
    }

    public constructor() {
    }
}



