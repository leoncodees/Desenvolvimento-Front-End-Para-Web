const routes = {
  '/': 'home',
  '/projetos': 'projetos',
  '/cadastro': 'cadastro'
};

export function getRouteFromHash() {
  const hash = window.location.hash || '#/';
  const path = hash.slice(1); // tira o "#"
  return routes[path] || 'home';
}