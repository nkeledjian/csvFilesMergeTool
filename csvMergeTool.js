const fs = require('fs');
const csv = require("fast-csv");
let csvFilesFolder = './input-files-here/';
let allFiles = [];

/**
 * this function below reads file names in the input-files-here folder
 * then appends the actual file path for each file and pushes each filepath string to the allFiles array
 */
fs.readdirSync(csvFilesFolder).forEach(files => {
  console.log('>>>', files);
  allFiles.push(csvFilesFolder + files);
});

// all file paths are passed in, csv file content is concatenated, and then outputted to a file
function concatCSVAndOutput(csvFilePaths, outputFilePath) {
  // take array of file paths and create a promise for each file
  const promises = csvFilePaths.map((path) => {
    return new Promise((resolve) => {
      const dataArray = [];
      // concatenate all csv files with headers at top, push data to dataArray
      return csv
        .parseFile(path, { headers: true })
        .on('data', function (data) {
          dataArray.push(data);
        })
        .on('end', function() {
          resolve(dataArray);
        });
    });
  });
  // return all promises created
  return Promise.all(promises)
    .then((results) => {
      // main method used for formatting CSVs
      const csvStream = csv.format({ headers: true });
      // This opens up the writeable stream to `outputFilePath` which allows writing data to a file
      const writableStream = fs.createWriteStream(outputFilePath);

      // once above job completed, log to console that merging of files was completed
      writableStream.on('finish', function () {
        console.log('Files have been merged!');
      });
      // connects the readable stream to the writeable stream - files are merged with .pipe method
      csvStream.pipe(writableStream);
      results.forEach((result) => {
        result.forEach((data) => {
          csvStream.write(data);
        });
      });
      csvStream.end();
    });
}

concatCSVAndOutput(allFiles, './merged-file/Call Log Report.csv');



