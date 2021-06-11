const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Intern();
        expect(typeof(e)).toBe("object");
    });

    it("Can set name via constructor arguments", () => {
        const name = "Matt";
        const pic = "http://example.com"
        const role = "Intern"
        const id = "123"
        const email = "matt@example.com"
        const school = "Northwestern"
        const e = new Intern(pic, name, id, email, school);
        // console.log(e)
        expect(e.name).toBe("Matt");
        expect(e.getRole()).toBe("Intern");
        expect(e.school).toBe("Northwestern");

    });
})