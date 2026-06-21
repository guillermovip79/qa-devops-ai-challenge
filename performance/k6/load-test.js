import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  // Configuración de usuarios virtuales (VUs) y duración
  vus: 10,
  duration: '30s',
  // Definición estricta de Quality Gates de rendimiento (Thresholds)
  thresholds: {
    http_req_failed: ['rate<0.01'], // Menos del 1% de errores admitidos
    http_req_duration: ['p(95)<1500'], // El 95% de las peticiones deben responder en menos de 1.5 segundos
  },
};

export default function () {
  // Target API de pruebas públicas
  const res = http.get('https://dummyjson.com/products');
  
  check(res, {
    'status es 200': (r) => r.status === 200,
    'contenido válido': (r) => r.json().products.length > 0,
  });

  sleep(1);
}