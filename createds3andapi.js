const AWS = require('aws-sdk');
const s3 = new AWS.S3();
import moment from "moment";

exports.handler = async (event) => {
    try {
        let data = await s3.listObjects({
            Bucket: "sigma.smoketest",
            MaxKeys: 10
        }).promise();
        console.log('success '+data);
        date = moment().format("MMMM Do YYYY");
        console.log(date);
    } catch (err) {
        console.log('error '+err);
    };

    return { "message": "Successfully executed" };
};