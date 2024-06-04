# .AddressesApi

All URIs are relative to *https://cart.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**setBillingAddress**](AddressesApi.md#setBillingAddress) | **POST** /cart.Cart/SetBillingAddress | Set Billing Address
[**setShipmentAddress**](AddressesApi.md#setShipmentAddress) | **POST** /cart.Cart/SetShipmentAddress | Set Shipment Address


# **setBillingAddress**
> any setBillingAddress(body)

Set billing address

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AddressesApi(configuration);

let body:.AddressesApiSetBillingAddressRequest = {
  // CartSetBillingAddressRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
    address: {
      revision: 1,
      regionCode: "regionCode_example",
      languageCode: "languageCode_example",
      postalCode: "postalCode_example",
      sortingCode: "sortingCode_example",
      administrativeArea: "administrativeArea_example",
      locality: "locality_example",
      sublocality: "sublocality_example",
      addressLines: [
        "addressLines_example",
      ],
      recipients: [
        "recipients_example",
      ],
      organization: "organization_example",
      phoneNumber: "phoneNumber_example",
      additionalInfo: {},
    },
  },
};

apiInstance.setBillingAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartSetBillingAddressRequest**|  |


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

# **setShipmentAddress**
> any setShipmentAddress(body)

Set shipment address

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AddressesApi(configuration);

let body:.AddressesApiSetShipmentAddressRequest = {
  // CartSetShipmentAddressRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
    address: {
      revision: 1,
      regionCode: "regionCode_example",
      languageCode: "languageCode_example",
      postalCode: "postalCode_example",
      sortingCode: "sortingCode_example",
      administrativeArea: "administrativeArea_example",
      locality: "locality_example",
      sublocality: "sublocality_example",
      addressLines: [
        "addressLines_example",
      ],
      recipients: [
        "recipients_example",
      ],
      organization: "organization_example",
      phoneNumber: "phoneNumber_example",
      additionalInfo: {},
    },
  },
};

apiInstance.setShipmentAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CartSetShipmentAddressRequest**|  |


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


