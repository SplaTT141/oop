export class Pet {
  constructor(name, furColor) {
    this.name = name;
    this.furColor = furColor;
    this.legsCount = 4;
    this.eyesCount = 2;
  }

  hi() {
    return `Hi, my name is ${this.name}`;
  }

  voice() {
    const sound = (" " + this.sound).repeat(2);
    const emojies = this.emoji.repeat(2);
    return `${this.name}:${sound} ${emojies}!`;
  }
}
