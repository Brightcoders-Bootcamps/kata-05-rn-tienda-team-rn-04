export const useInputValue = (iconName, userValues) => {
  let inputValue;
  iconName === 'mail' && (inputValue = userValues.email);
  iconName === 'lock' && (inputValue = userValues.password);
  iconName === 'user' && (inputValue = userValues.name);
  return inputValue;
};
