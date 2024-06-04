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
 * @interface CartProductConfigurationStep
 */
export interface CartProductConfigurationStep {
    /**
     * 
     * @type {string}
     * @memberof CartProductConfigurationStep
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof CartProductConfigurationStep
     */
    'grn'?: string;
    /**
     * 
     * @type {CartLocalizedText}
     * @memberof CartProductConfigurationStep
     */
    'label'?: CartLocalizedText;
    /**
     * 
     * @type {CartLocalizedText}
     * @memberof CartProductConfigurationStep
     */
    'description'?: CartLocalizedText;
    /**
     * 
     * @type {Array<CartProductConfigurationStepOption>}
     * @memberof CartProductConfigurationStep
     */
    'options'?: Array<CartProductConfigurationStepOption>;
}
