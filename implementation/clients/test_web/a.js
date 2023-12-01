class A {
    b = -1;
    constructor() {
        this.a = 1;
        this.b = 2;
        
    }
    f=()=> {
        console.log(this)
    }
}
new A().f()