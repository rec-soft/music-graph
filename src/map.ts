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
const witchHouse = new Genre("WitchHouse");
const indietronica = new Genre("Indietronica");
const indie = new Genre("Indie");
const kpop = new Genre("K-Pop");
const electropop = new Genre("Electropop");
const hyperpop = new Genre("Hyperpop");
const pcmusic = new Genre("PC Music");
const nightcore = new Genre("Nightcore");
const newAge = new Genre("90s Neoliberal Global Village Eco-Utopia");
const vaporwave = new Genre("Vaporwave");

// Define relations. These are directional and may be cyclical.
nuMetal.addRelation(metalcore, "More metal");
nuMetal.addRelation(dubstep, "More electronic");

metalcore.addRelation(hardstyle, "More electronic");

hardstyle.addRelation(hardDance, "Darker");
hardstyle.addRelation(nightcore, "Even faster");

hardDance.addRelation(witchHouse, "More vocal");

witchHouse.addRelation(indietronica, "Poppier");

dubstep.addRelation(trap, "More bass");
dubstep.addRelation(dnb, "Faster");

trap.addRelation(future, "Chiller");
trap.addRelation(kpop, "Poppier");

dnb.addRelation(trance, "Dreamier");

trance.addRelation(idm, "Bigger brain");
trance.addRelation(deepHouse, "Chiller");

deepHouse.addRelation(hardDance, "More evil");

idm.addRelation(future, "Dancier");
idm.addRelation(indietronica, "More vocal");

indietronica.addRelation(indie, "Rock-ier");
indietronica.addRelation(electropop, "Poppier");

indie.addRelation(nuMetal, "Angstier");

electropop.addRelation(hyperpop, "Weirder");
electropop.addRelation(kpop, "More Korean");

kpop.addRelation(pcmusic, "More saccarine");

nightcore.addRelation(hyperpop, "Poppier");

hyperpop.addRelation(
    pcmusic,
    '"I liked this hyperpop before it was called hyperpop"'
);

pcmusic.addRelation(electropop, "Broader");
pcmusic.addRelation(vaporwave, "More nostalgic");

vaporwave.addRelation(newAge, "More unironic");

newAge.addRelation(idm, "More modern");

export const entryGenre = nuMetal;
