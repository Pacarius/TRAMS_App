import { Vehicle, VehicleType } from "@/api/datatypes/vehicle";

class vehicleHelper{
    //Hex code based.
    vehicleColorMap = new Map<string, string>();

    public getVehicleColor = (type: string) => {
        const tmp = this.vehicleColorMap.get(type);
        return tmp ? tmp : "0000ff";
    }

    public setVehicleColor = (type: string, color: string) => {
        this.vehicleColorMap.set(type, color);
    }

    public getVehicleIcon = (type: VehicleType) => {
        switch (type) {
            case VehicleType.CAR: return require('@/assets/example/images/car.png');
            case VehicleType.MOTORCYCLE: return require('@/assets/example/images/motorcycle.png');
            default: return "help";
        }
    }
}