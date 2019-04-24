'use strict';

//   Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
//   Also, the DOW is randomly ordered to the bookings from an array.
//   DOW stands for Day of the Week (MON, TUE, etc.)
let array1:string[]=[]
function makeid(length:number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
let array2:string[]=['MON','TUE','WED','THU','FRI','SAT','SUN']
interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
}
class Reservation implements Reservationy {
    getDowBooking(): string {
        return array2[Math.round(Math.random()*array2.length)]
    }
    getCodeBooking(): string {
        return makeid(8)
    }
    getAllTheInfo(){
        for(let i:number=0;i<8;i++){
            console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`)
        }
    }
}
let reservation:Reservation= new Reservation()
reservation.getAllTheInfo()

