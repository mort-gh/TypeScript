/// <reference path='fourslash.ts' />

//// class A {[|
////     |]constructor() {
////         this.foo1(1,2,3);
////         // 7 type args
////         this.foo2<1,2,3,4,5,6,7>();
////         // 8 type args
////         this.foo3<1,2,3,4,5,6,7,8>();
////     }
//// }

verify.codeFix({
    description: "Declare method 'foo1'",
    index: 0,
    newRangeContent: `
    foo1(arg0: number, arg1: number, arg2: number): any {
        throw new Error("Method not implemented.");
    }
    `,
});

verify.codeFix({
    description: "Declare method 'foo2'",
    index: 0,
    newRangeContent: `
    foo2<T, U, V, W, X, Y, Z>(): any {
        throw new Error("Method not implemented.");
    }
    foo1(arg0: number, arg1: number, arg2: number): any {
        throw new Error("Method not implemented.");
    }
    `
});

verify.codeFix({
    description: "Declare method 'foo3'",
    index: 0,
    newRangeContent:`
    foo3<T0, T1, T2, T3, T4, T5, T6, T7>(): any {
        throw new Error("Method not implemented.");
    }
    foo2<T, U, V, W, X, Y, Z>(): any {
        throw new Error("Method not implemented.");
    }
    foo1(arg0: number, arg1: number, arg2: number): any {
        throw new Error("Method not implemented.");
    }
    `
});
