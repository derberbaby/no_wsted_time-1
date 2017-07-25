export class Journal {
  constructor(
    public mood: string = "",
    public entry: string = "",
    public date = null,
    public _User: string = "",
  ) {}
}
