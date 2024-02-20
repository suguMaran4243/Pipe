import { Pipe, PipeTransform } from "@angular/core";
@Pipe(
    {
        name:'percentage'
    }
)
export class PercentagePipe implements PipeTransform
{
constructor()
{

}
transform(value:any,totalMarks:number,decimal:number) {
    return (value/totalMarks *100).toFixed(2);
    
}
}