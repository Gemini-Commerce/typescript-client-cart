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

import { HttpFile } from '../http/http';

/**
* Stands for Albania, not all ;-)
*/
export enum CartCurrency {
    Xxx = 'XXX',
    All = 'ALL',
    Dzd = 'DZD',
    Ars = 'ARS',
    Aud = 'AUD',
    Bsd = 'BSD',
    Bhd = 'BHD',
    Bdt = 'BDT',
    Amd = 'AMD',
    Bbd = 'BBD',
    Bmd = 'BMD',
    Btn = 'BTN',
    Bob = 'BOB',
    Bwp = 'BWP',
    Bzd = 'BZD',
    Sbd = 'SBD',
    Bnd = 'BND',
    Mmk = 'MMK',
    Bif = 'BIF',
    Khr = 'KHR',
    Cad = 'CAD',
    Cve = 'CVE',
    Kyd = 'KYD',
    Lkr = 'LKR',
    Clp = 'CLP',
    Cny = 'CNY',
    Cop = 'COP',
    Kmf = 'KMF',
    Crc = 'CRC',
    Hrk = 'HRK',
    Cup = 'CUP',
    Czk = 'CZK',
    Dkk = 'DKK',
    Dop = 'DOP',
    Svc = 'SVC',
    Etb = 'ETB',
    Ern = 'ERN',
    Fkp = 'FKP',
    Fjd = 'FJD',
    Djf = 'DJF',
    Gmd = 'GMD',
    Gip = 'GIP',
    Gtq = 'GTQ',
    Gnf = 'GNF',
    Gyd = 'GYD',
    Htg = 'HTG',
    Hnl = 'HNL',
    Hkd = 'HKD',
    Huf = 'HUF',
    Isk = 'ISK',
    Inr = 'INR',
    Idr = 'IDR',
    Irr = 'IRR',
    Iqd = 'IQD',
    Ils = 'ILS',
    Jmd = 'JMD',
    Jpy = 'JPY',
    Kzt = 'KZT',
    Jod = 'JOD',
    Kes = 'KES',
    Kpw = 'KPW',
    Krw = 'KRW',
    Kwd = 'KWD',
    Kgs = 'KGS',
    Lak = 'LAK',
    Lbp = 'LBP',
    Lsl = 'LSL',
    Lrd = 'LRD',
    Lyd = 'LYD',
    Ltl = 'LTL',
    Mop = 'MOP',
    Mwk = 'MWK',
    Myr = 'MYR',
    Mvr = 'MVR',
    Mro = 'MRO',
    Mur = 'MUR',
    Mxn = 'MXN',
    Mnt = 'MNT',
    Mdl = 'MDL',
    Mad = 'MAD',
    Omr = 'OMR',
    Nad = 'NAD',
    Npr = 'NPR',
    Ang = 'ANG',
    Awg = 'AWG',
    Vuv = 'VUV',
    Nzd = 'NZD',
    Nio = 'NIO',
    Ngn = 'NGN',
    Nok = 'NOK',
    Pkr = 'PKR',
    Pab = 'PAB',
    Pgk = 'PGK',
    Pyg = 'PYG',
    Pen = 'PEN',
    Php = 'PHP',
    Qar = 'QAR',
    Rub = 'RUB',
    Rwf = 'RWF',
    Shp = 'SHP',
    Std = 'STD',
    Sar = 'SAR',
    Scr = 'SCR',
    Sll = 'SLL',
    Sgd = 'SGD',
    Vnd = 'VND',
    Sos = 'SOS',
    Zar = 'ZAR',
    Ssp = 'SSP',
    Szl = 'SZL',
    Sek = 'SEK',
    Chf = 'CHF',
    Syp = 'SYP',
    Thb = 'THB',
    Top = 'TOP',
    Ttd = 'TTD',
    Aed = 'AED',
    Tnd = 'TND',
    Ugx = 'UGX',
    Mkd = 'MKD',
    Egp = 'EGP',
    Gbp = 'GBP',
    Tzs = 'TZS',
    Usd = 'USD',
    Uyu = 'UYU',
    Uzs = 'UZS',
    Wst = 'WST',
    Yer = 'YER',
    Twd = 'TWD',
    Cuc = 'CUC',
    Zwl = 'ZWL',
    Tmt = 'TMT',
    Ghs = 'GHS',
    Vef = 'VEF',
    Sdg = 'SDG',
    Uyi = 'UYI',
    Rsd = 'RSD',
    Mzn = 'MZN',
    Azn = 'AZN',
    Ron = 'RON',
    Che = 'CHE',
    Chw = 'CHW',
    Try = 'TRY',
    Xaf = 'XAF',
    Xcd = 'XCD',
    Xof = 'XOF',
    Xpf = 'XPF',
    Xba = 'XBA',
    Xbb = 'XBB',
    Xbc = 'XBC',
    Xbd = 'XBD',
    Xau = 'XAU',
    Xdr = 'XDR',
    Xag = 'XAG',
    Xpt = 'XPT',
    Xpd = 'XPD',
    Xua = 'XUA',
    Zmw = 'ZMW',
    Srd = 'SRD',
    Mga = 'MGA',
    Cou = 'COU',
    Afn = 'AFN',
    Tjs = 'TJS',
    Aoa = 'AOA',
    Byr = 'BYR',
    Bgn = 'BGN',
    Cdf = 'CDF',
    Bam = 'BAM',
    Eur = 'EUR',
    Mxv = 'MXV',
    Uah = 'UAH',
    Gel = 'GEL',
    Bov = 'BOV',
    Pln = 'PLN',
    Brl = 'BRL',
    Clf = 'CLF',
    Xsu = 'XSU',
    Usn = 'USN'
}
