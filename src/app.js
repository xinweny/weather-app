import Controller from './controller';
import View from './view';

import './style.css';

const TEST = {
	"lat": 35.6828,
	"lon": 139.7595,
	"timezone": "Asia/Tokyo",
	"timezone_offset": 32400,
	"current": {
			"dt": 1666131953,
			"sunrise": new Date("2022-10-19T09:50:14.000Z"),
			"sunset": new Date("2022-10-19T21:01:29.000Z"),
			"temp": 13.87,
			"feels_like": 13.17,
			"pressure": 1019,
			"humidity": 71,
			"dew_point": 8.71,
			"uvi": 0.04,
			"clouds": 75,
			"visibility": 10000,
			"wind_speed": 5.66,
			"wind_deg": 30,
			"wind_deg_cardinal": "N",
			"weather": [
					{
							"id": 803,
							"main": "Clouds",
							"description": "broken clouds",
							"icon": "04d"
					}
			],
			"pop": 0
	},
	"minutely": [
			{
					"dt": 1666131960,
					"precipitation": 0
			},
			{
					"dt": 1666132020,
					"precipitation": 0
			},
			{
					"dt": 1666132080,
					"precipitation": 0
			},
			{
					"dt": 1666132140,
					"precipitation": 0
			},
			{
					"dt": 1666132200,
					"precipitation": 0
			},
			{
					"dt": 1666132260,
					"precipitation": 0
			},
			{
					"dt": 1666132320,
					"precipitation": 0
			},
			{
					"dt": 1666132380,
					"precipitation": 0
			},
			{
					"dt": 1666132440,
					"precipitation": 0
			},
			{
					"dt": 1666132500,
					"precipitation": 0
			},
			{
					"dt": 1666132560,
					"precipitation": 0
			},
			{
					"dt": 1666132620,
					"precipitation": 0
			},
			{
					"dt": 1666132680,
					"precipitation": 0
			},
			{
					"dt": 1666132740,
					"precipitation": 0
			},
			{
					"dt": 1666132800,
					"precipitation": 0
			},
			{
					"dt": 1666132860,
					"precipitation": 0
			},
			{
					"dt": 1666132920,
					"precipitation": 0
			},
			{
					"dt": 1666132980,
					"precipitation": 0
			},
			{
					"dt": 1666133040,
					"precipitation": 0
			},
			{
					"dt": 1666133100,
					"precipitation": 0
			},
			{
					"dt": 1666133160,
					"precipitation": 0
			},
			{
					"dt": 1666133220,
					"precipitation": 0
			},
			{
					"dt": 1666133280,
					"precipitation": 0
			},
			{
					"dt": 1666133340,
					"precipitation": 0
			},
			{
					"dt": 1666133400,
					"precipitation": 0
			},
			{
					"dt": 1666133460,
					"precipitation": 0
			},
			{
					"dt": 1666133520,
					"precipitation": 0
			},
			{
					"dt": 1666133580,
					"precipitation": 0
			},
			{
					"dt": 1666133640,
					"precipitation": 0
			},
			{
					"dt": 1666133700,
					"precipitation": 0
			},
			{
					"dt": 1666133760,
					"precipitation": 0
			},
			{
					"dt": 1666133820,
					"precipitation": 0
			},
			{
					"dt": 1666133880,
					"precipitation": 0
			},
			{
					"dt": 1666133940,
					"precipitation": 0
			},
			{
					"dt": 1666134000,
					"precipitation": 0
			},
			{
					"dt": 1666134060,
					"precipitation": 0
			},
			{
					"dt": 1666134120,
					"precipitation": 0
			},
			{
					"dt": 1666134180,
					"precipitation": 0
			},
			{
					"dt": 1666134240,
					"precipitation": 0
			},
			{
					"dt": 1666134300,
					"precipitation": 0
			},
			{
					"dt": 1666134360,
					"precipitation": 0
			},
			{
					"dt": 1666134420,
					"precipitation": 0
			},
			{
					"dt": 1666134480,
					"precipitation": 0
			},
			{
					"dt": 1666134540,
					"precipitation": 0
			},
			{
					"dt": 1666134600,
					"precipitation": 0
			},
			{
					"dt": 1666134660,
					"precipitation": 0
			},
			{
					"dt": 1666134720,
					"precipitation": 0
			},
			{
					"dt": 1666134780,
					"precipitation": 0
			},
			{
					"dt": 1666134840,
					"precipitation": 0
			},
			{
					"dt": 1666134900,
					"precipitation": 0
			},
			{
					"dt": 1666134960,
					"precipitation": 0
			},
			{
					"dt": 1666135020,
					"precipitation": 0
			},
			{
					"dt": 1666135080,
					"precipitation": 0
			},
			{
					"dt": 1666135140,
					"precipitation": 0
			},
			{
					"dt": 1666135200,
					"precipitation": 0
			},
			{
					"dt": 1666135260,
					"precipitation": 0
			},
			{
					"dt": 1666135320,
					"precipitation": 0
			},
			{
					"dt": 1666135380,
					"precipitation": 0
			},
			{
					"dt": 1666135440,
					"precipitation": 0
			},
			{
					"dt": 1666135500,
					"precipitation": 0
			},
			{
					"dt": 1666135560,
					"precipitation": 0
			}
	],
	"hourly": [
			{
					"dt": 1666130400,
					"temp": 13.87,
					"feels_like": 13.17,
					"pressure": 1019,
					"humidity": 71,
					"dew_point": 8.71,
					"uvi": 0.04,
					"clouds": 75,
					"visibility": 10000,
					"wind_speed": 3.83,
					"wind_deg": 26,
					"wind_gust": 5.06,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"pop": 0.7,
					"rain": {
							"1h": 0.4
					}
			},
			{
					"dt": 1666134000,
					"temp": 13.8,
					"feels_like": 13.06,
					"pressure": 1019,
					"humidity": 70,
					"dew_point": 8.43,
					"uvi": 0.18,
					"clouds": 80,
					"visibility": 10000,
					"wind_speed": 5.03,
					"wind_deg": 34,
					"wind_gust": 6.15,
					"weather": [
							{
									"id": 803,
									"main": "Clouds",
									"description": "broken clouds",
									"icon": "04d"
							}
					],
					"pop": 0.69
			},
			{
					"dt": 1666137600,
					"temp": 13.88,
					"feels_like": 13.07,
					"pressure": 1020,
					"humidity": 67,
					"dew_point": 7.86,
					"uvi": 0.41,
					"clouds": 84,
					"visibility": 10000,
					"wind_speed": 5.02,
					"wind_deg": 44,
					"wind_gust": 5.61,
					"weather": [
							{
									"id": 803,
									"main": "Clouds",
									"description": "broken clouds",
									"icon": "04d"
							}
					],
					"pop": 0.66
			},
			{
					"dt": 1666141200,
					"temp": 13.91,
					"feels_like": 12.98,
					"pressure": 1020,
					"humidity": 62,
					"dew_point": 6.76,
					"uvi": 0.93,
					"clouds": 90,
					"visibility": 10000,
					"wind_speed": 5.07,
					"wind_deg": 45,
					"wind_gust": 5.65,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.25
			},
			{
					"dt": 1666144800,
					"temp": 14.25,
					"feels_like": 13.19,
					"pressure": 1021,
					"humidity": 56,
					"dew_point": 5.6,
					"uvi": 1.2,
					"clouds": 95,
					"visibility": 10000,
					"wind_speed": 4.54,
					"wind_deg": 46,
					"wind_gust": 5.16,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.28
			},
			{
					"dt": 1666148400,
					"temp": 14.55,
					"feels_like": 13.37,
					"pressure": 1021,
					"humidity": 50,
					"dew_point": 4.29,
					"uvi": 1.25,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 4.48,
					"wind_deg": 45,
					"wind_gust": 5.08,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.3
			},
			{
					"dt": 1666152000,
					"temp": 15.09,
					"feels_like": 13.91,
					"pressure": 1020,
					"humidity": 48,
					"dew_point": 4.01,
					"uvi": 3.29,
					"clouds": 98,
					"visibility": 10000,
					"wind_speed": 4.38,
					"wind_deg": 48,
					"wind_gust": 4.85,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.3
			},
			{
					"dt": 1666155600,
					"temp": 15.45,
					"feels_like": 14.28,
					"pressure": 1020,
					"humidity": 47,
					"dew_point": 3.98,
					"uvi": 2.22,
					"clouds": 98,
					"visibility": 10000,
					"wind_speed": 4.46,
					"wind_deg": 57,
					"wind_gust": 4.89,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.3
			},
			{
					"dt": 1666159200,
					"temp": 15.5,
					"feels_like": 14.31,
					"pressure": 1020,
					"humidity": 46,
					"dew_point": 3.86,
					"uvi": 1.11,
					"clouds": 98,
					"visibility": 10000,
					"wind_speed": 4.62,
					"wind_deg": 67,
					"wind_gust": 5.11,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.3
			},
			{
					"dt": 1666162800,
					"temp": 15.49,
					"feels_like": 14.32,
					"pressure": 1021,
					"humidity": 47,
					"dew_point": 3.99,
					"uvi": 0.44,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 4.2,
					"wind_deg": 80,
					"wind_gust": 4.73,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.3
			},
			{
					"dt": 1666166400,
					"temp": 15.23,
					"feels_like": 14.14,
					"pressure": 1021,
					"humidity": 51,
					"dew_point": 5.09,
					"uvi": 0,
					"clouds": 93,
					"visibility": 10000,
					"wind_speed": 4.41,
					"wind_deg": 73,
					"wind_gust": 5.46,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04d"
							}
					],
					"pop": 0.26
			},
			{
					"dt": 1666170000,
					"temp": 15.03,
					"feels_like": 14.08,
					"pressure": 1022,
					"humidity": 57,
					"dew_point": 6.44,
					"uvi": 0,
					"clouds": 92,
					"visibility": 10000,
					"wind_speed": 3.83,
					"wind_deg": 72,
					"wind_gust": 5.27,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.26
			},
			{
					"dt": 1666173600,
					"temp": 14.96,
					"feels_like": 14.05,
					"pressure": 1023,
					"humidity": 59,
					"dew_point": 6.98,
					"uvi": 0,
					"clouds": 89,
					"visibility": 10000,
					"wind_speed": 2.94,
					"wind_deg": 72,
					"wind_gust": 4.81,
					"weather": [
							{
									"id": 804,
									"main": "Clouds",
									"description": "overcast clouds",
									"icon": "04n"
							}
					],
					"pop": 0.22
			},
			{
					"dt": 1666177200,
					"temp": 14.99,
					"feels_like": 14.09,
					"pressure": 1023,
					"humidity": 59,
					"dew_point": 7.11,
					"uvi": 0,
					"clouds": 83,
					"visibility": 10000,
					"wind_speed": 1.9,
					"wind_deg": 75,
					"wind_gust": 3.15,
					"weather": [
							{
									"id": 803,
									"main": "Clouds",
									"description": "broken clouds",
									"icon": "04n"
							}
					],
					"pop": 0.22
			},
			{
					"dt": 1666180800,
					"temp": 15.14,
					"feels_like": 14.22,
					"pressure": 1023,
					"humidity": 58,
					"dew_point": 7.01,
					"uvi": 0,
					"clouds": 80,
					"visibility": 10000,
					"wind_speed": 1.9,
					"wind_deg": 26,
					"wind_gust": 3.24,
					"weather": [
							{
									"id": 803,
									"main": "Clouds",
									"description": "broken clouds",
									"icon": "04n"
							}
					],
					"pop": 0.22
			},
			{
					"dt": 1666184400,
					"temp": 15.43,
					"feels_like": 14.44,
					"pressure": 1023,
					"humidity": 54,
					"dew_point": 6.25,
					"uvi": 0,
					"clouds": 69,
					"visibility": 10000,
					"wind_speed": 3.62,
					"wind_deg": 15,
					"wind_gust": 6.78,
					"weather": [
							{
									"id": 803,
									"main": "Clouds",
									"description": "broken clouds",
									"icon": "04n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666188000,
					"temp": 15.28,
					"feels_like": 14.06,
					"pressure": 1024,
					"humidity": 46,
					"dew_point": 3.57,
					"uvi": 0,
					"clouds": 60,
					"visibility": 10000,
					"wind_speed": 4.71,
					"wind_deg": 28,
					"wind_gust": 7.92,
					"weather": [
							{
									"id": 803,
									"main": "Clouds",
									"description": "broken clouds",
									"icon": "04n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666191600,
					"temp": 14.87,
					"feels_like": 13.56,
					"pressure": 1024,
					"humidity": 44,
					"dew_point": 2.82,
					"uvi": 0,
					"clouds": 42,
					"visibility": 10000,
					"wind_speed": 4.76,
					"wind_deg": 26,
					"wind_gust": 7.94,
					"weather": [
							{
									"id": 802,
									"main": "Clouds",
									"description": "scattered clouds",
									"icon": "03n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666195200,
					"temp": 14.67,
					"feels_like": 13.5,
					"pressure": 1024,
					"humidity": 50,
					"dew_point": 4.31,
					"uvi": 0,
					"clouds": 34,
					"visibility": 10000,
					"wind_speed": 4.61,
					"wind_deg": 25,
					"wind_gust": 7.09,
					"weather": [
							{
									"id": 802,
									"main": "Clouds",
									"description": "scattered clouds",
									"icon": "03n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666198800,
					"temp": 14.57,
					"feels_like": 13.41,
					"pressure": 1024,
					"humidity": 51,
					"dew_point": 4.58,
					"uvi": 0,
					"clouds": 28,
					"visibility": 10000,
					"wind_speed": 4.33,
					"wind_deg": 27,
					"wind_gust": 6.38,
					"weather": [
							{
									"id": 802,
									"main": "Clouds",
									"description": "scattered clouds",
									"icon": "03n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666202400,
					"temp": 14.37,
					"feels_like": 13.17,
					"pressure": 1024,
					"humidity": 50,
					"dew_point": 4.24,
					"uvi": 0,
					"clouds": 25,
					"visibility": 10000,
					"wind_speed": 4,
					"wind_deg": 27,
					"wind_gust": 5.64,
					"weather": [
							{
									"id": 802,
									"main": "Clouds",
									"description": "scattered clouds",
									"icon": "03n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666206000,
					"temp": 14.13,
					"feels_like": 12.9,
					"pressure": 1024,
					"humidity": 50,
					"dew_point": 3.73,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 3.57,
					"wind_deg": 26,
					"wind_gust": 4.96,
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
					"temp": 13.85,
					"feels_like": 12.57,
					"pressure": 1025,
					"humidity": 49,
					"dew_point": 3.45,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 3.85,
					"wind_deg": 19,
					"wind_gust": 5.32,
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
					"dt": 1666213200,
					"temp": 13.52,
					"feels_like": 12.23,
					"pressure": 1026,
					"humidity": 50,
					"dew_point": 3.32,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 4.16,
					"wind_deg": 15,
					"wind_gust": 5.68,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666216800,
					"temp": 13.67,
					"feels_like": 12.35,
					"pressure": 1027,
					"humidity": 48,
					"dew_point": 2.96,
					"uvi": 0.21,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 4.14,
					"wind_deg": 14,
					"wind_gust": 5.05,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666220400,
					"temp": 14.43,
					"feels_like": 13.08,
					"pressure": 1027,
					"humidity": 44,
					"dew_point": 2.47,
					"uvi": 0.87,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 3.81,
					"wind_deg": 11,
					"wind_gust": 4.16,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666224000,
					"temp": 15.35,
					"feels_like": 14.01,
					"pressure": 1027,
					"humidity": 41,
					"dew_point": 1.93,
					"uvi": 2.01,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 3.75,
					"wind_deg": 8,
					"wind_gust": 3.91,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666227600,
					"temp": 16.23,
					"feels_like": 14.87,
					"pressure": 1027,
					"humidity": 37,
					"dew_point": 1.58,
					"uvi": 3.33,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 3.4,
					"wind_deg": 14,
					"wind_gust": 3.71,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666231200,
					"temp": 16.95,
					"feels_like": 15.61,
					"pressure": 1027,
					"humidity": 35,
					"dew_point": 1.18,
					"uvi": 4.27,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.87,
					"wind_deg": 27,
					"wind_gust": 3.13,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666234800,
					"temp": 17.69,
					"feels_like": 16.32,
					"pressure": 1026,
					"humidity": 31,
					"dew_point": 0.18,
					"uvi": 4.45,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.09,
					"wind_deg": 40,
					"wind_gust": 2.47,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666238400,
					"temp": 18.32,
					"feels_like": 16.94,
					"pressure": 1026,
					"humidity": 28,
					"dew_point": -0.73,
					"uvi": 3.81,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.46,
					"wind_deg": 60,
					"wind_gust": 1.94,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666242000,
					"temp": 18.67,
					"feels_like": 17.27,
					"pressure": 1025,
					"humidity": 26,
					"dew_point": -1.29,
					"uvi": 2.57,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.18,
					"wind_deg": 87,
					"wind_gust": 1.62,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666245600,
					"temp": 18.91,
					"feels_like": 17.51,
					"pressure": 1025,
					"humidity": 25,
					"dew_point": -1.62,
					"uvi": 1.28,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.21,
					"wind_deg": 121,
					"wind_gust": 1.34,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666249200,
					"temp": 18.95,
					"feels_like": 17.55,
					"pressure": 1025,
					"humidity": 25,
					"dew_point": -1.77,
					"uvi": 0.41,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.28,
					"wind_deg": 140,
					"wind_gust": 1.24,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666252800,
					"temp": 18.86,
					"feels_like": 17.48,
					"pressure": 1026,
					"humidity": 26,
					"dew_point": -1.46,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.77,
					"wind_deg": 154,
					"wind_gust": 1.61,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1666256400,
					"temp": 18.74,
					"feels_like": 17.43,
					"pressure": 1027,
					"humidity": 29,
					"dew_point": 0.11,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.88,
					"wind_deg": 160,
					"wind_gust": 2.79,
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
					"dt": 1666260000,
					"temp": 18.35,
					"feels_like": 17.15,
					"pressure": 1027,
					"humidity": 35,
					"dew_point": 2.37,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 3.89,
					"wind_deg": 162,
					"wind_gust": 3.79,
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
					"dt": 1666263600,
					"temp": 17.9,
					"feels_like": 16.84,
					"pressure": 1028,
					"humidity": 42,
					"dew_point": 4.78,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 4.17,
					"wind_deg": 167,
					"wind_gust": 4.29,
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
					"dt": 1666267200,
					"temp": 17.56,
					"feels_like": 16.57,
					"pressure": 1027,
					"humidity": 46,
					"dew_point": 5.98,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 4.59,
					"wind_deg": 168,
					"wind_gust": 5.18,
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
					"dt": 1666270800,
					"temp": 17.4,
					"feels_like": 16.42,
					"pressure": 1027,
					"humidity": 47,
					"dew_point": 6.13,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 3.89,
					"wind_deg": 170,
					"wind_gust": 5.13,
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
					"dt": 1666274400,
					"temp": 17.39,
					"feels_like": 16.41,
					"pressure": 1027,
					"humidity": 47,
					"dew_point": 6.14,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.98,
					"wind_deg": 177,
					"wind_gust": 4.65,
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
					"dt": 1666278000,
					"temp": 17.31,
					"feels_like": 16.32,
					"pressure": 1027,
					"humidity": 47,
					"dew_point": 5.99,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.7,
					"wind_deg": 188,
					"wind_gust": 4.66,
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
					"dt": 1666281600,
					"temp": 17.09,
					"feels_like": 16.08,
					"pressure": 1027,
					"humidity": 47,
					"dew_point": 5.57,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.32,
					"wind_deg": 207,
					"wind_gust": 3.92,
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
					"dt": 1666285200,
					"temp": 16.79,
					"feels_like": 15.73,
					"pressure": 1027,
					"humidity": 46,
					"dew_point": 4.97,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.18,
					"wind_deg": 234,
					"wind_gust": 3.63,
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
					"dt": 1666288800,
					"temp": 16.41,
					"feels_like": 15.31,
					"pressure": 1027,
					"humidity": 46,
					"dew_point": 4.62,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.96,
					"wind_deg": 260,
					"wind_gust": 3.31,
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
					"dt": 1666292400,
					"temp": 16.05,
					"feels_like": 14.91,
					"pressure": 1027,
					"humidity": 46,
					"dew_point": 4.48,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.78,
					"wind_deg": 282,
					"wind_gust": 2.77,
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
					"dt": 1666296000,
					"temp": 15.8,
					"feels_like": 14.66,
					"pressure": 1028,
					"humidity": 47,
					"dew_point": 4.41,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.54,
					"wind_deg": 286,
					"wind_gust": 2.51,
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
					"dt": 1666299600,
					"temp": 15.64,
					"feels_like": 14.49,
					"pressure": 1028,
					"humidity": 47,
					"dew_point": 4.32,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.57,
					"wind_deg": 286,
					"wind_gust": 2.45,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			}
	],
	"daily": [
			{
					"dt": 1666144800,
					"sunrise": 1666126214,
					"sunset": 1666166489,
					"moonrise": 0,
					"moonset": 1666155720,
					"moon_phase": 0.79,
					"temp": {
							"day": 14.25,
							"min": 13.8,
							"max": 15.5,
							"night": 15.28,
							"eve": 15.23,
							"morn": 13.82
					},
					"feels_like": {
							"day": 13.19,
							"night": 14.06,
							"eve": 14.14,
							"morn": 13.09
					},
					"pressure": 1021,
					"humidity": 56,
					"dew_point": 5.6,
					"wind_speed": 6.21,
					"wind_deg": 16,
					"wind_gust": 8.16,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"clouds": 95,
					"pop": 0.85,
					"rain": 1.09,
					"uvi": 3.29
			},
			{
					"dt": 1666231200,
					"sunrise": 1666212667,
					"sunset": 1666252814,
					"moonrise": 1666192320,
					"moonset": 1666244040,
					"moon_phase": 0.82,
					"temp": {
							"day": 16.95,
							"min": 13.52,
							"max": 18.95,
							"night": 17.39,
							"eve": 18.86,
							"morn": 13.85
					},
					"feels_like": {
							"day": 15.61,
							"night": 16.41,
							"eve": 17.48,
							"morn": 12.57
					},
					"pressure": 1027,
					"humidity": 35,
					"dew_point": 1.18,
					"wind_speed": 4.76,
					"wind_deg": 26,
					"wind_gust": 7.94,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"clouds": 0,
					"pop": 0,
					"uvi": 4.45
			},
			{
					"dt": 1666317600,
					"sunrise": 1666299121,
					"sunset": 1666339140,
					"moonrise": 1666282320,
					"moonset": 1666332180,
					"moon_phase": 0.85,
					"temp": {
							"day": 20.71,
							"min": 15.64,
							"max": 21.46,
							"night": 19.56,
							"eve": 20.79,
							"morn": 15.8
					},
					"feels_like": {
							"day": 20.01,
							"night": 19.06,
							"eve": 20.26,
							"morn": 14.66
					},
					"pressure": 1027,
					"humidity": 45,
					"dew_point": 8.28,
					"wind_speed": 7.51,
					"wind_deg": 192,
					"wind_gust": 8.62,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"clouds": 0,
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
							"day": 20.53,
							"min": 17.89,
							"max": 22.09,
							"night": 19.52,
							"eve": 21.8,
							"morn": 18.15
					},
					"feels_like": {
							"day": 19.89,
							"night": 18.96,
							"eve": 21.42,
							"morn": 17.33
					},
					"pressure": 1021,
					"humidity": 48,
					"dew_point": 8.89,
					"wind_speed": 5.16,
					"wind_deg": 220,
					"wind_gust": 7.64,
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
					"uvi": 2.88
			},
			{
					"dt": 1666490400,
					"sunrise": 1666472030,
					"sunset": 1666511795,
					"moonrise": 1666462440,
					"moonset": 1666508160,
					"moon_phase": 0.92,
					"temp": {
							"day": 21.37,
							"min": 17.52,
							"max": 24.69,
							"night": 22.14,
							"eve": 24.34,
							"morn": 17.79
					},
					"feels_like": {
							"day": 20.87,
							"night": 21.69,
							"eve": 24.08,
							"morn": 17.06
					},
					"pressure": 1010,
					"humidity": 50,
					"dew_point": 10.38,
					"wind_speed": 4.18,
					"wind_deg": 213,
					"wind_gust": 6.34,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"clouds": 7,
					"pop": 0,
					"uvi": 4.43
			},
			{
					"dt": 1666576800,
					"sunrise": 1666558485,
					"sunset": 1666598124,
					"moonrise": 1666552560,
					"moonset": 1666596060,
					"moon_phase": 0.95,
					"temp": {
							"day": 19.71,
							"min": 17.26,
							"max": 20.37,
							"night": 17.26,
							"eve": 18.92,
							"morn": 17.78
					},
					"feels_like": {
							"day": 18.57,
							"night": 16.32,
							"eve": 17.94,
							"morn": 16.92
					},
					"pressure": 1012,
					"humidity": 32,
					"dew_point": 2.52,
					"wind_speed": 7.78,
					"wind_deg": 346,
					"wind_gust": 10.09,
					"weather": [
							{
									"id": 802,
									"main": "Clouds",
									"description": "scattered clouds",
									"icon": "03d"
							}
					],
					"clouds": 26,
					"pop": 0.04,
					"uvi": 5
			},
			{
					"dt": 1666663200,
					"sunrise": 1666644941,
					"sunset": 1666684454,
					"moonrise": 1666642860,
					"moonset": 1666684140,
					"moon_phase": 0,
					"temp": {
							"day": 10.6,
							"min": 10.6,
							"max": 15.38,
							"night": 10.99,
							"eve": 11.34,
							"morn": 11.53
					},
					"feels_like": {
							"day": 9.73,
							"night": 10.23,
							"eve": 10.57,
							"morn": 10.78
					},
					"pressure": 1022,
					"humidity": 77,
					"dew_point": 6.77,
					"wind_speed": 7.55,
					"wind_deg": 37,
					"wind_gust": 10.7,
					"weather": [
							{
									"id": 502,
									"main": "Rain",
									"description": "heavy intensity rain",
									"icon": "10d"
							}
					],
					"clouds": 100,
					"pop": 1,
					"rain": 39.76,
					"uvi": 5
			},
			{
					"dt": 1666749600,
					"sunrise": 1666731397,
					"sunset": 1666770785,
					"moonrise": 1666733340,
					"moonset": 1666772460,
					"moon_phase": 0.02,
					"temp": {
							"day": 15.25,
							"min": 11.14,
							"max": 17.24,
							"night": 15.3,
							"eve": 16.72,
							"morn": 11.49
					},
					"feels_like": {
							"day": 14.06,
							"night": 13.9,
							"eve": 15.54,
							"morn": 10.52
					},
					"pressure": 1022,
					"humidity": 47,
					"dew_point": 3.87,
					"wind_speed": 8.91,
					"wind_deg": 348,
					"wind_gust": 12.3,
					"weather": [
							{
									"id": 502,
									"main": "Rain",
									"description": "heavy intensity rain",
									"icon": "10d"
							}
					],
					"clouds": 98,
					"pop": 1,
					"rain": 7.88,
					"uvi": 5
			}
	],
	"city_name": "Tokyo",
	"local_time": new Date("2022-10-19T11:25:53.733Z"),
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
