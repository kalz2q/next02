// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const csv = require('csv-parser');

if (process.argv.length !== 4) {
    console.log('使い方: node csv2json.js original.csv target.json');
    process.exit(1);
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];
const results = [];
let idCounter = 1; // IDの連番用カウンター

fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (data) => {
        // 各データオブジェクトに自動的にidを付加
        data.id = idCounter.toString();
        results.push(data);
        idCounter++;
    })
    .on('end', () => {
        fs.writeFile(outputFile, JSON.stringify(results, null, 2), (err) => {
            if (err) {
                console.error('JSONファイルの書き込み中にエラーが発生しました:', err);
                return;
            }
            console.log(`${outputFile} にJSONデータを書き込みました！`);
        });
    })
    .on('error', (err) => {
        console.error('CSVファイルの読み込み中にエラーが発生しました:', err);
    });