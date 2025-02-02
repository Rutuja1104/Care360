import { S3_BUCKET, AWS } from '../../../../src/awsConfig';

export const getFileFromS3 = async (fileName) => {

    const s3 = new AWS.S3();
    const params = {
        Bucket: S3_BUCKET,
        Key: fileName,
    };
    // Base64 regex pattern
    const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;

    function byteArrayToString(byteArray) {
        let binaryString = '';
        for (let i = 0;i < byteArray.length;i++) {
            binaryString += String.fromCharCode(byteArray[i]);
        }
        return binaryString;
    }

    try {

        if(!base64Regex.test(fileName)) {
            const data = await s3.getObject(params).promise();
            console.log("Successfully fetched data from S3:", data);

            const byteArray = new Uint8Array(data.Body);
            const textString = byteArrayToString(byteArray);
            return textString;
        }
        return fileName;
    } catch (error) {
        console.error("Error fetching file from S3:", error);
        throw new Error('Failed to fetch file from S3');
    }
};
