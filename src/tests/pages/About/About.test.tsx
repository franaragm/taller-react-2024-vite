import { render, screen } from '@testing-library/react';
import { describe, expect, it} from 'vitest';
import About from '@pages/About'; // Asegúrate de que la ruta esté correcta
import '@testing-library/jest-dom'; // Para las aserciones adicionales

describe('About component', () => {
  it('should render the title correctly', () => {
    render(<About />);

    // Verificamos que el título "About This App" esté presente en el documento
    const title = screen.getByText('About This App');
    expect(title).toBeInTheDocument();
  });

  it('should render the paragraph with the correct text', () => {
    render(<About />);

    // Verificamos que el párrafo esté presente con el texto esperado
    const paragraph = screen.getByText('This is an example application built with Vite React.');
    expect(paragraph).toBeInTheDocument();
  });
});
