# .CartApi

All URIs are relative to *https://cart.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cartSetCustomPriceOnItems**](CartApi.md#cartSetCustomPriceOnItems) | **POST** /cart.Cart/SetCustomPriceOnItems | 


# **cartSetCustomPriceOnItems**
> any cartSetCustomPriceOnItems(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CartApi(configuration);

let body:.CartApiCartSetCustomPriceOnItemsRequest = {
  // CartSetCustomPriceOnItemsRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
    cartItems: [
      {
        id: "id_example",
        freeOfCharge: true,
        unset: true,
        customPriceRow: {
          units: "units_example",
          micros: 1,
        },
        customPriceUnit: {
          units: "units_example",
          micros: 1,
        },
        discountPercentage: 3.14,
      },
    ],
  },
};

apiInstance.cartSetCustomPriceOnItems(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartSetCustomPriceOnItemsRequest**|  |


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
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


