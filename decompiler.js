const fs = require('fs');
const Bit = require("./Class/Bit");

const gamePath = "./game/oot.n64";


const run = async () => {
    let header = await getHeader();
    // console.log( header );
};

const getHeader = async () => {
    let content = await readFilePart(0, 80);
    for( let i of content ) {
        console.log( i );
        console.log( i.char() );
    }
    // console.log( content );
    // let rst     = {};
    //
    // rst.PI_BSB_DOM1_LAT_REG = content[0];
    //
    // return rst;
};

const readFilePart = async ( start , length ) => {
    return new Promise(( resolve , reject ) => {
        let content = [];

        fs.createReadStream( gamePath , { start:start, end:start+length-1} )
            .on('data', (chunk) => {
                let i = 0;
                while( i < chunk.length ) {
                    content.push( new Bit(start+i , chunk[i]) );

                    //content.push( decToHex(chunk[i]) );
                    i++;
                }
            })
            .on('end', () => {
                resolve(content);
            });

    });
};

run();