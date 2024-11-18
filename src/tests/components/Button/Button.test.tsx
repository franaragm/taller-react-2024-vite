import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from '@components/Button'; // Asegúrate de que la ruta esté correcta con el alias

describe('Button component', () => {
  it('should render the button with the correct text', () => {
    const buttonText = 'Click Me';
    render(<Button text={buttonText} onClick={vi.fn()} />);

    // Verificamos que el texto del botón se renderiza correctamente
    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  it('should call onClick when the button is clicked', () => {
    const onClick = vi.fn();
    render(<Button text="Click Me" onClick={onClick} />);

    // Simulamos un clic en el botón
    const button = screen.getByText('Click Me');
    fireEvent.click(button);

    // Verificamos que la función onClick haya sido llamada
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick if the button is not clicked', () => {
    const onClick = vi.fn();
    render(<Button text="Click Me" onClick={onClick} />);

    // No hacemos clic en el botón, solo verificamos que onClick no fue llamado
    expect(onClick).not.toHaveBeenCalled();
  });
});
