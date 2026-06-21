# QA DevOps & AI Challenge
# QA DevOps, Calidad Avanzada e Inteligencia Artificial Aplicada - QA Store

Este proyecto consolida un flujo continuo e integral de Aseguramiento de la Calidad (QA), incorporando prácticas avanzadas de automatización de pruebas de interfaz, pruebas de rendimiento bajo carga, seguridad operativa (*DevSecOps*) y matrices de validación para sistemas impulsados por Inteligencia Artificial (LLMs).

## 🛠️ Tecnologías y Herramientas Utilizadas

* **Control de Versiones y CI/CD:** Git, GitHub, GitHub Actions.
* **Pruebas Funcionales E2E:** Playwright con TypeScript.
* **Pruebas de Performance:** K6 (Load Testing basado en código) y Apache JMeter.
* **Estrategia de Calidad:** Quality Gates y DevSecOps.

## 📁 Estructura del Repositorio

```text
├── .github/workflows/
│   └── qa-ci-pipeline.yml   # Workflow automatizado de CI
├── docs/
│   ├── test-plan.md         # Definición de Quality Gates y Plan de Pruebas
│   └── ai-analysis.md       # Matriz de validación de IA y Uso Responsable
├── performance/
│   ├── jmeter/
│   │   └── api_load_test.jmx # Escenario de carga en JMeter
│   └── k6/
│       └── load-test.js     # Script de carga con umbrales en K6
├── tests/
│   └── e2e/
│       └── qa-store.spec.ts # Pruebas funcionales E2E con Playwright
└── package.json             # Dependencias del proyecto