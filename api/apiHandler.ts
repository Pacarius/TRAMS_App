const ip: string = '';
export class ApiHandler {
    public getVehicleInfo(){
        return new VehicleInformation("TEMP", "AB1234", VehicleType.CAR, "13/09/2025");
    }
}
class VehicleInformation {
    constructor(
        public readonly ownerName: string, 
        public readonly vehicleID: string, 
        public readonly vehicleType: VehicleType,
        public readonly expiryDate: string){}
}
export enum VehicleType {
    UNDEFINED = 0,
    CAR,
    MOTORCYCLE,
    
}