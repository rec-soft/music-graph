export const genreMap = new Map<string, Genre>();
export const toGenreId = (name: string): string => name.replace(" ", "-");

class Genre {
    readonly name: string;
    readonly id: string;
    readonly description?: string;
    // Spotify track ID.
    readonly trackId?: string;
    readonly next: Relation[];

    constructor(name: string, description?: string, trackId?: string) {
        this.name = name;
        this.id = toGenreId(this.name);
        this.description = description;
        this.trackId = trackId;
        this.next = [];

        // Register self in the global store
        genreMap.set(this.id, this);
    }

    addRelation(destination: Genre, comparison: string) {
        this.next.push({ comparison, destination });
    }
}

interface Relation {
    // What this relation does more of than the current genre. E.g "faster";
    comparison: string;
    destination: Genre;
}

// Declare all genres up top, so each can reference each other below.

// Linkin Park - With You (Reanimation)
const nuMetal = new Genre(
    "Nu Metal",
    "I have to start here, with the artist that has stood the test of time more than anything else. Linkin Park regularly is in my top-listened tracks each year, especially from the Reanimation remix album.",
    "75Wz8eZhn2xBHFUGyJgHQP"
);
// BMTH - Throne
const metalcore = new Genre(
    "Metalcore",
    "I got into metalcore after going to a couple Underoath shows. High energy and delightfully angsty.",
    "0M3adYbGtyRHACP86dey1H"
);
// Nero - Promises
const dubstep = new Genre(
    "Dubstep",
    "My dubstep experience peaked seeing Nero in 2012, then, like the rest of the world, fell off the dubstep boat pretty soon after. Loud noises are still fun!",
    "2LCCxYQ5dw1dz3Pu6APEUH"
);
// RL Grime - Core
const trap = new Genre(
    "Trap",
    "Maybe a more mature evolution of dubstep that trades some of the noise for hip hop-inspired instrumentals.",
    "6Knx4Tp8hE7IlYtde2dCYI"
);
// Delta Heavy - Stay (Maduk Remix)
const dnb = new Genre(
    "Drum & Bass",
    "Probably the genre that has been the most consistent favorite of mine for years.",
    "53V634wCwWCDJzYDFtBNIq"
);
// Motorcycle - As the rush comes
const trance = new Genre("Trance", "", "6uEmDZoJcc7Oqrute8BA2N");
// const progressive = new Genre("Progressive", "", "") TOOD: find a spot for this.
// const electro = new Genre("Electro House", "", "") TOOD: find a spot for this.
// Jon Hopkins - Open Eye Signal
const idm = new Genre(
    '"Intelligent" Dance Music',
    "In grad school, I found a lot of free events and concerts to go to online. One of these was Jon Hopkins, which is now a go-to for background music during work or gaming. (Though this is a candidate for the worst-named genre.)",
    "6wMTeVootJ8RdCLNOZy5Km"
);
// Dusky - Tiers
const deepHouse = new Genre("Deep House", "", "3xxceaZr927fmH4tkRHTcF");
// Rebourne - Into my heart
const hardstyle = new Genre("Hardstyle", "", "7rQFHtqvFcQ1VI2oZG6zxu");
// Flume - The Difference
const future = new Genre("Future Bass", "", "4nlvKIIetOWGIMyhjQXgOZ");
// Pawlowski - Demonic Dimensions
const hardDance = new Genre("Hard Dance", "", "7CUaRaO6quCSAyV2lbL7WT");
// Imanu - Buried
const witchHouse = new Genre("Witch House", "", "47Yi7jvxnwCG0zGa41vmU1");
// The Presets - Ghosts
const indietronica = new Genre("Indietronica", "", "17qyE3zCNdfOKmH3SXMwFX");
// The xx - Crystalized
const indie = new Genre("Indie", "", "33R3swWziWYmnDYvZqcZVS");
// SuperM - Monster & Infinity
const kpop = new Genre("K-Pop", "", "5b841RC6QkaHVh4tS3lQ3n");
// CRJ - Cut to the feeling
const electropop = new Genre("Electropop", "", "6EJiVf7U0p1BBfs0qqeb1f");
// Charli XCX - Unlock It
const hyperpop = new Genre("Hyperpop", "", "3qGHAKgjQruzj6doKkyEb5");
// AG Cook - Show me What
const pcmusic = new Genre("PC Music", "", "0qJtV82bKOgB2kvfa8IrZp");
// TODO: find a good link.
// https://soundcloud.com/nightcorey/she-belongs-2-me
const nightcore = new Genre("Nightcore");
// John Serrie - Tigri
const newAge = new Genre(
    "90s Neoliberal Global Village Eco-Utopia",
    "Remember in the 90s when we solved the world's problems with the power of capitalism? This is the soundtrack for that. I listen to it when I want the optimism of a hedge fund manager getting rich before the tech bubble.",
    "6vuX6KkjeRcCtbTJgkulxw"
);
// TODO: find a good link
// https://vektroid.bandcamp.com/album/floral-shoppe
const vaporwave = new Genre("Vaporwave"); // macintosh plus

// Define relations. These are directional and may be cyclical.
nuMetal.addRelation(metalcore, "More metal");
nuMetal.addRelation(dubstep, "More electronic");

metalcore.addRelation(hardstyle, "More electronic");

hardstyle.addRelation(hardDance, "Darker");
hardstyle.addRelation(nightcore, "Even faster");

hardDance.addRelation(witchHouse, "More arythmic");

witchHouse.addRelation(indietronica, "Poppier");

dubstep.addRelation(trap, "More bass");
dubstep.addRelation(dnb, "Faster");

trap.addRelation(future, "Chiller");
trap.addRelation(nuMetal, "More acoustic");

future.addRelation(pcmusic, "Weirder");

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
electropop.addRelation(kpop, "Bigger");

kpop.addRelation(pcmusic, "More saccarine");

nightcore.addRelation(hyperpop, "Poppier");

hyperpop.addRelation(
    pcmusic,
    '"I liked this hyperpop before it was called hyperpop"'
);

pcmusic.addRelation(electropop, "Broader");
pcmusic.addRelation(vaporwave, "More nostalgic");

vaporwave.addRelation(newAge, "Less ironic");

newAge.addRelation(idm, "More modern");

// TODO: add more connections to the root so this is more cyclical.

export const entryGenre = nuMetal;
