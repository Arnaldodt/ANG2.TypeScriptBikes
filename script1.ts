class bike{
    public millas:number
 
    constructor(public precio: number,public velocidad_max:string){
       this.millas=0;
    }
    public displayInfo = ()=>{
       console.log(this.precio, this.velocidad_max, Math.abs(this.millas));
    }
    public ride = () => {
       console.log("Riding");
       this.millas +=10;
    }
    public reverse = () => {
       console.log("Reversing");
       this.millas -=5;
    }
 }
 console.log('ejecucion')
 const bike1 = new bike(200,"25mph");
 bike1.ride();
 bike1.ride();
 bike1.ride();
 bike1.reverse();
 bike1.displayInfo();
 
 const bike2 = new bike(520,"50mph");
 bike2.ride();
 bike2.ride();
 bike2.reverse();
 bike2.reverse();
 bike2.displayInfo();
 
 const bike3 = new bike(650,"90mph");
 bike3.reverse();
 bike3.reverse();
 bike3.reverse();
 bike3.displayInfo();
 