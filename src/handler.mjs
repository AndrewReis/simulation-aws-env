import { S3Service } from './services/s3.mjs'

export const run = async (event) => {
  const s3Service = new S3Service();

  await s3Service.createBucket('localstack-bucket')
  const buckets = await s3Service.listBuckets();

  console.log(buckets)

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v4! Your function executed successfully!",
      buckets: buckets
    }),
  };
};