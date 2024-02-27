import React from "react";
import { render, screen } from "@testing-library/react";
import Character from "../components/Character";
import "@testing-library/jest-dom";

// Mock useTranslation
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key, // Mock implementation returning the key
  }),
}));

// Mock useStore
jest.mock("../hooks/useStore", () => () => ({
  setLoaderState: jest.fn(),
}));

// Example test data
const mockCharacterData: any = {
  results: [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      image: "url-to-image",
      location: {
        name: "Earth",
        url: "url-to-location",
      },
      episode: ["url-to-episode/1"],
      url: "url-to-character",
    },
  ],
  info: {
    count: 1,
    prev: null,
    next: null,
  },
  episodesData: 0,
};

const mockEpisodesData: any = [
  {
    id: 1,
    name: "Pilot",
  },
];

// Mock handlePagination function
const mockHandlePagination = jest.fn();

describe("Character", () => {
  it("renders without throwing an error", () => {
    render(
      <Character
        characterData={mockCharacterData}
        episodesData={mockEpisodesData}
        handlePagination={mockHandlePagination}
      />,
    );

    // Example assertion
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Earth")).toBeInTheDocument();
    expect(screen.getByText("Pilot")).toBeInTheDocument();
  });
});
