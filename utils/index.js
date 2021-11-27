const jsonValidate = (value) => {
  try {
    return JSON.parse(value);
  } catch (error) {
    return { error: 'JSON parsing' };
  }
}

module.exports = {
  jsonValidate
}
