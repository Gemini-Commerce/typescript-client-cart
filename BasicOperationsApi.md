# .BasicOperationsApi

All URIs are relative to *https://cart.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProducts**](BasicOperationsApi.md#addProducts) | **POST** /cart.Cart/AddProducts | Add Products
[**createCart**](BasicOperationsApi.md#createCart) | **POST** /cart.Cart/CreateCart | Create Cart
[**getActiveCartByCustomer**](BasicOperationsApi.md#getActiveCartByCustomer) | **POST** /cart.Cart/GetActiveCartByCustomer | Get Active Cart By Customer
[**getCart**](BasicOperationsApi.md#getCart) | **POST** /cart.Cart/GetCart | Get Cart
[**listCarts**](BasicOperationsApi.md#listCarts) | **POST** /cart.Cart/ListCarts | List Carts
[**mergeCarts**](BasicOperationsApi.md#mergeCarts) | **POST** /cart.Cart/MergeCarts | Merge Carts
[**removeProducts**](BasicOperationsApi.md#removeProducts) | **POST** /cart.Cart/RemoveProducts | Remove Products
[**setAdditionalInfo**](BasicOperationsApi.md#setAdditionalInfo) | **POST** /cart.Cart/SetAdditionalInfo | Set Additional Info
[**setNotes**](BasicOperationsApi.md#setNotes) | **POST** /cart.Cart/SetNotes | Set Notes
[**triggerRealignment**](BasicOperationsApi.md#triggerRealignment) | **POST** /cart.Cart/TriggerRealignment | Trigger Realignment
[**updateCart**](BasicOperationsApi.md#updateCart) | **POST** /cart.Cart/UpdateCart | Update Cart
[**updateProducts**](BasicOperationsApi.md#updateProducts) | **POST** /cart.Cart/UpdateProducts | Update Products


# **addProducts**
> CartAddProductsResponse addProducts(body)

This endpoint allows you to add products to a shopping cart. The AddProducts method enables you to specify the tenantId and cartId to identify the target shopping cart, and provide a list of items to be added.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiAddProductsRequest = {
  // CartAddProductsRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
    items: [
      {
        productGrn: "productGrn_example",
        quantity: 1,
        configurationSelections: [
          {
            stepGrn: "stepGrn_example",
            options: [
              {
                grn: "grn_example",
                quantity: 1,
              },
            ],
          },
        ],
      },
    ],
  },
};

apiInstance.addProducts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartAddProductsRequest**|  |


### Return type

**CartAddProductsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCart**
> CartCreateCartResponse createCart(body)

The CreateCart endpoint allows users to create a new cart for their shopping session. By making a request to this endpoint, users can initiate a new cart and obtain a unique identifier for future cart operations. This endpoint enables seamless cart management and provides a foundation for adding products and performing checkout operations.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiCreateCartRequest = {
  // CartCreateCartRequest
  body: {
    tenantId: "tenantId_example",
    channel: "channel_example",
    market: "market_example",
    locale: "locale_example",
    customerGrn: "customerGrn_example",
    currency: "XXX",
  },
};

apiInstance.createCart(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartCreateCartRequest**|  |


### Return type

**CartCreateCartResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getActiveCartByCustomer**
> CartGetActiveCartByCustomerResponse getActiveCartByCustomer(body)

Get the active cart by customer

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiGetActiveCartByCustomerRequest = {
  // CartGetActiveCartByCustomerRequest
  body: {
    tenantId: "tenantId_example",
    customerGrn: "customerGrn_example",
    channel: "channel_example",
    market: "market_example",
    currency: "XXX",
  },
};

apiInstance.getActiveCartByCustomer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartGetActiveCartByCustomerRequest**|  |


### Return type

**CartGetActiveCartByCustomerResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCart**
> CartGetCartResponse getCart(body)

Get the cart

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiGetCartRequest = {
  // CartGetCartRequest | Get cart request
  body: {
    tenantId: "bf325375-e030-fccb-a009-17317c574773",
    cartId: "cartId_example",
  },
};

apiInstance.getCart(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartGetCartRequest**| Get cart request |


### Return type

**CartGetCartResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCarts**
> CartListCartsResponse listCarts(body)

List all carts

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiListCartsRequest = {
  // CartListCartsRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
    sorts: [
      {
        evaluationOrder: 1,
        field: "UNKNOWN",
        order: "DESC",
      },
    ],
    filterMask: "filterMask_example",
    filter: {
      searchTerms: [
        "searchTerms_example",
      ],
      customerEmails: [
        "customerEmails_example",
      ],
      customerFirstnames: [
        "customerFirstnames_example",
      ],
      customerLastnames: [
        "customerLastnames_example",
      ],
      customerPhones: [
        "customerPhones_example",
      ],
      cartIds: [
        "cartIds_example",
      ],
      cartStatus: "UNKNOWN",
      createdAt: [
        {
          _from: new Date('1970-01-01T00:00:00.00Z'),
          to: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      agentGrn: "agentGrn_example",
    },
  },
};

apiInstance.listCarts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartListCartsRequest**|  |


### Return type

**CartListCartsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **mergeCarts**
> CartMergeCartsResponse mergeCarts(body)

Merge carts

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiMergeCartsRequest = {
  // CartMergeCartsRequest
  body: {
    tenantId: "tenantId_example",
    sourceCartIds: [
      "sourceCartIds_example",
    ],
    targetCartId: "targetCartId_example",
  },
};

apiInstance.mergeCarts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartMergeCartsRequest**|  |


### Return type

**CartMergeCartsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeProducts**
> any removeProducts(body)

Remove products from the cart

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiRemoveProductsRequest = {
  // CartRemoveProductsRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
    itemIds: [
      "itemIds_example",
    ],
  },
};

apiInstance.removeProducts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartRemoveProductsRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setAdditionalInfo**
> any setAdditionalInfo(body)

Set additional info

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiSetAdditionalInfoRequest = {
  // CartSetAdditionalInfoRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
    productId: "productId_example",
    additionalInfo: "additionalInfo_example",
  },
};

apiInstance.setAdditionalInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartSetAdditionalInfoRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setNotes**
> any setNotes(body)

Set notes

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiSetNotesRequest = {
  // CartSetNotesRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
    notes: "notes_example",
  },
};

apiInstance.setNotes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartSetNotesRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **triggerRealignment**
> CartTriggerRealignmentResponse triggerRealignment(body)

Trigger realignment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiTriggerRealignmentRequest = {
  // CartTriggerRealignmentRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
  },
};

apiInstance.triggerRealignment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartTriggerRealignmentRequest**|  |


### Return type

**CartTriggerRealignmentResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCart**
> any updateCart(body)

Update the cart

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUpdateCartRequest = {
  // CartUpdateCartRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
    payload: {
      cartStatus: "UNKNOWN",
      customerData: {
        customerGrn: "customerGrn_example",
        firstname: "firstname_example",
        lastname: "lastname_example",
        email: "email_example",
        phoneNumber: "phoneNumber_example",
        groups: [
          "groups_example",
        ],
        taxCode: "taxCode_example",
        certifiedEmail: "certifiedEmail_example",
        sdiCode: "sdiCode_example",
        fiscalCode: "fiscalCode_example",
        companyName: "companyName_example",
        agentGrn: "agentGrn_example",
      },
      locale: "locale_example",
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.updateCart(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartUpdateCartRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProducts**
> any updateProducts(body)

Update products in the cart

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUpdateProductsRequest = {
  // CartUpdateProductsRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
    items: [
      {
        id: "id_example",
        quantity: 1,
        configurationSelections: [
          {
            stepGrn: "stepGrn_example",
            options: [
              {
                grn: "grn_example",
                quantity: 1,
              },
            ],
          },
        ],
      },
    ],
  },
};

apiInstance.updateProducts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartUpdateProductsRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


