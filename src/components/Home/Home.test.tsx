import { describe, expect, it } from 'vitest';
import { render, screen } from '@Lib/utils/test.utils';
import App from '@Pages/_app';
import { dataJSON } from '@Tests/mockData';

describe('Use Swapi API', () => {
  window.fetch = vi.fn();

  beforeAll(async () => {
    vi.spyOn(window, 'fetch');
  });

  it.skip('Should show a list of characters from this API including Darth Vader', () => {
    render(<App />);
    expect(screen.getByText(/Darth Vader/i)).toBeInTheDocument();
  });

  it.skip('Should show a list of characters from a JSON file', () => {
    render(<App />);
    for (let character of dataJSON.results) {
      expect(screen.getByText(character.name)).toBeInTheDocument();
    }
  });

  it('Should show a list of characters from the API', async () => {
    await window.fetch('https://swapi.dev/api/people/?page=1');

    render(<App />);
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(
      'https://swapi.dev/api/people/?page=1'
    );

    window.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => dataJSON,
    });

    for (let character of dataJSON.results) {
      expect(await screen.findByText(character.name)).toBeInTheDocument();
    }
  });

  it('Should show an error message when has a network error', async () => {
    window.fetch = vi
      .fn()
      .mockResolvedValueOnce(new Error('There is a Network Error'));

    render(<App />);
    expect(await screen.findByText(/Network Error/i)).toBeInTheDocument();
  });

  it('Should show an error message when has a "Not Found" error', async () => {
    window.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    console.log({ FETCH: window.fetch });
    render(<App />);
    expect(await screen.findByText(/Network Error/i)).toBeInTheDocument();
  });
});
