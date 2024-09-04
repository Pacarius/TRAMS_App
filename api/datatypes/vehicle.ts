class Vehicle{
    constructor(
        public readonly ownerName: string | undefined, 
        public readonly vehicleID: string | undefined, 
        public readonly vehicleType: VehicleType){}
}
enum VehicleType {
    UNDEFINED = 0,
    CAR,
    MOTORCYCLE,  
}
export {Vehicle, VehicleType};