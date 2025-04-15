import { Pet } from "./Pet.js";

export class Hamster extends Pet {
  constructor(name, furColor) {
    super(name, furColor);
    this.sound = "krimst";
    this.emoji = "🐹";
  }
}
