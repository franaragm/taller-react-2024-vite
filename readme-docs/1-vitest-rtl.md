Para instalar **Vitest** y **React Testing Library** en un proyecto **React con TypeScript** creado con **Vite**, sigue estos pasos:

---

### 1. **Instalar las dependencias necesarias**
Abre la terminal en la carpeta de tu proyecto y ejecuta los siguientes comandos para instalar Vitest, React Testing Library, y otras dependencias relacionadas:

```bash
# Instalar Vitest y su entorno
npm install -D vitest @vitest/ui jsdom

# Instalar React Testing Library
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event

# (Opcional) Instalar TypeScript types para Node.js y jsdom
npm install -D @types/node @types/jsdom
```

---

### 2. **Configurar el entorno de pruebas**
Edita o crea el archivo `vite.config.ts` en el proyecto para incluir la configuración de **Vitest**. Por ejemplo:

```ts
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Para usar testing con "globals" como describe, test, etc.
    environment: 'jsdom', // Simula un navegador
    setupFiles: './src/test/setup.ts', // Archivo de configuración inicial
    css: true, // Si necesitas soporte para CSS en las pruebas
  },
});
```

---

### 3. **Configurar Jest-DOM**
Crea un archivo llamado `setup.ts` en el directorio `src/test` (puedes ajustar la ubicación según tus preferencias). Este archivo inicializa las extensiones de Jest-DOM para tus pruebas:

```ts
// src/test/setup.ts
import '@testing-library/jest-dom';
```

Este archivo será ejecutado automáticamente antes de las pruebas si lo configuraste en `vite.config.ts`.

---

### 4. **Escribir tu primera prueba**
Crea un archivo de prueba, por ejemplo: `src/components/Example.test.tsx`, y añade una prueba simple:

```tsx
import { render, screen } from '@testing-library/react';

const Example = () => <h1>Hello, Vitest!</h1>;

test('renders the component', () => {
  render(<Example />);
  expect(screen.getByText(/Hello, Vitest!/i)).toBeInTheDocument();
});
```

---

### 5. **Ejecutar las pruebas**
Para correr tus pruebas, usa los siguientes comandos:

1. **Iniciar Vitest en modo interactivo**:
   ```bash
   npx vitest
   ```

2. **Ejecutar todas las pruebas directamente**:
   ```bash
   npx vitest run
   ```

3. **Abrir la interfaz de usuario de Vitest**:
   ```bash
   npx vitest --ui
   ```

---

### 6. **(Opcional) Configurar ESLint y Prettier para Vitest**
Si estás usando ESLint, puedes configurar las reglas de Vitest en tu archivo `.eslintrc.js`:

```js
module.exports = {
  env: {
    'vitest/globals': true,
  },
  plugins: ['vitest'],
  extends: [
    'plugin:vitest/recommended', // Reglas recomendadas para Vitest
  ],
};
```

---

Con estos pasos, tendrás configurado **Vitest** y **React Testing Library** en tu proyecto **React con TypeScript y Vite**. 🚀


https://medium.com/@kimtai.developer/react-typescript-vite-testing-with-vitest-react-testing-library-rtl-and-mock-service-worker-6f5790eedf84