/*
    intro() - apibudina masinos modeli ir spalva
    drive() - nurodzius norima nuvaziuoti atstuma, yra paskaiciuojamos degalu sanaudos, jei nepakanka degalu, tai ribiniu atveju tiesiog sustoja ir masina issijungia
    engineOn() - ijungia varikli, jei yra kuro ir jei yra isjungtas
    engnineOFf() - isjungia varikli, jei yra ijungtas
    refill() - uzpilti degali, bet ne dagiau, nei telpa i baka ir jeigu variklis yra isjungtas
*/

export class Car {
  constructor(model, color, tankMax) {
    this.model = model;
    this.color = color;
    this.tankMax = tankMax;
    this.tank = 0;
    this.engineIsOn = false;
  }

  intro() {
    return `This is ${this.color} ${this.model}.`;
  }

  refill(volume) {
    if (this.engineIsOn) {
      return "Error: to refill a tank, you must turn off engine first";
    }

    if (typeof volume !== "number" || !isFinite(volume)) {
      return "Error: Only number allowed";
    }

    if (volume < 0) {
      return `Refill with ${volume} litres is not allowed`;
    }

    if (this.tankMax - this.tank >= volume) {
      this.tank += volume;
    } else {
      this.tank = this.tankMax;
    }
  }

  engineIsOn() {
    if (this.engineIsOn) {
      return `Error: engine is already turned on`;
    }

    if (this.tank === 0) {
      return `Error: u can't start the engine without a fuel`;
    }

    this.engineIsOn = true;
  }

  engineIsOff() {
    if (!this.engineIsOn) {
      return "Error: engine is already turned off.";
    }

    this.engineIsOn = false;
  }
}
