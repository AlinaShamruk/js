class Clock {
    constructor({ template }) {
        this.template = template;

    }
    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      let { precision=1000 } = options;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  };


let clock = new ExtendedClock({ template: 'h:m:s' , precision : 10000});
console.log(clock.start());













// class Shape {
//     constructor(type, name) {
//         this.type = type;
//         this.name = name;
//     }
//     sq() {
//         return this.calcSq();
//     }

//     showShape() {
//         console.log('--------------------');
//         console.log(`type -> ${this.type}`);
//         console.log(`name -> ${this.name}`);
//         console.log(`square-> ` + this.sq());
//         switch (this.type) {
//             case 'circle':
//                 console.log(`diametr -> ${this.d}`);
//                 break;
//             case 'square':
//                 console.log(`square -> ${this.side}`);
//                 break;

//         }
//     }
// }

// class Circle extends Shape {
//     constructor(type, name, d) {
//         super(type, name);
//         this.d = d;
//     }


//     calcSq() {
//         return (this.d / 2) ** 2 * Math.PI;
//     };
// }

// class Square extends Shape {
//     constructor(type, name, side) {
//         super(type, name);
//         this.side = side;
//     }

//     calcSq() {
//         return (this.side ** 2);
//     };
// }

// let circ = new Circle('circle', 'one', 50);
// let squ = new Square('square', 'two', 5);
// let shapes = new Shape()
// circ.showShape()