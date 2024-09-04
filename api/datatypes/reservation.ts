import { Vehicle } from "./vehicle";

class Reservation{
    constructor(
        public readonly RES_UUID: number | undefined,
        public readonly start: Date,
        public readonly Duration: number,
        public readonly X: number,
        public readonly Y: number,
        public readonly street: string,
        public readonly status: ReservationStatus,
        public readonly vehicle: Vehicle
    ){}
}
enum ReservationStatus{
    Waiting = 0,
    Active,
    Cancelled,
    Expired,
    Completed,
    Occupied
}
export {Reservation, ReservationStatus};