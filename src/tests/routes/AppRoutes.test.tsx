import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AppRoutes from "@routes/AppRoutes";
import "@testing-library/jest-dom"; // Para las aserciones adicionales

// Mock de los componentes Home y About
vi.mock("@pages/Home", () => ({
  __esModule: true,
  default: () => <div>Home Page</div>,
}));

vi.mock("@pages/About", () => ({
  __esModule: true,
  default: () => <div>About Page</div>,
}));

describe("AppRoutes", () => {
  it("should render Home component for the root route", async () => {
    render(<AppRoutes />);

    // Esperamos que el fallback "Loading..." se muestre mientras se carga el componente
    await waitFor(() => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    // Luego, esperamos que el componente "Home" se renderice
    await waitFor(() => {
      expect(screen.getByText("Home Page")).toBeInTheDocument();
    });
  });

  it("should render About component when navigating to /about", async () => {
    render(<AppRoutes />);

    // Simulamos la navegación al hacer clic en el enlace "/about"
    fireEvent.click(screen.getByText(/about/i));

    // Esperamos que el fallback "Loading..." se muestre mientras se carga el componente
    await waitFor(() => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    // Verificamos que se ha navegado a la página "About"
    await waitFor(() => {
      expect(screen.getByText("About Page")).toBeInTheDocument();
    });
  });

});
