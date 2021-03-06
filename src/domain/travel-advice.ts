import { Trip } from './trip';

// Generated by https://quicktype.io

export interface TravelAdvice {
	firstArrival?: string;
	firstDeparture?: string;
	firstTrip?: Trip;
	lastTrip?: Trip;
	lastTripArrival?: string;
	lastTripDeparture?: string;
	message?: string;
	scrollRequestBackwardContext?: string;
	scrollRequestForwardContext?: string;
	trips?: Trip[];
}
