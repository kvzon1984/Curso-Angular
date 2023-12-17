
// OBJETOS

interface AudioPlayer {
    audioVolume: number;
    soungDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: string;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    soungDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: "2015"
    }
}

const song = 'new song';

const {
    song:cancion,
    audioVolume,
    details: { author }
} = audioPlayer;

// const { song:cancion, audioVolume, details } = audioPlayer;
// const { author } = details;

console.log({ song, audioVolume });
console.log({ cancion, audioVolume });
console.log({ cancion, author });

// ARREGLOS

const dbz: string[] = ['Goku','Vegeta'];

const [ , p2, p3 = 'Not found'] = dbz;


console.log(p2);
console.log(p3);


export {}