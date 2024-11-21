export class Team {
    public id:string;
    public name:string;
    public rankingPoints:number;
    public flagPath:string;

    constructor(id: string, name:string, rankingPoints:number, flagPath:string){
        this.id = id;
        this.name = name;
        this.rankingPoints = rankingPoints;
        this.flagPath = flagPath;
   }
}
