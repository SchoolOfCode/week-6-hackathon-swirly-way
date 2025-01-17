import { sellWeapons } from "./main.js";
import { test, expect, describe } from "vitest";

describe("Different warehouses", () => {
  test("Works with small objects", () => {
    const warehouse = {
      sword: { amount: 1, price: 100, type: "W" },
      axe: { amount: 2, price: 80, type: "W" },
    };

    expect(sellWeapons(warehouse)).toBe(260);
  });

  test("Works with large objects", () => {
    const warehouse = {
      wheat: { amount: 50, price: 10, type: "F" },
      corn: { amount: 100, price: 5, type: "F" },
      sword: { amount: 1, price: 100, type: "W" },
      hoe: { amount: 5, price: 15, type: "F" },
      shield: { amount: 1, price: 50, type: "W" },
      carrot: { amount: 30, price: 2, type: "F" },
      potato: { amount: 40, price: 3, type: "F" },
      bow: { amount: 1, price: 120, type: "W" },
      pumpkin: { amount: 60, price: 4, type: "F" },
      axe: { amount: 2, price: 80, type: "W" },
      tomato: { amount: 45, price: 7, type: "F" },
      mace: { amount: 1, price: 150, type: "W" },
      cabbage: { amount: 25, price: 6, type: "F" },
      harrow: { amount: 3, price: 25, type: "F" },
      flail: { amount: 1, price: 130, type: "W" },
    };
    expect(sellWeapons(warehouse)).toBe(710);
  });

  test("No weapons in warehouse", () => {
    const warehouse = {
      wheat: { amount: 50, price: 10, type: "F" },
      corn: { amount: 100, price: 5, type: "F" },
    };
    expect(sellWeapons(warehouse)).toBe(0);
  });

  test("One type of weapon in warehouse", () => {
    const warehouse = {
      sword: { amount: 2, price: 100, type: "W" },
    };
    expect(sellWeapons(warehouse)).toBe(200);
  });

  test("Only non-weapon items in warehouse", () => {
    const warehouse = {
      wheat: { amount: 50, price: 10, type: "F" },
      corn: { amount: 100, price: 5, type: "F" },
    };
    expect(sellWeapons(warehouse)).toBe(0);
  });

  test("Negative weapon quantities", () => {
    const warehouse = {
      sword: { amount: -1, price: 100, type: "W" },
      axe: { amount: -2, price: 80, type: "W" },
    };
    expect(sellWeapons(warehouse)).toBe(0);
  });

  test("Empty warehouse", () => {
    const warehouse = {};
    expect(sellWeapons(warehouse)).toBe(0);
  });
});
