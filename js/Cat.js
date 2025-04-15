import { Pet } from "./Pet.js";

export class Cat extends Pet {
  constructor(name, furColor) {
    super(name, furColor);
    this.sound = "miau";
    this.emoji = "😸";
  }
}
