const ip: string = '';
class ApiHandler {
    public getVehicleInfo(){
        return new VehicleInformation("TEMP", "AB1234", VehicleType.CAR);
    }
}
class VehicleInformation {
    constructor(
        public readonly ownerName: string, 
        public readonly vehicleID: string, 
        public readonly vehicleType: VehicleType){}
}
enum VehicleType {
    UNDEFINED = 0,
    CAR,
    MOTORCYCLE,
    
}