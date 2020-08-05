const isValidEmail = (email) => {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email);
};

const iaValidPassword = (password) => {
  return password !== ``;
};

export {isValidEmail, iaValidPassword};
