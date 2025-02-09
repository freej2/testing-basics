const { capitalize } = require('./functions');

describe('capitalize', () => {
    test('capitalizes the first character of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('world')).toBe('World');
    });

    test('handles single character strings', () => {
        expect(capitalize('a')).toBe('A');
        expect(capitalize('z')).toBe('Z');
    });

    test('handles empty strings', () => {
        expect(capitalize('')).toBe('');
    });

    test('handles strings that already start with capital letters', () => {
        expect(capitalize('Hello')).toBe('Hello');
        expect(capitalize('WORLD')).toBe('WORLD');
    });

    test('handles strings with special characters', () => {
        expect(capitalize('123abc')).toBe('123abc');
        expect(capitalize('!hello')).toBe('!hello');
    });

    test('throws TypeError for non-string inputs', () => {
        expect(() => capitalize(123)).toThrow(TypeError);
        expect(() => capitalize(null)).toThrow(TypeError);
        expect(() => capitalize(undefined)).toThrow(TypeError);
        expect(() => capitalize({})).toThrow(TypeError);
    });
});
