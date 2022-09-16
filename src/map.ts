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
    "I have to start with Linkin Park, which is regularly in my top-listened tracks every year. Particular big love for the Reanimation remix album, which leans more towards the electronic stuff. Nothing else has come out like it.",
    "4zP2e2aIzOZGEFTq1MDJmm"
);
// BMTH - Throne
const metalcore = new Genre(
    "Metalcore",
    "I got into metalcore after going to a couple Underoath shows (also featuring BMTH). High energy and delightfully angsty.",
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
    "Possibly my most consistently-loved genre. Though I definitely most-strongly associate it with my time living in Germany (I have a poster in my office from a Netsky show I saw there).",
    "1JG6SBFLt0cJ680ykwbk4e"
);
// Motorcycle - As the rush comes
const trance = new Genre(
    "Trance",
    "Since trance introduced me to electronic music, I had to pick a song from high school. There's a lot of good new stuff, but old school trance is the best (including modern takes on it, such as Virtual Self).",
    "6uEmDZoJcc7Oqrute8BA2N"
);
const progressive = new Genre(
    "Progressive",
    "I listened to progressive a late-college and early-grad school, when I saw Prydz a couple times. Now it's some good working music, if I don't mind that nostalgia trip.",
    "4GhRCSt1NJIK0osyhRS0H8"
);
// const electro = new Genre("Electro House", "", "") TOOD: find a spot for this.
// Jon Hopkins - Open Eye Signal
const idm = new Genre(
    '"Intelligent" Dance Music',
    "In grad school, I found a lot of free events and concerts to go to online. One of these was Jon Hopkins, which is now a go-to for background music during work or gaming. (Though this is a candidate for the worst-named genre.)",
    "6wMTeVootJ8RdCLNOZy5Km"
);
// Dusky - Tiers
const deepHouse = new Genre(
    "Deep House",
    "I listen to a lot of deep house. The intense, repetetive beats and (typically) lack of vocals make it easy to focus.",
    "3xxceaZr927fmH4tkRHTcF"
);
// Rebourne - Into my heart
const hardstyle = new Genre(
    "Hardstyle",
    "Big cheesey beats meant to be played loud. I listen to this when I just want something silly and fast.",
    "7rQFHtqvFcQ1VI2oZG6zxu"
);
// Flume - The Difference
const future = new Genre(
    "Future Bass",
    "I associate Flume, Disclosure, and contemporaries so strongly with grad school ~2014 when future bass was starting to get huge.",
    "4nlvKIIetOWGIMyhjQXgOZ"
);
// Jaess - Closing
const hardDance = new Genre(
    "Techno",
    "I only recently started listening to techno, often as working music when I need something a bit more intense. This is an early fav track and I'm excited to explore more.",
    "7eCltVjD2MFveyEqXSBI4x"
);
// Imanu - Buried
const witchHouse = new Genre(
    "Witch House",
    `A college introduced me to witch house and said "the more I get into it, the more I realize I'm just listening to white noise". Amen.`,
    "47Yi7jvxnwCG0zGa41vmU1"
);
// The Presets - Ghosts
const indietronica = new Genre(
    "Indietronica",
    "I listened to a lot of indietronica in college. This and PNAU's Go Bang are two of my top played songs of all time.",
    "17qyE3zCNdfOKmH3SXMwFX"
);
// The xx - Crystalized
const indie = new Genre(
    "Indie",
    "I listened to a lot of indie in high school, driven largely by like-minded friends and a monthly torrent download of top new indie songs.",
    "33R3swWziWYmnDYvZqcZVS"
);
// SuperM - Monster & Infinity
const kpop = new Genre(
    "K-Pop",
    "K-Pop defies genre definitions, sort of by design. Fun fact: our first dance at our wedding was to a BTS (and Charli XCX) song.",
    "5b841RC6QkaHVh4tS3lQ3n"
);
// CRJ - Cut to the feeling
const electropop = new Genre(
    "Electropop",
    "I listen to mainstream stuff too! Our long car rides from LA to SF are filled with CRJ and contemporaries. 100% bops.",
    "6EJiVf7U0p1BBfs0qqeb1f"
);
// Slayyyer - Troubled paradise
const hyperpop = new Genre(
    "Hyperpop",
    "A beautiful blend of poppy bops and the weirdness of genres like nightcore. This is probably my go-to genre that includes words.",
    "30qNNWs5kUgcviZxOrQRTo"
);
// AG Cook - Xcxoplex
const pcmusic = new Genre(
    "PC Music",
    "A lot of PC Music is hard to listen to for the first time. But as I give tracks a 2nd-10th shot, they grow to become some of my favorite. (Technically PC Music is just a label, but I want an excuse to put two hyperpop tracks)",
    "3Qtc8RGzuzbDGBpZ3tya7s"
);
// Aoki
const nightcore = new Genre(
    "Nightcore",
    "For a few, beautiful years, there was a nightcore radio show (nts.live/shows/jack). Nighcore sort of died along with it. This track sort of carries the spirit of high-bpm on, just without the pitch-shifted vocals.",
    "0Bz4zF649klc9hMb9xtj16"
);
// John Serrie - Tigri
const newAge = new Genre(
    "90s Neoliberal Global Village Eco-Utopia",
    "Remember in the 90s when we solved the world's problems with the power of capitalism? This is the soundtrack for that. I listen to it when I want the optimism of a hedge fund manager getting rich before the tech bubble.",
    "6vuX6KkjeRcCtbTJgkulxw"
);
// Eyeliner - Pictures
const vaporwave = new Genre(
    "Vaporwave",
    "A lonely, nostalgia-driven genre made by people who grew up in the malls and computer-labs of the late 90s. I wish the OG, Foral Shoppe was on Spotify. But this is a good substitute.",
    "2VIvfWMO5F6OkzBHadgVci"
);

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
deepHouse.addRelation(progressive, "Lighter");

progressive.addRelation(trance, "Cheesier");

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
