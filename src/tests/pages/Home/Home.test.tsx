import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Home from '@pages/Home'; // Asegúrate de que la ruta esté correcta con el alias
import '@testing-library/jest-dom'; // Para las aserciones adicionales

describe('Home component', () => {
  it('should render the title correctly', () => {
    render(<Home />);

    // Verificamos que el título "Welcome to My App" esté presente
    const title = screen.getByText('Welcome to My App');
    expect(title).toBeInTheDocument();
  });

  it('should render the paragraph with the correct text', () => {
    render(<Home />);

    // Verificamos que el párrafo esté presente con el texto esperado
    const paragraph = screen.getByText('Click the button below to test it:');
    expect(paragraph).toBeInTheDocument();
  });

  it('should render the Button with the correct text', () => {
    render(<Home />);

    // Verificamos que el botón con el texto "Click Me" esté presente
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  it('should trigger alert when the button is clicked', () => {
    // Usamos vi.fn() para espiar la función alert
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(<Home />);

    // Simulamos un clic en el botón
    const button = screen.getByText('Click Me');
    fireEvent.click(button);

    // Verificamos que alert haya sido llamada
    expect(alertSpy).toHaveBeenCalledWith('Button clicked!');

    // Limpiamos el espía después de la prueba
    alertSpy.mockRestore();
  });
});
