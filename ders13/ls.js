class CustomLocalStorage {
  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
