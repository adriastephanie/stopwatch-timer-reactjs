import {render, screen, fireEvent, findByText, getByText, cleanup, queryByText, waitFor} from '@testing-library/react';
import App from './App';

describe('teste do componente e renderização da tela', () => {
  test('Renderizar e mostrar contador com valor 0.0', () => {
    render(<App />);
    const contTitle = screen.getByText("0.0");
    expect(contTitle).toBeInTheDocument();
  });
  test('Renderizar e ter a class timer no titulo', () => {
    render(<App />);
    const contTitle = screen.getByText("0.0");
    expect(contTitle).toHaveClass("timer");
  });
  test('Renderizar e ter o botão Start', () => {
    render(<App />);
    const buttonStart = screen.getByRole('button', {
      name: /START/i
    });
    expect(buttonStart).toBeInTheDocument();
  });
  test('Renderizar e ter o botão Stop', () => {
    render(<App />);
    const buttonStart = screen.getByRole('button', {
      name: /STOP/i
    });
    expect(buttonStart).toBeInTheDocument();
  });
  test('Deve iniciar com cronometro zerado', async () => {
    const { getByText, findByText } = render(<App />);
    expect(getByText('0.0')).toBeInTheDocument();
  });
  test('Start do cronometro', async () => {
    const { getByText, findByText } = render(<App />);
    const startButton = getByText('Start');
    fireEvent.click(startButton);
    expect(await findByText('0.1')).toBeInTheDocument();
  });
  test('Stop do cronometro', async () => {
    const { getByText, findByText } = render(<App />);
    const startButton = getByText('Start');
    const stopButton = getByText('STOP');
    fireEvent.click(startButton);
    expect(await findByText('0.1')).toBeInTheDocument();
    fireEvent.click(stopButton);
    expect(await findByText('0.0')).toBeInTheDocument();
  });
  test('Pause do cronometro', async () => {
    const { getByText, findByText } = render(<App />);
    const buttonStart = screen.getByRole('button', {
      name: /START/i
    });
    fireEvent.click(buttonStart);
    expect(await findByText('0.1')).toBeInTheDocument();
    const buttonPause = screen.getByRole('button', {
      name: /PAUSE/i
    });
    fireEvent.click(buttonPause);
    expect(await findByText('0.1')).toBeInTheDocument();
  });
});


