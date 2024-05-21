# .ShipmentsApi

All URIs are relative to *https://cart.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listShipmentMethods**](ShipmentsApi.md#listShipmentMethods) | **POST** /cart.Cart/ListShipmentMethods | List Shipment Methods
[**setShipments**](ShipmentsApi.md#setShipments) | **POST** /cart.Cart/SetShipments | Set Shipments


# **listShipmentMethods**
> CartListShipmentMethodsResponse listShipmentMethods(body)

List shipment methods

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ShipmentsApi(configuration);

let body:.ShipmentsApiListShipmentMethodsRequest = {
  // CartListShipmentMethodsRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
  },
};

apiInstance.listShipmentMethods(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartListShipmentMethodsRequest**|  |


### Return type

**CartListShipmentMethodsResponse**

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

# **setShipments**
> any setShipments(body)

Set shipments

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ShipmentsApi(configuration);

let body:.ShipmentsApiSetShipmentsRequest = {
  // CartSetShipmentsRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
    shipments: [
      {
        code: "code_example",
        method: "method_example",
        shipmentGrn: "shipmentGrn_example",
        payload: "payload_example",
        cartItemIds: [
          "cartItemIds_example",
        ],
        fee: {
          units: "units_example",
          micros: 1,
        },
        label: "label_example",
        vatAmount: {
          units: "units_example",
          micros: 1,
        },
        vatPercentage: 3.14,
        vatInaccurate: true,
        vatCalculated: true,
      },
    ],
  },
};

apiInstance.setShipments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartSetShipmentsRequest**|  |


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
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


