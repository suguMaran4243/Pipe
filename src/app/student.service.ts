   import { Student } from "./student";
   export class StudentService
    {
        student:Student[]=[

            {name:'Sugumaran',course:'ISE',marks:482,DOB: new Date('10-04-2001'),gender:'Male',fees:50000},
            {name:'Sathur',course:'MECH',marks:472,DOB: new Date('12-10-2001'),gender:'Male',fees:60000},
            {name:'Thirumurugan',course:'BCA',marks:492,DOB: new Date('01-10-2001'),gender:'Male',fees:90000},
            {name:'Dinesh',course:'EEE',marks:442,DOB: new Date('02-10-2001'),gender:'Male',fees:80000},
            {name:'Rathish',course:'ISE',marks:432,DOB: new Date('8-20-2001'),gender:'Male',fees:50000},
            {name:'Abirami',course:'CSE',marks:489,DOB: new Date('9-10-2001'),gender:'Female',fees:40000},
            {name:'Divya',course:'IT',marks:467,DOB: new Date('7-10-2001'),gender:'Female',fees:40000},
            {name:'Megala',course:'MCA',marks:478,DOB: new Date('6-10-2001'),gender:'Female',fees:40000},
            {name:'Viji',course:'ECE',marks:490,DOB: new Date('5-10-2001'),gender:'Female',fees:40000},

        ]
         
        totalMarks=600;
        
    }