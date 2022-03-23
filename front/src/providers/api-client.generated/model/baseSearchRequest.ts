/**
 * API template
 * API template description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface BaseSearchRequest { 
    /**
     * The start of the request
     */
    start?: number;
    /**
     * The length of the request
     */
    length?: number;
    /**
     * order by field
     */
    orderby?: string;
    /**
     * order direction (asc | desc)
     */
    order?: string;
    /**
     * Search
     */
    search?: string;
}

