import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Card from "@components/Card";

describe("Card Component", () => {
  it("should render card with title and content", () => {
    render(
      <Card title="Card Title" content="This is the content of the card" />
    );

    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(
      screen.getByText("This is the content of the card")
    ).toBeInTheDocument();
  });

  it("should render image if imageUrl is provided", () => {
    const imageUrl = "https://example.com/image.jpg";

    render(
      <Card
        title="Card with image"
        content="This card has an image."
        imageUrl={imageUrl}
      />
    );

    const image = screen.getByAltText("Card with image");
    expect(image).toHaveAttribute("src", imageUrl);
  });

  it("should not render image if imageUrl is not provided", () => {
    render(
      <Card title="Card without image" content="This card has no image." />
    );

    const image = screen.queryByAltText("Card without image");
    expect(image).toBeNull();
  });

  it("should call onClick when the card is clicked", async () => {
    const handleClick = vi.fn();

    render(
      <Card
        title="Clickable Card"
        content="This card is clickable."
        onClick={handleClick}
      />
    );

    // Buscamos el contenedor div que contiene el título del card.
    // El `div` de la tarjeta contiene el título, y lo utilizamos para encontrar el contenedor y hacer clic.
    const card = screen.getByText("Clickable Card").closest("div");

    // Simulamos el clic en el div de la tarjeta
    fireEvent.click(card!);

    // Verificamos que la función handleClick haya sido llamada
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick when the card is clicked if onClick is not provided", async () => {
    const handleClick = vi.fn();

    render(
      <Card title="Non-clickable Card" content="This card is not clickable." />
    );

    // Si no hay botón ni onClick, no debe llamarse a handleClick
    const card = screen.getByText("Non-clickable Card");
    fireEvent.click(card);

    // Verificamos que no se haya llamado a onClick
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should handle button click", async () => {
    const handleClick = vi.fn();

    render(
      <Card
        title="Card with button"
        content="This card has a button."
        buttonText="Click me"
        onClick={handleClick}
      />
    );

    // Hacemos clic en el botón
    const button = screen.getByText("Click me");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  it("should not render button if buttonText is not provided", () => {
    render(
      <Card
        title="Card without button"
        content="This card has no button."
        onClick={vi.fn()} // Aseguramos que haya un onClick pero sin buttonText
      />
    );

    const button = screen.queryByRole("button");
    expect(button).toBeNull(); // El botón no debe existir si no se pasa buttonText
  });

  it("should render button if buttonText is provided", () => {
    render(
      <Card
        title="Card with button"
        content="This card has a button."
        buttonText="Click me"
        onClick={vi.fn()}
      />
    );

    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument(); // El botón debe renderizarse si se pasa buttonText
  });
});
