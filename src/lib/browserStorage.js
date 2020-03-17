const saveToLocalStorage = (key, value) => {
  if (checkStorageSupport('localStorage')) {
    window.localStorage.setItem(key, value);
  } else {
    window.localStorage[key] = value;
  }
};

const getFromLocalStorage = key => {
  return window.localStorage[key];
};

const removeFromLocalStorage = key => {
  window.localStorage.removeItem(key);
};

const saveToSessionStorage = (key, value) => {
  if (checkStorageSupport('sessionStorage')) {
    window.sessionStorage.setItem(key, value);
  } else {
    window.sessionStorage[key] = value;
  }
};

const getFromSessionStorage = key => {
  return window.sessionStorage[key];
};

const removeFromSessionStorage = key => {
  window.sessionStorage.removeItem(key);
};

const checkStorageSupport = type => {
  try {
    return type in window && window[type] !== null;
  } catch (e) {
    window[type] = {};
    return false;
  }
};

export {
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  saveToSessionStorage,
  getFromSessionStorage,
  removeFromSessionStorage
};
