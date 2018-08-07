//this is the blueprint for what a grocery looks like; has a name, description, and boolean of whether it has been purchased or not
export class Grocery {
  public name: string;
  public description: string;
  public purchased: boolean;

  constructor(name: string, desc: string, purchased: boolean) {
    this.name = name;
    this.description = desc;
    this.purchased = false;
  }
}
