// Helper function used to for console logs.
function centeredLog(str: string, width: number = 120, char: string = '-') {
  return str.padStart(Math.floor((width - str.length) / 2), char).padEnd(width, char);
}

// Exports.
export { centeredLog };
