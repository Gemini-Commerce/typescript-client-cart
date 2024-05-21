# .PaymentsApi

All URIs are relative to *https://cart.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPaymentMethods**](PaymentsApi.md#listPaymentMethods) | **POST** /cart.Cart/ListPaymentMethods | List Payment Methods
[**setSetPayments**](PaymentsApi.md#setSetPayments) | **POST** /cart.Cart/SetPayments | Set SetPayments


# **listPaymentMethods**
> CartListPaymentMethodsResponse listPaymentMethods(body)

List payment methods

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentsApi(configuration);

let body:.PaymentsApiListPaymentMethodsRequest = {
  // CartListPaymentMethodsRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
  },
};

apiInstance.listPaymentMethods(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartListPaymentMethodsRequest**|  |


### Return type

**CartListPaymentMethodsResponse**

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

# **setSetPayments**
> CartSetPaymentsResponse setSetPayments(body)

Set SetPayments

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PaymentsApi(configuration);

let body:.PaymentsApiSetSetPaymentsRequest = {
  // CartSetPaymentsRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
    payments: [
      {
        code: "code_example",
        title: {
          value: {
            "key": "key_example",
          },
        },
        payload: "payload_example",
        fee: {
          units: "units_example",
          micros: 1,
        },
        amount: {
          units: "units_example",
          micros: 1,
        },
        label: {
          value: {
            "key": "key_example",
          },
        },
        description: {
          value: {
            "key": "key_example",
          },
        },
        vatAmount: {
          units: "units_example",
          micros: 1,
        },
        vatPercentage: 3.14,
        vatInaccurate: true,
        vatCalculated: true,
        isUpfront: true,
      },
    ],
  },
};

apiInstance.setSetPayments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartSetPaymentsRequest**|  |


### Return type

**CartSetPaymentsResponse**

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


