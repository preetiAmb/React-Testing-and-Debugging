import data from '../../data/courses.json';

// Numbers
const numItems = data.length;

describe('Number tests', () =>{
  test('Number of items = 12', () => {
    expect(numItems).toBe(12);
  });
  
  test('Number of items to be greater than 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

// Strings
const dataTest = data[0].title;

describe('Strings tests', () => {
  test('There title contains React', () => {
    expect(dataTest).toContain('React');
  });
  
  test('There is a JS in this title', () => {
    expect(dataTest).toMatch(/JS/);
  });
});

// Arrays
const data2 = ['React Native', 'MeteorJS'];

describe('Arrays and Objects tests', () => {
    test('The test of course mentions React native and MeteorJS', () => {
      expect(['React Native', 'MeteorJS', 'React']).toEqual(expect.arrayContaining(data2));

    // Objects
    test('The first course to have a property of Title', () => {
      expect(data[0]).toHaveProperty('title');
    });

    test('The first course to have a property of Title', () => {
      expect(data[0]).toHaveProperty('views','31,266');
    });
  });
});

