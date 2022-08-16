class Genre {
    readonly name: string;
    readonly description?: string;
    readonly example?: Track;
    readonly next: Relation[];

    constructor(name: string, description?: string, example?: Track) {
        this.name = name;
        this.description = description;
        this.example = example;
        this.next = [];
    }

    addRelation(destination: Genre, comparison: string) {
        this.next.push({ comparison, destination });
    }
}

interface Track {
    previewURL: string;
    artistName: string;
    trackName: string;
}

interface Relation {
    // What this relation does more of than the current genre. E.g "faster";
    comparison: string;
    destination: Genre;
}

// Declare all genres up top, so each can reference each other below.
const nuMetal = new Genre("Nu Metal");
const metalcore = new Genre("Metalcore");
const dubstep = new Genre("Dubstep");
const trap = new Genre("Trap");
const dnb = new Genre("Drum & Bass");
const trance = new Genre("Trance");
const idm = new Genre('"Intelligent" Dance Music 🙄');
const deepHouse = new Genre("Deep House");
const hardstyle = new Genre("Hardstyle");
const future = new Genre("Future Bass");
const hardDance = new Genre("Hard Dance");

// Define relations.
nuMetal.addRelation(metalcore, "More metal");
nuMetal.addRelation(dubstep, "More electronic");

metalcore.addRelation(hardstyle, "More electronic");

hardstyle.addRelation(hardDance, "Darker");

dubstep.addRelation(trap, "More bass");
dubstep.addRelation(dnb, "Faster");

trap.addRelation(future, "Poppier");

dnb.addRelation(trance, "Dreamier");

trance.addRelation(idm, "Bigger brain");

trance.addRelation(deepHouse, "Chiller");

deepHouse.addRelation(hardDance, "More evil");

idm.addRelation(future, "Dancier");
