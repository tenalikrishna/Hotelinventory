export interface rooms {
    availablerooms:number;

    bookedrooms:number
 totalrooms:number
}
export interface RoomList{
    roomNumber?: string;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;

}