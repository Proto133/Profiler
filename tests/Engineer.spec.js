const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Engineer();

        expect(typeof(e)).toBe("object");
    });

    it("Can set name via constructor arguments", () => {
        const name = "Alice";
        const pic = "http://example.com"
        const e = new Engineer(pic, name);
        expect(e.name).toBe("Alice");
        expect(e.getRole()).toBe("Engineer");
    });
})