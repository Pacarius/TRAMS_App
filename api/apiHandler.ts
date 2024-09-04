
import { Reservation } from "./datatypes/reservation";
import { VehicleType, Vehicle } from "./datatypes/vehicle";

class ApiHandler {
    ip: string = '192.168.50.84';
    public setIp = (ip: string) => this.ip = ip;

    username: string = 'me';

    ipString : string = 'http://' + this.ip + ':9696';

    public ownedVehicles: Vehicle[] = [];
    public ownedReservations: Reservation[] = [];
    requestBuilder(params : Map<string, string>, endpoint: string){return `${this.ipString}/${endpoint}?${Array.from(params).map(([key, value]) => `${key}=${value}`).join('&')}`;}
    public async reloadData(){
        try {
            var V = await (await fetch(this.requestBuilder(new Map([['owner', this.username]]), 'getvo'))).json();
            // console.log(this.requestBuilder(new Map([['owner', this.username]]), 'getvo'));
            // console.log(V);
            this.ownedVehicles = V.map((vehicle: any) => new Vehicle(vehicle.OwnerName, vehicle.ID, vehicle.Type));
            console.log(this.ownedVehicles);
        } catch (error) {
            console.error('Error fetching vehicle data:', error);
        }
    
        try {
            var R = await (await fetch(this.requestBuilder(new Map([['owner', this.username]]), 'getro'))).json();
            this.ownedReservations = R.map((reservation: any) => new Reservation(reservation.RES_UUID, reservation.Beg_Datetime, reservation.Duration, reservation.X, reservation.Y, reservation.street_NAME, reservation.Status, new Vehicle(reservation.OwnerName, reservation.ID, reservation.Type)));
            console.log(this.ownedReservations);
        } catch (error) {
            console.error('Error fetching reservation data:', error);
        }
    }
    public getVehicleInfo() {
        return new Vehicle("TEMP", "AB1234", VehicleType.CAR);
    }//Will be removed
}
export { ApiHandler };