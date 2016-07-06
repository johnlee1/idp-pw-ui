(function () {
    'use strict';

    angular
      .module('password.recovery')
      .factory('countryService', countryService);

    function countryService() {
        var countries = null,
            service = {
                getCountries: getCountries
            };

        activate();

        return service;

        ///////////////////////////////////////////////////////////////////////

        function activate() {
            countries = [
                {
                    code: 'US',
                    name: 'United States',
                    prefix: 1
                },
                {
                    code: 'AF',
                    name: 'Afghanistan',
                    prefix: 93
                },
                {
                    code: 'AL',
                    name: 'Albania',
                    prefix: 355
                },
                {
                    code: 'DZ',
                    name: 'Algeria',
                    prefix: 213
                },
                {
                    code: 'AS',
                    name: 'American Samoa',
                    prefix: 1684
                },
                {
                    code: 'AD',
                    name: 'Andorra',
                    prefix: 376
                },
                {
                    code: 'AO',
                    name: 'Angola',
                    prefix: 244
                },
                {
                    code: 'AI',
                    name: 'Anguilla',
                    prefix: 1264
                },
                {
                    code: 'AG',
                    name: 'Antigua and Barbuda',
                    prefix: 1268
                },
                {
                    code: 'AR',
                    name: 'Argentina',
                    prefix: 54
                },
                {
                    code: 'AM',
                    name: 'Armenia',
                    prefix: 374
                },
                {
                    code: 'AW',
                    name: 'Aruba',
                    prefix: 297
                },
                {
                    code: 'AU',
                    name: 'Australia',
                    prefix: 61
                },
                {
                    code: 'AT',
                    name: 'Austria',
                    prefix: 43
                },
                {
                    code: 'AZ',
                    name: 'Azerbaijan',
                    prefix: 994
                },
                {
                    code: 'BS',
                    name: 'Bahamas',
                    prefix: 1242
                },
                {
                    code: 'BH',
                    name: 'Bahrain',
                    prefix: 973
                },
                {
                    code: 'BD',
                    name: 'Bangladesh',
                    prefix: 880
                },
                {
                    code: 'BB',
                    name: 'Barbados',
                    prefix: 1246
                },
                {
                    code: 'BY',
                    name: 'Belarus',
                    prefix: 375
                },
                {
                    code: 'BE',
                    name: 'Belgium',
                    prefix: 32
                },
                {
                    code: 'BZ',
                    name: 'Belize',
                    prefix: 501
                },
                {
                    code: 'BJ',
                    name: 'Benin',
                    prefix: 229
                },
                {
                    code: 'BM',
                    name: 'Bermuda',
                    prefix: 1441
                },
                {
                    code: 'BT',
                    name: 'Bhutan',
                    prefix: 975
                },
                {
                    code: 'BO',
                    name: 'Bolivia',
                    prefix: 591
                },
                {
                    code: 'BQ',
                    name: 'Bonaire, Sint Eustatius and Saba',
                    prefix: 599
                },
                {
                    code: 'BA',
                    name: 'Bosnia and Herzegovina',
                    prefix: 387
                },
                {
                    code: 'BW',
                    name: 'Botswana',
                    prefix: 267
                },
                {
                    code: 'BR',
                    name: 'Brazil',
                    prefix: 55
                },
                {
                    code: 'BN',
                    name: 'Brunei',
                    prefix: 673
                },
                {
                    code: 'BG',
                    name: 'Bulgaria',
                    prefix: 359
                },
                {
                    code: 'BF',
                    name: 'Burkina Faso',
                    prefix: 226
                },
                {
                    code: 'BI',
                    name: 'Burundi',
                    prefix: 257
                },
                {
                    code: 'KH',
                    name: 'Cambodia',
                    prefix: 855
                },
                {
                    code: 'CM',
                    name: 'Cameroon',
                    prefix: 237
                },
                {
                    code: 'CA',
                    name: 'Canada',
                    prefix: 1
                },
                {
                    code: 'CV',
                    name: 'Cape Verde',
                    prefix: 238
                },
                {
                    code: 'KY',
                    name: 'Cayman Islands',
                    prefix: 1345
                },
                {
                    code: 'CF',
                    name: 'Central African Republic',
                    prefix: 236
                },
                {
                    code: 'TD',
                    name: 'Chad',
                    prefix: 235
                },
                {
                    code: 'CL',
                    name: 'Chile',
                    prefix: 56
                },
                {
                    code: 'CN',
                    name: 'China',
                    prefix: 86
                },
                {
                    code: 'CO',
                    name: 'Colombia',
                    prefix: 57
                },
                {
                    code: 'KM',
                    name: 'Comoros',
                    prefix: 269
                },
                {
                    code: 'CK',
                    name: 'Cook Islands',
                    prefix: 682
                },
                {
                    code: 'CR',
                    name: 'Costa Rica',
                    prefix: 506
                },
                {
                    code: 'HR',
                    name: 'Croatia',
                    prefix: 385
                },
                {
                    code: 'CU',
                    name: 'Cuba',
                    prefix: 53
                },
                {
                    code: 'CW',
                    name: 'Curacao',
                    prefix: 599
                },
                {
                    code: 'CY',
                    name: 'Cyprus',
                    prefix: 357
                },
                {
                    code: 'CZ',
                    name: 'Czech Republic',
                    prefix: 420
                },
                {
                    code: 'CD',
                    name: 'Democratic Republic of the Congo',
                    prefix: 243
                },
                {
                    code: 'DK',
                    name: 'Denmark',
                    prefix: 45
                },
                {
                    code: 'DJ',
                    name: 'Djibouti',
                    prefix: 253
                },
                {
                    code: 'DM',
                    name: 'Dominica',
                    prefix: 1767
                },
                {
                    code: 'DO',
                    name: 'Dominican Republic',
                    prefix: 1809
                },
                {
                    code: 'TL',
                    name: 'East Timor',
                    prefix: 670
                },
                {
                    code: 'EC',
                    name: 'Ecuador',
                    prefix: 593
                },
                {
                    code: 'EG',
                    name: 'Egypt',
                    prefix: 20
                },
                {
                    code: 'SV',
                    name: 'El Salvador',
                    prefix: 503
                },
                {
                    code: 'GQ',
                    name: 'Equatorial Guinea',
                    prefix: 240
                },
                {
                    code: 'EE',
                    name: 'Estonia',
                    prefix: 372
                },
                {
                    code: 'ET',
                    name: 'Ethiopia',
                    prefix: 251
                },
                {
                    code: 'FO',
                    name: 'Faroe Islands',
                    prefix: 298
                },
                {
                    code: 'FJ',
                    name: 'Fiji',
                    prefix: 679
                },
                {
                    code: 'FI',
                    name: 'Finland',
                    prefix: 358
                },
                {
                    code: 'FR',
                    name: 'France',
                    prefix: 33
                },
                {
                    code: 'GF',
                    name: 'French Guiana',
                    prefix: 594
                },
                {
                    code: 'PF',
                    name: 'French Polynesia',
                    prefix: 689
                },
                {
                    code: 'GA',
                    name: 'Gabon',
                    prefix: 241
                },
                {
                    code: 'GM',
                    name: 'Gambia',
                    prefix: 220
                },
                {
                    code: 'GE',
                    name: 'Georgia',
                    prefix: 995
                },
                {
                    code: 'DE',
                    name: 'Germany',
                    prefix: 49
                },
                {
                    code: 'GH',
                    name: 'Ghana',
                    prefix: 233
                },
                {
                    code: 'GI',
                    name: 'Gibraltar',
                    prefix: 350
                },
                {
                    code: 'GR',
                    name: 'Greece',
                    prefix: 30
                },
                {
                    code: 'GL',
                    name: 'Greenland',
                    prefix: 299
                },
                {
                    code: 'GD',
                    name: 'Grenada',
                    prefix: 1473
                },
                {
                    code: 'GP',
                    name: 'Guadeloupe',
                    prefix: 590
                },
                {
                    code: 'GU',
                    name: 'Guam',
                    prefix: 1671
                },
                {
                    code: 'GT',
                    name: 'Guatemala',
                    prefix: 502
                },
                {
                    code: 'GN',
                    name: 'Guinea',
                    prefix: 224
                },
                {
                    code: 'GW',
                    name: 'Guinea-Bissau',
                    prefix: 245
                },
                {
                    code: 'GY',
                    name: 'Guyana',
                    prefix: 592
                },
                {
                    code: 'HT',
                    name: 'Haiti',
                    prefix: 509
                },
                {
                    code: 'HN',
                    name: 'Honduras',
                    prefix: 504
                },
                {
                    code: 'HK',
                    name: 'Hong Kong',
                    prefix: 852
                },
                {
                    code: 'HU',
                    name: 'Hungary',
                    prefix: 36
                },
                {
                    code: 'IS',
                    name: 'Iceland',
                    prefix: 354
                },
                {
                    code: 'IN',
                    name: 'India',
                    prefix: 91
                },
                {
                    code: 'ID',
                    name: 'Indonesia',
                    prefix: 62
                },
                {
                    code: 'IR',
                    name: 'Iran',
                    prefix: 98
                },
                {
                    code: 'IQ',
                    name: 'Iraq',
                    prefix: 964
                },
                {
                    code: 'IE',
                    name: 'Ireland',
                    prefix: 353
                },
                {
                    code: 'IL',
                    name: 'Israel',
                    prefix: 972
                },
                {
                    code: 'IT',
                    name: 'Italy',
                    prefix: 39
                },
                {
                    code: 'CI',
                    name: 'Ivory Coast',
                    prefix: 225
                },
                {
                    code: 'JM',
                    name: 'Jamaica',
                    prefix: 1876
                },
                {
                    code: 'JP',
                    name: 'Japan',
                    prefix: 81
                },
                {
                    code: 'JO',
                    name: 'Jordan',
                    prefix: 962
                },
                {
                    code: 'KZ',
                    name: 'Kazakhstan',
                    prefix: 7
                },
                {
                    code: 'KE',
                    name: 'Kenya',
                    prefix: 254
                },
                {
                    code: 'KI',
                    name: 'Kiribati',
                    prefix: 686
                },
                {
                    code: 'KW',
                    name: 'Kuwait',
                    prefix: 965
                },
                {
                    code: 'KG',
                    name: 'Kyrgyzstan',
                    prefix: 996
                },
                {
                    code: 'LA',
                    name: 'Laos',
                    prefix: 856
                },
                {
                    code: 'LV',
                    name: 'Latvia',
                    prefix: 371
                },
                {
                    code: 'LB',
                    name: 'Lebanon',
                    prefix: 961
                },
                {
                    code: 'LS',
                    name: 'Lesotho',
                    prefix: 266
                },
                {
                    code: 'LR',
                    name: 'Liberia',
                    prefix: 231
                },
                {
                    code: 'LY',
                    name: 'Libya',
                    prefix: 218
                },
                {
                    code: 'LI',
                    name: 'Liechtenstein',
                    prefix: 423
                },
                {
                    code: 'LT',
                    name: 'Lithuania',
                    prefix: 370
                },
                {
                    code: 'LU',
                    name: 'Luxembourg',
                    prefix: 352
                },
                {
                    code: 'MO',
                    name: 'Macau',
                    prefix: 853
                },
                {
                    code: 'MK',
                    name: 'Macedonia',
                    prefix: 389
                },
                {
                    code: 'MG',
                    name: 'Madagascar',
                    prefix: 261
                },
                {
                    code: 'MW',
                    name: 'Malawi',
                    prefix: 265
                },
                {
                    code: 'MY',
                    name: 'Malaysia',
                    prefix: 60
                },
                {
                    code: 'MV',
                    name: 'Maldives',
                    prefix: 960
                },
                {
                    code: 'ML',
                    name: 'Mali',
                    prefix: 223
                },
                {
                    code: 'MT',
                    name: 'Malta',
                    prefix: 356
                },
                {
                    code: 'MQ',
                    name: 'Martinique',
                    prefix: 596
                },
                {
                    code: 'MR',
                    name: 'Mauritania',
                    prefix: 222
                },
                {
                    code: 'MU',
                    name: 'Mauritius',
                    prefix: 230
                },
                {
                    code: 'YT',
                    name: 'Mayotte',
                    prefix: 269
                },
                {
                    code: 'MX',
                    name: 'Mexico',
                    prefix: 52
                },
                {
                    code: 'MD',
                    name: 'Moldova',
                    prefix: 373
                },
                {
                    code: 'MC',
                    name: 'Monaco',
                    prefix: 377
                },
                {
                    code: 'MN',
                    name: 'Mongolia',
                    prefix: 976
                },
                {
                    code: 'ME',
                    name: 'Montenegro',
                    prefix: 382
                },
                {
                    code: 'MS',
                    name: 'Montserrat',
                    prefix: 1664
                },
                {
                    code: 'MA',
                    name: 'Morocco',
                    prefix: 212
                },
                {
                    code: 'MZ',
                    name: 'Mozambique',
                    prefix: 258
                },
                {
                    code: 'MM',
                    name: 'Myanmar',
                    prefix: 95
                },
                {
                    code: 'NA',
                    name: 'Namibia',
                    prefix: 264
                },
                {
                    code: 'NP',
                    name: 'Nepal',
                    prefix: 977
                },
                {
                    code: 'NL',
                    name: 'Netherlands',
                    prefix: 31
                },
                {
                    code: 'NC',
                    name: 'New Caledonia',
                    prefix: 687
                },
                {
                    code: 'NZ',
                    name: 'New Zealand',
                    prefix: 64
                },
                {
                    code: 'NI',
                    name: 'Nicaragua',
                    prefix: 505
                },
                {
                    code: 'NE',
                    name: 'Niger',
                    prefix: 227
                },
                {
                    code: 'NG',
                    name: 'Nigeria',
                    prefix: 234
                },
                {
                    code: 'NO',
                    name: 'Norway',
                    prefix: 47
                },
                {
                    code: 'OM',
                    name: 'Oman',
                    prefix: 968
                },
                {
                    code: 'PK',
                    name: 'Pakistan',
                    prefix: 92
                },
                {
                    code: 'PW',
                    name: 'Palau',
                    prefix: 680
                },
                {
                    code: 'PS',
                    name: 'Palestinian Territory',
                    prefix: 970
                },
                {
                    code: 'PA',
                    name: 'Panama',
                    prefix: 507
                },
                {
                    code: 'PG',
                    name: 'Papua New Guinea',
                    prefix: 675
                },
                {
                    code: 'PY',
                    name: 'Paraguay',
                    prefix: 595
                },
                {
                    code: 'PE',
                    name: 'Peru',
                    prefix: 51
                },
                {
                    code: 'PH',
                    name: 'Philippines',
                    prefix: 63
                },
                {
                    code: 'PL',
                    name: 'Poland',
                    prefix: 48
                },
                {
                    code: 'PT',
                    name: 'Portugal',
                    prefix: 351
                },
                {
                    code: 'PR',
                    name: 'Puerto Rico',
                    prefix: 1787
                },
                {
                    code: 'QA',
                    name: 'Qatar',
                    prefix: 974
                },
                {
                    code: 'CG',
                    name: 'Republic Of The Congo',
                    prefix: 242
                },
                {
                    code: 'RO',
                    name: 'Romania',
                    prefix: 40
                },
                {
                    code: 'RU',
                    name: 'Russia',
                    prefix: 7
                },
                {
                    code: 'RW',
                    name: 'Rwanda',
                    prefix: 250
                },
                {
                    code: 'RE',
                    name: 'Réunion Island',
                    prefix: 262
                },
                {
                    code: 'KN',
                    name: 'Saint Kitts and Nevis',
                    prefix: 1869
                },
                {
                    code: 'LC',
                    name: 'Saint Lucia',
                    prefix: 1758
                },
                {
                    code: 'PM',
                    name: 'Saint Pierre and Miquelon',
                    prefix: 508
                },
                {
                    code: 'VC',
                    name: 'Saint Vincent and The Grenadines',
                    prefix: 1784
                },
                {
                    code: 'WS',
                    name: 'Samoa',
                    prefix: 685
                },
                {
                    code: 'SM',
                    name: 'San Marino',
                    prefix: 378
                },
                {
                    code: 'ST',
                    name: 'Sao Tome and Principe',
                    prefix: 239
                },
                {
                    code: 'SA',
                    name: 'Saudi Arabia',
                    prefix: 966
                },
                {
                    code: 'SN',
                    name: 'Senegal',
                    prefix: 221
                },
                {
                    code: 'RS',
                    name: 'Serbia',
                    prefix: 381
                },
                {
                    code: 'SC',
                    name: 'Seychelles',
                    prefix: 248
                },
                {
                    code: 'SL',
                    name: 'Sierra Leone',
                    prefix: 232
                },
                {
                    code: 'SG',
                    name: 'Singapore',
                    prefix: 65
                },
                {
                    code: 'SX',
                    name: 'Sint Maarten (Dutch Part)',
                    prefix: 1721
                },
                {
                    code: 'SK',
                    name: 'Slovakia',
                    prefix: 421
                },
                {
                    code: 'SI',
                    name: 'Slovenia',
                    prefix: 386
                },
                {
                    code: 'SB',
                    name: 'Solomon Islands',
                    prefix: 677
                },
                {
                    code: 'SO',
                    name: 'Somalia',
                    prefix: 252
                },
                {
                    code: 'ZA',
                    name: 'South Africa',
                    prefix: 27
                },
                {
                    code: 'KR',
                    name: 'South Korea',
                    prefix: 82
                },
                {
                    code: 'SS',
                    name: 'South Sudan',
                    prefix: 211
                },
                {
                    code: 'ES',
                    name: 'Spain',
                    prefix: 34
                },
                {
                    code: 'LK',
                    name: 'Sri Lanka',
                    prefix: 94
                },
                {
                    code: 'SD',
                    name: 'Sudan',
                    prefix: 249
                },
                {
                    code: 'SR',
                    name: 'Suriname',
                    prefix: 597
                },
                {
                    code: 'SZ',
                    name: 'Swaziland',
                    prefix: 268
                },
                {
                    code: 'SE',
                    name: 'Sweden',
                    prefix: 46
                },
                {
                    code: 'CH',
                    name: 'Switzerland',
                    prefix: 41
                },
                {
                    code: 'SY',
                    name: 'Syria',
                    prefix: 963
                },
                {
                    code: 'TW',
                    name: 'Taiwan',
                    prefix: 886
                },
                {
                    code: 'TJ',
                    name: 'Tajikistan',
                    prefix: 992
                },
                {
                    code: 'TZ',
                    name: 'Tanzania',
                    prefix: 255
                },
                {
                    code: 'TH',
                    name: 'Thailand',
                    prefix: 66
                },
                {
                    code: 'TG',
                    name: 'Togo',
                    prefix: 228
                },
                {
                    code: 'TO',
                    name: 'Tonga',
                    prefix: 676
                },
                {
                    code: 'TT',
                    name: 'Trinidad and Tobago',
                    prefix: 1868
                },
                {
                    code: 'TN',
                    name: 'Tunisia',
                    prefix: 216
                },
                {
                    code: 'TR',
                    name: 'Turkey',
                    prefix: 90
                },
                {
                    code: 'TM',
                    name: 'Turkmenistan',
                    prefix: 993
                },
                {
                    code: 'TC',
                    name: 'Turks and Caicos Islands',
                    prefix: 1649
                },
                {
                    code: 'UG',
                    name: 'Uganda',
                    prefix: 256
                },
                {
                    code: 'UA',
                    name: 'Ukraine',
                    prefix: 380
                },
                {
                    code: 'AE',
                    name: 'United Arab Emirates',
                    prefix: 971
                },
                {
                    code: 'GB',
                    name: 'United Kingdom',
                    prefix: 44
                },
                {
                    code: 'UY',
                    name: 'Uruguay',
                    prefix: 598
                },
                {
                    code: 'UZ',
                    name: 'Uzbekistan',
                    prefix: 998
                },
                {
                    code: 'VU',
                    name: 'Vanuatu',
                    prefix: 678
                },
                {
                    code: 'VE',
                    name: 'Venezuela',
                    prefix: 58
                },
                {
                    code: 'VN',
                    name: 'Vietnam',
                    prefix: 84
                },
                {
                    code: 'VG',
                    name: 'Virgin Islands, British',
                    prefix: 1284
                },
                {
                    code: 'VI',
                    name: 'Virgin Islands, US',
                    prefix: 1340
                },
                {
                    code: 'YE',
                    name: 'Yemen',
                    prefix: 967
                },
                {
                    code: 'ZM',
                    name: 'Zambia',
                    prefix: 260
                },
                {
                    code: 'ZW',
                    name: 'Zimbabwe',
                    prefix: 263
                }
            ];
        }

        function getCountries() {
            return countries;
        }
    }
})();
