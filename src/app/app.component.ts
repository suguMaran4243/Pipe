import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';import { Student } from './student';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pipes';
  students:Student[];
  totalMarks:number;
  filterText:string='';
  

  constructor(private service: StudentService)
  {
    
  }

  ngOnInit(): void {
    this.students=this.service.student;
    this.totalMarks=this.service.totalMarks
  }
  addToStudent()
  {
    let studentCopy=Object.assign([],this.students)
    studentCopy.push({name:'Deepak',course:'IT',marks:456,DOB:new Date('04-12-2001'),gender:'Male',fees:76000});
    this.students=studentCopy;
  }
  changeGender()
  {
    let studentCopy=Object.assign([],this.students)
    studentCopy[0].gender='Female';
    this.students=studentCopy;  
  }
}
