//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const RE = /([b-df-hj-npr-tvwz]*(?:qu|q|x|y)?)([aeiouxy]\w*)/gi;

export class translator {
  static translate(input) {
    return input.replace(RE, "$2$1ay")
  }
}
