const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Manager();
        expect(typeof(e)).toBe("object");
    });

    it("Can set name via constructor arguments", () => {
        const name = "Matt";
        const pic = ""
        const id = "123"
        const email = "matt@example.com"
        const phone = "18005555555"
        const e = new Manager(pic, name, id, email, phone);
        expect(e.name).toBe("Matt");
        expect(e.getRole()).toBe("Manager")

        //Tests Managers Number is storing.
        expect(e.officeNumber).toBe(phone);
    });

    it("Tests That Empty String is returned as placeholder URL", () => {
        const name = "Matt";
        const pic = ""
        const role = "Manager"
        const id = "123"
        const email = "matt@example.com"
        const phone = "18005555555"
        const e = new Manager(pic, role, name, id, email, phone);
        //Tests That Empty String is returned as placeholder URL
        expect(e.profilePicture).toBe("https://icecube-us-846.icedrive.io/thumbnail?p=TsjPQlGjhy84SSe17FBre0VCoWQdFP46xr0Skmf7Vakb0w41HnNdNmeEwWnfUWq3k7%2FFrQahefqY0UeOm2cDMTIiH3slMDg%2BMAEK85yc04JkUL86CcdpC7OzXbaKu%2BCK&w=1280&h=1280&m=cropped")
    });
})