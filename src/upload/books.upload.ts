import * as AWS from 'aws-sdk';
export class uploadFiles {
  constructor(private readonly file: Express.Multer.File) {}
  private AWS_S3_Bucket = `${process.env.AWS_BUCKET}`;
  private s3 = new AWS.S3({
    accessKeyId: `${process.env.AWS_KEY}`,
    secretAccessKey: `${process.env.SECRET_AWS_KEY}`,
  });

  async uploadFile() {
    const { originalname } = this.file;
    const image = await this.s3_upload(
      this.file.buffer,
      this.AWS_S3_Bucket,
      originalname,
      this.file.mimetype,
    );
    return image.Location;
  }

  async s3_upload(file, bucket, name, mimetype) {
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ACL: 'public-read',
      ContentType: mimetype,
      ContentDisposition: 'inline',
      CreateBucketConfiguration: {
        LocationConstraint: 'ap-south-1',
      },
    };

    try {
      const s3Response = await this.s3.upload(params).promise();
      return s3Response;
    } catch (e) {
      console.log(e);
    }
  }
}
