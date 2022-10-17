import Controller from './controller';
import View from './view';

import './style.css';

const TEST = {
	"lat": 35.6828,
	"lon": 139.7595,
	"timezone": "Asia/Tokyo",
	"timezone_offset": 32400,
	"current": {
			"dt": 1666040854,
			"sunrise": 1666039761,
			"sunset": 1666080165,
			"temp": 17.29,
			"feels_like": 17.37,
			"pressure": 1008,
			"pop": 0.61,
			"humidity": 88,
			"dew_point": 15.29,
			"uvi": 0,
			"clouds": 75,
			"visibility": 10000,
			"wind_speed": 5.66,
			"wind_deg": 50,
			"weather": [
					{
							"id": 803,
							"main": "Clouds",
							"description": "broken clouds",
							"icon": "04d"
					}
			]
	},
	"minutely": [
			{
					"dt": 1666040880,
					"precipitation": 0
			},
			{
					"dt": 1666040940,
					"precipitation": 0
			},
			{
					"dt": 1666041000,
					"precipitation": 0
			},
			{
					"dt": 1666041060,
					"precipitation": 0
			},
			{
					"dt": 1666041120,
					"precipitation": 0
			},
			{
					"dt": 1666041180,
					"precipitation": 0
			},
			{
					"dt": 1666041240,
					"precipitation": 0
			},
			{
					"dt": 1666041300,
					"precipitation": 0
			},
			{
					"dt": 1666041360,
					"precipitation": 0
			},
			{
					"dt": 1666041420,
					"precipitation": 0
			},
			{
					"dt": 1666041480,
					"precipitation": 0
			},
			{
					"dt": 1666041540,
					"precipitation": 0
			},
			{
					"dt": 1666041600,
					"precipitation": 0
			},
			{
					"dt": 1666041660,
					"precipitation": 0
			},
			{
					"dt": 1666041720,
					"precipitation": 0
			},
			{
					"dt": 1666041780,
					"precipitation": 0
			},
			{
					"dt": 1666041840,
					"precipitation": 0
			},
			{
					"dt": 1666041900,
					"precipitation": 0
			},
			{
					"dt": 1666041960,
					"precipitation": 0
			},
			{
					"dt": 1666042020,
					"precipitation": 0
			},
			{
					"dt": 1666042080,
					"precipitation": 0
			},
			{
					"dt": 1666042140,
					"precipitation": 0
			},
			{
					"dt": 1666042200,
					"precipitation": 0
			},
			{
					"dt": 1666042260,
					"precipitation": 0
			},
			{
					"dt": 1666042320,
					"precipitation": 0
			},
			{
					"dt": 1666042380,
					"precipitation": 0
			},
			{
					"dt": 1666042440,
					"precipitation": 0
			},
			{
					"dt": 1666042500,
					"precipitation": 0
			},
			{
					"dt": 1666042560,
					"precipitation": 0
			},
			{
					"dt": 1666042620,
					"precipitation": 0
			},
			{
					"dt": 1666042680,
					"precipitation": 0
			},
			{
					"dt": 1666042740,
					"precipitation": 0
			},
			{
					"dt": 1666042800,
					"precipitation": 0
			},
			{
					"dt": 1666042860,
					"precipitation": 0
			},
			{
					"dt": 1666042920,
					"precipitation": 0
			},
			{
					"dt": 1666042980,
					"precipitation": 0
			},
			{
					"dt": 1666043040,
					"precipitation": 0
			},
			{
					"dt": 1666043100,
					"precipitation": 0
			},
			{
					"dt": 1666043160,
					"precipitation": 0
			},
			{
					"dt": 1666043220,
					"precipitation": 0
			},
			{
					"dt": 1666043280,
					"precipitation": 0
			},
			{
					"dt": 1666043340,
					"precipitation": 0
			},
			{
					"dt": 1666043400,
					"precipitation": 0
			},
			{
					"dt": 1666043460,
					"precipitation": 0
			},
			{
					"dt": 1666043520,
					"precipitation": 0
			},
			{
					"dt": 1666043580,
					"precipitation": 0
			},
			{
					"dt": 1666043640,
					"precipitation": 0
			},
			{
					"dt": 1666043700,
					"precipitation": 0
			},
			{
					"dt": 1666043760,
					"precipitation": 0
			},
			{
					"dt": 1666043820,
					"precipitation": 0
			},
			{
					"dt": 1666043880,
					"precipitation": 0
			},
			{
					"dt": 1666043940,
					"precipitation": 0
			},
			{
					"dt": 1666044000,
					"precipitation": 0
			},
			{
					"dt": 1666044060,
					"precipitation": 0
			},
			{
					"dt": 1666044120,
					"precipitation": 0
			},
			{
					"dt": 1666044180,
					"precipitation": 0
			},
			{
					"dt": 1666044240,
					"precipitation": 0
			},
			{
					"dt": 1666044300,
					"precipitation": 0
			},
			{
					"dt": 1666044360,
					"precipitation": 0
			},
			{
					"dt": 1666044420,
					"precipitation": 0
			},
			{
					"dt": 1666044480,
					"precipitation": 0
			}
	],
	"hourly": [
			{
					"dt": 1666040400,
					"temp": 17.29,
					"feels_like": 17.37,
					"pressure": 1008,
					"humidity": 88,
					"dew_point": 15.29,
					"uvi": 0,
					"clouds": 75,
					"visibility": 10000,
					"wind_speed": 4.76,
					"wind_deg": 71,
					"wind_gust": 5.15,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"pop": 0.84,
					"rain": {
							"1h": 0.26
					}
			},
			{
					"dt": 1666044000,
					"temp": 17.48,
					"feels_like": 17.56,
					"pressure": 1008,
					"humidity": 87,
					"dew_point": 15.29,
					"uvi": 0.01,
					"clouds": 80,
					"visibility": 10000,
					"wind_speed": 6.22,
					"wind_deg": 62,
					"wind_gust": 6.87,
					"weather": [
							{
									"id": 803,
									"main": "Clouds",
									"description": "broken clouds",
									"icon": "04d"
							}
					],
					"pop": 0.8
			},
			{
					"dt": 1666047600,
					"temp": 17.42,
					"feels_like": 17.44,
					"pressure": 1009,
					"humidity": 85,
					"dew_point": 14.87,
					"uvi": 0.07,
					"clouds": 85,
					"visibility": 10000,
					"wind_speed": 7.11,
					"wind_deg": 50,
					"wind_gust": 9.82,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.85
			},
			{
					"dt": 1666051200,
					"temp": 17.55,
					"feels_like": 17.53,
					"pressure": 1010,
					"humidity": 83,
					"dew_point": 14.63,
					"uvi": 0.16,
					"clouds": 90,
					"visibility": 10000,
					"wind_speed": 5.53,
					"wind_deg": 40,
					"wind_gust": 8,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"pop": 0.89,
					"rain": {
							"1h": 0.64
					}
			},
			{
					"dt": 1666054800,
					"temp": 17.34,
					"feels_like": 17.3,
					"pressure": 1010,
					"humidity": 83,
					"dew_point": 14.43,
					"uvi": 0.23,
					"clouds": 95,
					"visibility": 10000,
					"wind_speed": 5.09,
					"wind_deg": 35,
					"wind_gust": 6.88,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"pop": 0.79,
					"rain": {
							"1h": 0.82
					}
			},
			{
					"dt": 1666058400,
					"temp": 16.45,
					"feels_like": 16.19,
					"pressure": 1012,
					"humidity": 78,
					"dew_point": 12.51,
					"uvi": 0.3,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 7.03,
					"wind_deg": 54,
					"wind_gust": 8.64,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"pop": 0.81,
					"rain": {
							"1h": 0.69
					}
			},
			{
					"dt": 1666062000,
					"temp": 15.94,
					"feels_like": 15.55,
					"pressure": 1012,
					"humidity": 75,
					"dew_point": 11.55,
					"uvi": 0.31,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.41,
					"wind_deg": 59,
					"wind_gust": 8.54,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"pop": 0.93,
					"rain": {
							"1h": 0.33
					}
			},
			{
					"dt": 1666065600,
					"temp": 16.05,
					"feels_like": 15.64,
					"pressure": 1012,
					"humidity": 74,
					"dew_point": 11.35,
					"uvi": 0.27,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 5.57,
					"wind_deg": 60,
					"wind_gust": 6.85,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"pop": 0.97,
					"rain": {
							"1h": 0.16
					}
			},
			{
					"dt": 1666069200,
					"temp": 15.53,
					"feels_like": 14.99,
					"pressure": 1012,
					"humidity": 71,
					"dew_point": 10.31,
					"uvi": 0.19,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.62,
					"wind_deg": 60,
					"wind_gust": 7.03,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"pop": 0.97,
					"rain": {
							"1h": 0.19
					}
			},
			{
					"dt": 1666072800,
					"temp": 15.21,
					"feels_like": 14.56,
					"pressure": 1013,
					"humidity": 68,
					"dew_point": 9.39,
					"uvi": 0.09,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.75,
					"wind_deg": 59,
					"wind_gust": 7.37,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.77
			},
			{
					"dt": 1666076400,
					"temp": 14.93,
					"feels_like": 14.28,
					"pressure": 1015,
					"humidity": 69,
					"dew_point": 9.19,
					"uvi": 0.03,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.94,
					"wind_deg": 58,
					"wind_gust": 7.74,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"pop": 0.65,
					"rain": {
							"1h": 0.1
					}
			},
			{
					"dt": 1666080000,
					"temp": 14.47,
					"feels_like": 13.83,
					"pressure": 1016,
					"humidity": 71,
					"dew_point": 9.38,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.74,
					"wind_deg": 52,
					"wind_gust": 7.68,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"pop": 0.6,
					"rain": {
							"1h": 0.19
					}
			},
			{
					"dt": 1666083600,
					"temp": 14.6,
					"feels_like": 13.97,
					"pressure": 1017,
					"humidity": 71,
					"dew_point": 9.42,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.53,
					"wind_deg": 55,
					"wind_gust": 8.43,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10n"
							}
					],
					"pop": 0.69,
					"rain": {
							"1h": 0.18
					}
			},
			{
					"dt": 1666087200,
					"temp": 14.73,
					"feels_like": 14.11,
					"pressure": 1017,
					"humidity": 71,
					"dew_point": 9.55,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.69,
					"wind_deg": 55,
					"wind_gust": 8.72,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10n"
							}
					],
					"pop": 0.67,
					"rain": {
							"1h": 0.3
					}
			},
			{
					"dt": 1666090800,
					"temp": 14.66,
					"feels_like": 13.98,
					"pressure": 1018,
					"humidity": 69,
					"dew_point": 9.06,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.96,
					"wind_deg": 51,
					"wind_gust": 8.81,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10n"
							}
					],
					"pop": 0.67,
					"rain": {
							"1h": 0.19
					}
			},
			{
					"dt": 1666094400,
					"temp": 14.42,
					"feels_like": 13.72,
					"pressure": 1018,
					"humidity": 69,
					"dew_point": 8.74,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.7,
					"wind_deg": 44,
					"wind_gust": 8.57,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10n"
							}
					],
					"pop": 0.67,
					"rain": {
							"1h": 0.22
					}
			},
			{
					"dt": 1666098000,
					"temp": 14.32,
					"feels_like": 13.58,
					"pressure": 1018,
					"humidity": 68,
					"dew_point": 8.5,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.92,
					"wind_deg": 40,
					"wind_gust": 9.35,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10n"
							}
					],
					"pop": 0.75,
					"rain": {
							"1h": 0.19
					}
			},
			{
					"dt": 1666101600,
					"temp": 14.26,
					"feels_like": 13.46,
					"pressure": 1018,
					"humidity": 66,
					"dew_point": 7.94,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.96,
					"wind_deg": 35,
					"wind_gust": 9.06,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.63
			},
			{
					"dt": 1666105200,
					"temp": 14.23,
					"feels_like": 13.35,
					"pressure": 1019,
					"humidity": 63,
					"dew_point": 7.27,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.52,
					"wind_deg": 27,
					"wind_gust": 8.41,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.61
			},
			{
					"dt": 1666108800,
					"temp": 14.14,
					"feels_like": 13.25,
					"pressure": 1019,
					"humidity": 63,
					"dew_point": 7.11,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.41,
					"wind_deg": 26,
					"wind_gust": 8.16,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.54
			},
			{
					"dt": 1666112400,
					"temp": 14.08,
					"feels_like": 13.16,
					"pressure": 1019,
					"humidity": 62,
					"dew_point": 6.95,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 5.12,
					"wind_deg": 26,
					"wind_gust": 6.64,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.58
			},
			{
					"dt": 1666116000,
					"temp": 14.09,
					"feels_like": 13.17,
					"pressure": 1019,
					"humidity": 62,
					"dew_point": 6.81,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 5.57,
					"wind_deg": 19,
					"wind_gust": 6.86,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.55
			},
			{
					"dt": 1666119600,
					"temp": 14.14,
					"feels_like": 13.2,
					"pressure": 1019,
					"humidity": 61,
					"dew_point": 6.8,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 5.35,
					"wind_deg": 17,
					"wind_gust": 6.77,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.2
			},
			{
					"dt": 1666123200,
					"temp": 14.22,
					"feels_like": 13.26,
					"pressure": 1020,
					"humidity": 60,
					"dew_point": 6.61,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 4.57,
					"wind_deg": 19,
					"wind_gust": 6.01,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.32
			},
			{
					"dt": 1666126800,
					"temp": 14.41,
					"feels_like": 13.45,
					"pressure": 1020,
					"humidity": 59,
					"dew_point": 6.48,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 4.92,
					"wind_deg": 20,
					"wind_gust": 6.62,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.37
			},
			{
					"dt": 1666130400,
					"temp": 14.49,
					"feels_like": 13.51,
					"pressure": 1020,
					"humidity": 58,
					"dew_point": 6.29,
					"uvi": 0.21,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 4.9,
					"wind_deg": 23,
					"wind_gust": 6.42,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.33
			},
			{
					"dt": 1666134000,
					"temp": 14.69,
					"feels_like": 13.65,
					"pressure": 1021,
					"humidity": 55,
					"dew_point": 5.78,
					"uvi": 0.87,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 4.84,
					"wind_deg": 26,
					"wind_gust": 6.17,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.33
			},
			{
					"dt": 1666137600,
					"temp": 14.87,
					"feels_like": 13.8,
					"pressure": 1021,
					"humidity": 53,
					"dew_point": 5.39,
					"uvi": 2,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 3.96,
					"wind_deg": 34,
					"wind_gust": 4.67,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.33
			},
			{
					"dt": 1666141200,
					"temp": 15.15,
					"feels_like": 14.08,
					"pressure": 1021,
					"humidity": 52,
					"dew_point": 5.3,
					"uvi": 3.58,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 4.02,
					"wind_deg": 38,
					"wind_gust": 4.63,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.22
			},
			{
					"dt": 1666144800,
					"temp": 15.51,
					"feels_like": 14.45,
					"pressure": 1021,
					"humidity": 51,
					"dew_point": 5.35,
					"uvi": 4.6,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 3.43,
					"wind_deg": 39,
					"wind_gust": 3.93,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.18
			},
			{
					"dt": 1666148400,
					"temp": 15.87,
					"feels_like": 14.82,
					"pressure": 1020,
					"humidity": 50,
					"dew_point": 5.6,
					"uvi": 4.79,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 3.49,
					"wind_deg": 47,
					"wind_gust": 4,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.22
			},
			{
					"dt": 1666152000,
					"temp": 16.08,
					"feels_like": 15.05,
					"pressure": 1020,
					"humidity": 50,
					"dew_point": 5.65,
					"uvi": 4.07,
					"clouds": 99,
					"visibility": 10000,
					"wind_speed": 3.73,
					"wind_deg": 52,
					"wind_gust": 4.4,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.18
			},
			{
					"dt": 1666155600,
					"temp": 16.4,
					"feels_like": 15.4,
					"pressure": 1019,
					"humidity": 50,
					"dew_point": 5.87,
					"uvi": 2.75,
					"clouds": 91,
					"visibility": 10000,
					"wind_speed": 4.4,
					"wind_deg": 77,
					"wind_gust": 4.89,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.18
			},
			{
					"dt": 1666159200,
					"temp": 16.44,
					"feels_like": 15.45,
					"pressure": 1020,
					"humidity": 50,
					"dew_point": 5.78,
					"uvi": 1.37,
					"clouds": 83,
					"visibility": 10000,
					"wind_speed": 4.2,
					"wind_deg": 100,
					"wind_gust": 4.17,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"pop": 0.3,
					"rain": {
							"1h": 0.14
					}
			},
			{
					"dt": 1666162800,
					"temp": 15.69,
					"feels_like": 14.72,
					"pressure": 1021,
					"humidity": 54,
					"dew_point": 6.12,
					"uvi": 0.36,
					"clouds": 75,
					"visibility": 10000,
					"wind_speed": 4.8,
					"wind_deg": 110,
					"wind_gust": 4.89,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"pop": 0.44,
					"rain": {
							"1h": 0.1
					}
			},
			{
					"dt": 1666166400,
					"temp": 15.2,
					"feels_like": 14.32,
					"pressure": 1021,
					"humidity": 59,
					"dew_point": 6.96,
					"uvi": 0,
					"clouds": 87,
					"visibility": 10000,
					"wind_speed": 5,
					"wind_deg": 105,
					"wind_gust": 6.16,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"pop": 0.52,
					"rain": {
							"1h": 0.22
					}
			},
			{
					"dt": 1666170000,
					"temp": 15.15,
					"feels_like": 14.31,
					"pressure": 1022,
					"humidity": 61,
					"dew_point": 7.65,
					"uvi": 0,
					"clouds": 91,
					"visibility": 10000,
					"wind_speed": 4.87,
					"wind_deg": 87,
					"wind_gust": 7.61,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10n"
							}
					],
					"pop": 0.52,
					"rain": {
							"1h": 0.16
					}
			},
			{
					"dt": 1666173600,
					"temp": 15.83,
					"feels_like": 14.96,
					"pressure": 1023,
					"humidity": 57,
					"dew_point": 7.21,
					"uvi": 0,
					"clouds": 91,
					"visibility": 10000,
					"wind_speed": 3.58,
					"wind_deg": 81,
					"wind_gust": 6.15,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.44
			},
			{
					"dt": 1666177200,
					"temp": 16.21,
					"feels_like": 15.32,
					"pressure": 1023,
					"humidity": 55,
					"dew_point": 6.98,
					"uvi": 0,
					"clouds": 92,
					"visibility": 10000,
					"wind_speed": 4.28,
					"wind_deg": 69,
					"wind_gust": 6.93,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.4
			},
			{
					"dt": 1666180800,
					"temp": 16.39,
					"feels_like": 15.36,
					"pressure": 1023,
					"humidity": 49,
					"dew_point": 5.49,
					"uvi": 0,
					"clouds": 90,
					"visibility": 10000,
					"wind_speed": 4.37,
					"wind_deg": 61,
					"wind_gust": 6.36,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.36
			},
			{
					"dt": 1666184400,
					"temp": 16.23,
					"feels_like": 15.11,
					"pressure": 1024,
					"humidity": 46,
					"dew_point": 4.54,
					"uvi": 0,
					"clouds": 79,
					"visibility": 10000,
					"wind_speed": 4.88,
					"wind_deg": 50,
					"wind_gust": 6.01,
					"weather": [
							{
									"id": 803,
									"main": "Clouds",
									"description": "broken clouds",
									"icon": "04n"
							}
					],
					"pop": 0.04
			},
			{
					"dt": 1666188000,
					"temp": 15.94,
					"feels_like": 14.79,
					"pressure": 1024,
					"humidity": 46,
					"dew_point": 4.35,
					"uvi": 0,
					"clouds": 90,
					"visibility": 10000,
					"wind_speed": 4.88,
					"wind_deg": 46,
					"wind_gust": 5.84,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.03
			},
			{
					"dt": 1666191600,
					"temp": 15.66,
					"feels_like": 14.46,
					"pressure": 1024,
					"humidity": 45,
					"dew_point": 3.77,
					"uvi": 0,
					"clouds": 93,
					"visibility": 10000,
					"wind_speed": 4.82,
					"wind_deg": 46,
					"wind_gust": 6.05,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.02
			},
			{
					"dt": 1666195200,
					"temp": 15.52,
					"feels_like": 14.3,
					"pressure": 1024,
					"humidity": 45,
					"dew_point": 3.49,
					"uvi": 0,
					"clouds": 93,
					"visibility": 10000,
					"wind_speed": 5.08,
					"wind_deg": 39,
					"wind_gust": 6.19,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.02
			},
			{
					"dt": 1666198800,
					"temp": 15.4,
					"feels_like": 14.17,
					"pressure": 1024,
					"humidity": 45,
					"dew_point": 3.38,
					"uvi": 0,
					"clouds": 91,
					"visibility": 10000,
					"wind_speed": 5.15,
					"wind_deg": 37,
					"wind_gust": 5.98,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.01
			},
			{
					"dt": 1666202400,
					"temp": 15.14,
					"feels_like": 13.88,
					"pressure": 1024,
					"humidity": 45,
					"dew_point": 3.17,
					"uvi": 0,
					"clouds": 85,
					"visibility": 10000,
					"wind_speed": 4.62,
					"wind_deg": 34,
					"wind_gust": 5.4,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.01
			},
			{
					"dt": 1666206000,
					"temp": 14.78,
					"feels_like": 13.49,
					"pressure": 1025,
					"humidity": 45,
					"dew_point": 2.98,
					"uvi": 0,
					"clouds": 5,
					"visibility": 10000,
					"wind_speed": 4.38,
					"wind_deg": 37,
					"wind_gust": 5.28,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666209600,
					"temp": 14.46,
					"feels_like": 13.16,
					"pressure": 1025,
					"humidity": 46,
					"dew_point": 2.93,
					"uvi": 0,
					"clouds": 5,
					"visibility": 10000,
					"wind_speed": 4.4,
					"wind_deg": 36,
					"wind_gust": 5.44,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			}
	],
	"daily": [
			{
					"dt": 1666058400,
					"sunrise": 1666039761,
					"sunset": 1666080165,
					"moonrise": 1666102320,
					"moonset": 1666067100,
					"moon_phase": 0.75,
					"temp": {
							"day": 16.45,
							"min": 14.26,
							"max": 20.49,
							"night": 14.26,
							"eve": 14.47,
							"morn": 17.76
					},
					"feels_like": {
							"day": 16.19,
							"night": 13.46,
							"eve": 13.83,
							"morn": 17.86
					},
					"pressure": 1012,
					"humidity": 78,
					"dew_point": 12.51,
					"wind_speed": 7.11,
					"wind_deg": 50,
					"wind_gust": 9.82,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"clouds": 100,
					"pop": 0.97,
					"rain": 6.14,
					"uvi": 0.31
			},
			{
					"dt": 1666144800,
					"sunrise": 1666126214,
					"sunset": 1666166489,
					"moonrise": 0,
					"moonset": 1666155720,
					"moon_phase": 0.79,
					"temp": {
							"day": 15.51,
							"min": 14.08,
							"max": 16.44,
							"night": 15.94,
							"eve": 15.2,
							"morn": 14.22
					},
					"feels_like": {
							"day": 14.45,
							"night": 14.79,
							"eve": 14.32,
							"morn": 13.26
					},
					"pressure": 1021,
					"humidity": 51,
					"dew_point": 5.35,
					"wind_speed": 6.52,
					"wind_deg": 27,
					"wind_gust": 8.41,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"clouds": 100,
					"pop": 0.61,
					"rain": 0.62,
					"uvi": 4.79
			},
			{
					"dt": 1666231200,
					"sunrise": 1666212667,
					"sunset": 1666252814,
					"moonrise": 1666192320,
					"moonset": 1666244040,
					"moon_phase": 0.82,
					"temp": {
							"day": 17.04,
							"min": 14.25,
							"max": 19.08,
							"night": 17.35,
							"eve": 18.99,
							"morn": 14.46
					},
					"feels_like": {
							"day": 15.77,
							"night": 16.39,
							"eve": 17.65,
							"morn": 13.16
					},
					"pressure": 1027,
					"humidity": 37,
					"dew_point": 2.07,
					"wind_speed": 5.15,
					"wind_deg": 37,
					"wind_gust": 6.19,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"clouds": 0,
					"pop": 0.02,
					"uvi": 4.34
			},
			{
					"dt": 1666317600,
					"sunrise": 1666299121,
					"sunset": 1666339140,
					"moonrise": 1666282320,
					"moonset": 1666332180,
					"moon_phase": 0.85,
					"temp": {
							"day": 20.49,
							"min": 15.94,
							"max": 21.19,
							"night": 19.51,
							"eve": 20.64,
							"morn": 16.14
					},
					"feels_like": {
							"day": 19.77,
							"night": 19.06,
							"eve": 20.07,
							"morn": 15.09
					},
					"pressure": 1026,
					"humidity": 45,
					"dew_point": 7.96,
					"wind_speed": 7.79,
					"wind_deg": 189,
					"wind_gust": 8.39,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"clouds": 4,
					"pop": 0,
					"uvi": 4.83
			},
			{
					"dt": 1666404000,
					"sunrise": 1666385576,
					"sunset": 1666425467,
					"moonrise": 1666372380,
					"moonset": 1666420200,
					"moon_phase": 0.89,
					"temp": {
							"day": 20.5,
							"min": 18.48,
							"max": 22.9,
							"night": 20.7,
							"eve": 22.13,
							"morn": 18.63
					},
					"feels_like": {
							"day": 19.83,
							"night": 20.42,
							"eve": 21.78,
							"morn": 18.04
					},
					"pressure": 1020,
					"humidity": 47,
					"dew_point": 8.79,
					"wind_speed": 6.57,
					"wind_deg": 197,
					"wind_gust": 7.97,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"clouds": 100,
					"pop": 0,
					"uvi": 3.71
			},
			{
					"dt": 1666490400,
					"sunrise": 1666472030,
					"sunset": 1666511795,
					"moonrise": 1666462440,
					"moonset": 1666508160,
					"moon_phase": 0.92,
					"temp": {
							"day": 22.15,
							"min": 18.3,
							"max": 23.58,
							"night": 20.4,
							"eve": 22.8,
							"morn": 18.3
					},
					"feels_like": {
							"day": 21.36,
							"night": 20.14,
							"eve": 22.1,
							"morn": 17.54
					},
					"pressure": 1011,
					"humidity": 36,
					"dew_point": 6.13,
					"wind_speed": 3.85,
					"wind_deg": 236,
					"wind_gust": 5.91,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"clouds": 99,
					"pop": 0,
					"uvi": 4
			},
			{
					"dt": 1666576800,
					"sunrise": 1666558485,
					"sunset": 1666598124,
					"moonrise": 1666552560,
					"moonset": 1666596060,
					"moon_phase": 0.95,
					"temp": {
							"day": 18.19,
							"min": 16.62,
							"max": 19.53,
							"night": 17.16,
							"eve": 18.25,
							"morn": 16.93
					},
					"feels_like": {
							"day": 16.82,
							"night": 16.03,
							"eve": 17.12,
							"morn": 15.88
					},
					"pressure": 1017,
					"humidity": 29,
					"dew_point": -0.61,
					"wind_speed": 7.52,
					"wind_deg": 342,
					"wind_gust": 10.47,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"clouds": 97,
					"pop": 0.39,
					"rain": 1.22,
					"uvi": 4
			},
			{
					"dt": 1666663200,
					"sunrise": 1666644941,
					"sunset": 1666684454,
					"moonrise": 1666642860,
					"moonset": 1666684140,
					"moon_phase": 0,
					"temp": {
							"day": 17.52,
							"min": 14.98,
							"max": 18.05,
							"night": 14.98,
							"eve": 16.15,
							"morn": 15.2
					},
					"feels_like": {
							"day": 16.24,
							"night": 13.58,
							"eve": 14.89,
							"morn": 13.87
					},
					"pressure": 1025,
					"humidity": 35,
					"dew_point": 1.63,
					"wind_speed": 7.31,
					"wind_deg": 52,
					"wind_gust": 8.87,
					"weather": [
							{
									"id": 803,
									"main": "Clouds",
									"description": "broken clouds",
									"icon": "04d"
							}
					],
					"clouds": 75,
					"pop": 0,
					"uvi": 4
			}
	],
	"city_name": "Tokyo",
	"local_time": new Date("2022-10-18T10:08:04.610Z"),
	"country_name": "Japan",
	"unit": "metric"
};

(() => {
  View.bindSearchForm(Controller.searchAPIWeather);
  View.bindToggleButton(Controller.convertTemperatures);

  // Controller.searchAPIWeather('Tokyo')
  //  .then((data) => { View.displayAllData(data) });
	View.displayAllData(TEST);
})();
