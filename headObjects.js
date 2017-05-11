const async = require('async');
const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: 'accessKey1',
    secretAccessKey: 'verySecretKey1',
    sslEnabled: false,
    endpoint: 'http://localhost:8000',
    s3ForcePathStyle: true,
    signatureVersion: 'v4',
});

const s3 = new AWS.S3({ signatureVersion: 'v4', });
const BUCKET = 'bakery';

const objects = [
    'macaroon',
    'candy',
    'gummy-bears',
    'gingerbread',
    'lollipop',
    'muffin',
    'fruitcake',
    'soufflé',
    'croissant',
    'tootsie-roll',
    'liquorice',
    'cotton-candy',
    'cheesecake',
    'brownie'
];

function headObject(key, cb) {
    s3.headObject({ Bucket: BUCKET, Key: key }, cb)
}

async.map(objects, headObject, (err, results) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(results);
});
