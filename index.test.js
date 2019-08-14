const convertor = require('./');

test('Should convert roman numeral I to 1', () => {
    expect(convertor(`I`)).toBe(1);
});

test('Should convert roman numeral V to 5', () => {
    expect(convertor(`V`)).toBe(5);
});

test('Should convert roman numeral X to 10', () => {
    expect(convertor(`X`)).toBe(10);
});

test('Should convert roman numeral L to 50', () => {
    expect(convertor(`L`)).toBe(50);
});

test('Should convert roman numerals II to 2', () => {
    expect(convertor('II')).toBe(2);
});

test('Should convert roman numerals III to 3', () => {
    expect(convertor('III')).toBe(3);
});

test('Should convert roman numerals VI to 6', () => {
    expect(convertor('VI')).toBe(6);
});


test('Should convert roman numerals IV to 4', () => {
    expect(convertor('IV')).toBe(4);
});

test('Should convert roman numerals XLIV to 44', () => {
    expect(convertor('XLIV')).toBe(44);
});

test('Should convert roman numerals MMMCMXCIX to 3999', () => {
    expect(convertor('MMMCMXCIX')).toBe(3999);
});

test('Should convert roman numerals D to 500', () => {
    expect(convertor('D')).toBe(500);
});

test('Should throw Error for roman numerals in a row', () => {
    expect(()=>convertor('IIII')).toThrow("InvalidArgument");
});

test('Should throw Error for roman numerals in not in row', () => {
    expect(convertor('XXVIII')).toBe(28);
});

test('Should not allow mulitple V in a row', () => {
    expect(() => convertor('VV')).toThrow("InvalidArgument")
});