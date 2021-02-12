const handleChangeName = (userValues, setUserValues, newValue) => {
  setUserValues({...userValues, name: newValue});
};

const handleChangEmail = (userValues, setUserValues, newValue) => {
  setUserValues({...userValues, email: newValue});
};

const handleChangePassword = (userValues, setUserValues, newValue) => {
  setUserValues({...userValues, password: newValue});
};

export const AuthFunctions = {
  handleChangeName,
  handleChangEmail,
  handleChangePassword
};
