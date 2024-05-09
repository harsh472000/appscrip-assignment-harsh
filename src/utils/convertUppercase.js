// utils/convertUppercase.js
export function convertToUpperCase(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    
    return str.toUpperCase();
  }
  