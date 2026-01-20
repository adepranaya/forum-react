const ActionType = {
  SET_THEME: 'SET_THEME',
};

function setTheme(theme) {
  return {
    type: ActionType.SET_THEME,
    payload: {
      theme,
    },
  };
}

export { ActionType, setTheme };
