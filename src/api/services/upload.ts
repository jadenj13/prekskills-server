import { S3 } from 'aws-sdk';
import { v4 as randomString } from 'uuid';

class UploadService {
  private s3 = new S3();

  public getSignedUrl = async (filename: string, fileType: string) => {
    const randomizedFileName = `${randomString()}-${filename.replace(
      /\s/g,
      '-',
    )}`;

    const params = {
      Bucket: 'prekskills',
      Expires: 60,
      ACL: 'public-read',
      Key: randomizedFileName,
      ContentType: fileType,
    };

    return new Promise((resolve, reject) => {
      this.s3.getSignedUrl('putObject', params, (err, data) => {
        if (err) {
          return reject(err);
        }

        const returnData = {
          signedRequest: data,
          url: `https://prekskills.s3.amazonaws.com/${randomizedFileName}`,
        };

        return resolve(returnData);
      });
    });
  };
}

export default new UploadService();
