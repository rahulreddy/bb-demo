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

const listingParams = { Bucket: 'bakery', };
s3.listObjects(listingParams, function(err, data) {
    if (err) {
        console.log('error listing objects', err);
        return;
    }
    console.log(data);
});
