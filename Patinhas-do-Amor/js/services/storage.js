const KEY = 'patinhas_cadastros';

export const storage = {
  all() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch { return []; }
  },
  add(item) {
    const data = storage.all();
    data.push(item);
    localStorage.setItem(KEY, JSON.stringify(data));
  }
};