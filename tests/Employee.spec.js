const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });


    it("Can set name via correlated constructor arguments", () => {
        const pic = "www.example.com";
        const name = "John Doe"
        const e = new Employee(pic, name)
        expect(e.name).toBe("John Doe");
    })
})