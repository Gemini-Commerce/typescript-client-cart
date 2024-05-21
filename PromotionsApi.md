# .PromotionsApi

All URIs are relative to *https://cart.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applyCoupons**](PromotionsApi.md#applyCoupons) | **POST** /cart.Cart/ApplyCoupons | Apply Coupons
[**removeCoupons**](PromotionsApi.md#removeCoupons) | **POST** /cart.Cart/RemoveCoupons | Remove Coupons


# **applyCoupons**
> any applyCoupons(body)

Apply coupons to the cart

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PromotionsApi(configuration);

let body:.PromotionsApiApplyCouponsRequest = {
  // CartApplyCouponsRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
    couponCodes: [
      "couponCodes_example",
    ],
  },
};

apiInstance.applyCoupons(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartApplyCouponsRequest**|  |


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

# **removeCoupons**
> any removeCoupons(body)

Remove coupons from the cart

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PromotionsApi(configuration);

let body:.PromotionsApiRemoveCouponsRequest = {
  // CartRemoveCouponsRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
    couponCodes: [
      "couponCodes_example",
    ],
  },
};

apiInstance.removeCoupons(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartRemoveCouponsRequest**|  |


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


