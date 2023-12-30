import { describe, it, expect } from 'vitest';
import RaportProvider from 'src/providers/RaportProvider';
import { render, screen, fireEvent } from '@testing-library/react';
import Results from './Results';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => {
  return <RaportProvider>{children}</RaportProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// Array of periods for calculations
const periods = [20, 30, 50];

// Input fields configuration
const inputFields = [
  { label: 'Małe α:', id: 'smallInput' },
  { label: 'Średnie α:', id: 'mediumInput' },
  { label: 'Duże α:', id: 'largeInput' },
];

describe('Results Component', () => {
  it('Renders the Result component with initial values', () => {
    customRender(<Results />);

    // Assert that the title is rendered
    expect(screen.getByText('Raport')).toBeInTheDocument();

    // Assert that the input fields are rendered with initial values
    expect(
      screen.getByLabelText('Długość nici z haczykiem (l)[m]:'),
    ).toHaveValue(null);
    expect(screen.getByLabelText('Średnica kulki (d)[m]:')).toHaveValue(null);

    // Assert that period input fields are rendered with initial values
    periods.forEach((n) => {
      inputFields.forEach(({ id }) => {
        expect(screen.getByTestId(`${id}-${n}`)).toHaveValue(null);
      });
    });
  });
  it('Updates input fields and period data when user types', () => {
    customRender(<Results />);

    // Type into input fields
    fireEvent.change(
      screen.getByLabelText('Długość nici z haczykiem (l)[m]:'),
      { target: { value: '10' } },
    );
    fireEvent.change(screen.getByLabelText('Średnica kulki (d)[m]:'), {
      target: { value: '6' },
    });

    // Type into period input fields
    periods.forEach((n) => {
      inputFields.forEach(({ id }) => {
        fireEvent.change(screen.getByTestId(`${id}-${n}`), {
          target: { value: '2' },
        });
      });
    });

    // Assert that the input fields have been updated
    expect(
      screen.getByLabelText('Długość nici z haczykiem (l)[m]:'),
    ).toHaveValue(10);
    expect(screen.getByLabelText('Średnica kulki (d)[m]:')).toHaveValue(6);

    // Assert that period input fields have been updated
    periods.forEach((n) => {
      inputFields.forEach(({ id }) => {
        expect(screen.getByTestId(`${id}-${n}`)).toHaveValue(2);
      });
    });
  });

  it('Calculates result when "Oblicz wynik" button is clicked', () => {
    customRender(<Results />);

    // Type values into input fields and period input fields
    fireEvent.change(
      screen.getByLabelText('Długość nici z haczykiem (l)[m]:'),
      { target: { value: '10' } },
    );
    fireEvent.change(screen.getByLabelText('Średnica kulki (d)[m]:'), {
      target: { value: '6' },
    });

    periods.forEach((n) => {
      inputFields.forEach(({ id }) => {
        fireEvent.change(screen.getByTestId(`${id}-${n}`), {
          target: { value: '2' },
        });
      });
    });

    // Click the "Oblicz wynik" button
    fireEvent.click(screen.getByText('Oblicz wynik'));

    // Assert that the result has been calculated and is displayed
    expect(screen.getByLabelText('Długość wahadła (l)[m]:')).toHaveValue(13);
  });

  it('Saves result when "Zapisz wynik" button is clicked', () => {
    customRender(<Results />);

    // Type values into input fields and period input fields
    fireEvent.change(
      screen.getByLabelText('Długość nici z haczykiem (l)[m]:'),
      { target: { value: '10' } },
    );
    fireEvent.change(screen.getByLabelText('Średnica kulki (d)[m]:'), {
      target: { value: '6' },
    });

    periods.forEach((n) => {
      inputFields.forEach(({ id }) => {
        fireEvent.change(screen.getByTestId(`${id}-${n}`), {
          target: { value: '2' },
        });
      });
    });

    // Click the "Oblicz wynik" button
    fireEvent.click(screen.getByText('Oblicz wynik'));

    // Click the "Zapisz wynik" button
    fireEvent.click(screen.getByText('Zapisz wynik'));

    // Assert that input fields are reset to null
    expect(
      screen.getByLabelText('Długość nici z haczykiem (l)[m]:'),
    ).toHaveValue(null);
    expect(screen.getByLabelText('Średnica kulki (d)[m]:')).toHaveValue(null);

    // Assert that period input fields are reset to null
    periods.forEach((n) => {
      inputFields.forEach(({ id }) => {
        expect(screen.getByTestId(`${id}-${n}`)).toHaveValue(null);
      });
    });
  });
});
