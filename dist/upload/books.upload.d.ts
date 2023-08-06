/// <reference types="multer" />
import * as AWS from 'aws-sdk';
export declare class uploadFiles {
    private readonly file;
    constructor(file: Express.Multer.File);
    private AWS_S3_Bucket;
    private s3;
    uploadFile(): Promise<string>;
    s3_upload(file: any, bucket: any, name: any, mimetype: any): Promise<AWS.S3.ManagedUpload.SendData>;
}
