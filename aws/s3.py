import json
import base64
import boto3
import os

# Initialize the S3 client
s3 = boto3.client("s3")

# Environment variable for the bucket name
BUCKET_NAME = os.environ["BUCKET_NAME"]

def lambda_handler(event, context):
    try:
        # Parse event for file details
        body = json.loads(event["body"])
        file_name = body.get("fileName")
        file_content = body.get("fileContent")  # Base64-encoded content

        if not file_name or not file_content:
            raise ValueError("Both fileName and fileContent must be provided.")

        # Decode the base64 content
        file_data = base64.b64decode(file_content)

        # Upload to S3
        s3.put_object(
            Bucket=BUCKET_NAME,
            Key=file_name,
            Body=file_data
        )

        # Return success response
        return {
            "statusCode": 200,
            "body": json.dumps({
                "message": f"File {file_name} uploaded successfully to {BUCKET_NAME}."
            })
        }

    except ValueError as e:
        return {
            "statusCode": 400,
            "body": json.dumps({"error": str(e)})
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": "Something went wrong", "details": str(e)})
        }
