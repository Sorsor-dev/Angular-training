export  class  Post {
    //loveIts: number;
    created_at: Date;

    constructor(public title: string, public content:string ,public loveIts:number, public dontLoveIts:number) {
     
     // this.loveIts = loveIts;
      this.created_at = new Date();
    }

} 