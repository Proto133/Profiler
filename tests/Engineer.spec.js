const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Engineer();

        expect(typeof(e)).toBe("object");
    });

    it("Can set name via constructor arguments", () => {
        const name = "Alice";
        const pic = "http://example.com"
        const role = "Engineer"
        const e = new Engineer(pic, role, name);
        // console.log(e)
        expect(e.name).toBe(name);
        expect(e.role).toBe(role);
    });
})