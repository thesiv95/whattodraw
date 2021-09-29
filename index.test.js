const data = require('./data'); 
const generate = require('./index');

describe('main test', () => {
    it('should exist', () => {
        expect(generate).toBeDefined();
        expect(generate).not.toBeNull();
    });

    it('should return one suggestion if no items param', () => {
        const suggestion = generate();
        expect(data.includes(suggestion)).toBe(true);
    });

    it('should return array of suggestions if items > 1', () => {
        const suggestions = generate(3);
        expect(data.includes(suggestions[0])).toBe(true);
        expect(data.includes(suggestions[1])).toBe(true);
        expect(data.includes(suggestions[2])).toBe(true);
    });

    it('should throw error if items param is incorrect', () => {
        expect(() => generate(0)).toThrow(Error);
        expect(() => generate(-9)).toThrow(Error);
        expect(() => generate('five')).toThrow(Error);
    })
});