import { S3Client, CreateBucketCommand, ListBucketsCommand } from '@aws-sdk/client-s3'

export class S3Service {
  constructor() {
    if (process.env.IS_OFFLINE) {
      this.client = new S3Client({
        region: 'us-east-1',
        endpoint: 'http://localhost:4566',
        forcePathStyle: true,
        credentials: {
          accessKeyId: 'test',
          secretAccessKey: 'test'
        }
      });
    } else {
      this.client = new S3Client({});
    }
  }

  async createBucket(bucketName = '') {
    await this.client.send(
      new CreateBucketCommand({
        Bucket: bucketName,
      })
    );
  }

  async listBuckets() {
    const response = await this.client.send(
      new ListBucketsCommand()
    );

    return response.Buckets;
  }
}