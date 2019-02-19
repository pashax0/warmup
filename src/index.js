module.exports = function warmup(temperature) {
  return Math.round((9 / 5 * temperature + 32) * 100) / 100;
};
