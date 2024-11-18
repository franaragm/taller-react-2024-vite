import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom'; // Necesario para usar Link en el test
import Menu from '@components/Menu'; // Asegúrate de que la ruta esté correcta

describe('Menu component', () => {
  it('should render the Home link', () => {
    render(
      <Router>
        <Menu />
      </Router>
    );

    // Verificamos que el enlace "Home" esté presente en el documento
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    // Verificamos que el enlace tenga la ruta correcta
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should render the About link', () => {
    render(
      <Router>
        <Menu />
      </Router>
    );

    // Verificamos que el enlace "About" esté presente en el documento
    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();

    // Verificamos que el enlace tenga la ruta correcta
    expect(aboutLink).toHaveAttribute('href', '/about');
  });
});
