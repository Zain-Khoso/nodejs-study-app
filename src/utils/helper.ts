// Helper function used to for console logs.
function centeredLog(str: string, width: number = 120, char: string = '-') {
  return console.log(
    str.padStart(str.length + Math.floor((width - str.length) / 2), char).padEnd(width, char)
  );
}

// Exports.
export { centeredLog };
