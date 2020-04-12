function Shape(type, side) {
    this.type = type;
    this.side = side;
}


function Circle(r) {
    let iMTryMamkinProgrammer = Object.keys(this)[0];
    let shape = new Shape(iMTryMamkinProgrammer, r);
    this.r = r;

    this.calcSquare = function () {
        return Math.PI * Math.pow(this.r, 2);

    }
    shape.area = this.calcSqure;
}

let circle = new Circle('one', 2);

console.log(circle)




// function Circle(name, r) {
//     this.name = name;
//     this.r = r;
// }


// this.calcSquare = function () {
    //     area = width * height;
    // }

// this.width = width;
    // this.height = height;

// let Circle = new Shape();
// let Square = new Shape();







// function Сircle(name, r) {
//     this.name = name;
//     this.area = Math.PI*

// }

// function Square(name) {
//     this.name = name;

// }



// function Shape(param1)
// {
//    this.param1 = param1;
// }

// function Сircle(param)
// {
//     let test  = new Shape(param);

//     this.area = function(){
//         return Math.PI * (Math.pow(param, 2));
//     }
//     test.param1 = this.area;
// }


// let circle = new Circle(5);
// console.log(circle)