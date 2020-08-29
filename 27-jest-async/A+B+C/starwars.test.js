let {
    duel,
    Sith,
    Jedi,
    Wife
} = require("./starwars");

let name;
let power;
let health;
let damage;
let jedi;
let sith;
let wife;

describe('Jedi', ()=> {
    beforeEach(() => {
        jedi = new Jedi(name, power, health);
        sith = new Sith(name, power, health);
    });
    test("assign name",() => {
        expect(jedi.name).toEqual(name);
    });
    test("assign power",() => {
        expect(jedi.power).toEqual(power);
    });
    test("assign health",() => {
        expect(jedi.health).toEqual(health);
    });
    test("attack should work",() => {
        const spySith = jest.spyOn(sith, 'injure');
        jedi.attack(sith);
        expect(spySith).toHaveBeenCalled();
    });
    test("injure should work",() => {
        const mockJedi = jest.spyOn(jedi, 'injure');
        mockJedi.mockImplementation(()=> 'done');
        expect(jedi.injure(damage)).toEqual('done');
    });
    test("dead should be false",() => {
        expect(jedi.dead()).toBeFalsy();
    })
});

describe('Sith', ()=> {
    beforeEach(() => {
        jedi = new Jedi(name, power, health);
        sith = new Sith(name, power, health);
        wife = new Wife(name);
    });
    test("assign name",() => {
        expect(sith.name).toEqual(name);
    });
    test("assign power",() => {
        expect(sith.power).toEqual(power);
    });
    test("assign health",() => {
        expect(sith.health).toEqual(health);
    });
    test("attack should work",() => {
        const spyJedi = jest.spyOn(jedi, 'injure');
        sith.attack(jedi);
        expect(spyJedi).toHaveBeenCalled();
    });
    test("injure should work",() => {
        const mockSith = jest.spyOn(sith, 'injure');
        mockSith.mockImplementation(()=> 'done');
        expect(sith.injure(damage)).toEqual('done');
    });
    test("dead should be false",() => {
        expect(sith.dead()).toBeFalsy();
    });
    test("faint should work",() => {
        const spyWife = jest.spyOn(wife, 'fainted');
        sith.faint(wife);
        expect(spyWife).toHaveBeenCalled();
    });
});

let obiwan;
let anakin;
let mockObiwanAttack;
let mockAnakinAttack;
let mockObiwanInjure;
let mockAnakinInjure;
let mockObiwanDead;
let mockAnakinDead;

describe("Duel",()=> {
    beforeEach(()=> {
        obiwan = new Jedi(name,power,health);
        anakin = new Sith(name,power,health);
        mockObiwanAttack = jest.spyOn(obiwan,"attack");
        mockAnakinAttack = jest.spyOn(anakin,"attack");
        mockObiwanInjure = jest.spyOn(obiwan,"injure");
        mockAnakinInjure = jest.spyOn(anakin,"injure");
        mockObiwanDead = jest.spyOn(obiwan,"dead");
        mockAnakinDead = jest.spyOn(anakin,"dead");
        jest.useFakeTimers();
    });
    test("duel should work",()=>{
        duel(obiwan,anakin);
        expect(mockObiwanAttack).toHaveBeenCalledTimes(6);
        expect(mockAnakinAttack).toHaveBeenCalledTimes(6);
        expect(mockObiwanInjure).toHaveBeenCalledTimes(6);
        expect(mockAnakinInjure).toHaveBeenCalledTimes(7);
        mockObiwanDead.mockImplementationOnce(()=> false);
        expect(obiwan.dead()).not.toBeTruthy();
        mockAnakinDead.mockImplementationOnce(()=> true);
        expect(anakin.dead()).toBeTruthy();
        jest.advanceTimersByTime(5001);
        expect(anakin.health).toEqual(800);
    });
});