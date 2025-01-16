import json

def lambda_handler(event, context):
    # Extracting numbers from the event body
    try:
        body = json.loads(event["body"])
        num1 = body.get("num1")
        num2 = body.get("num2")

        if num1 is None or num2 is None:
            raise ValueError("Both num1 and num2 must be provided.")

        # Ensure inputs are numbers
        num1 = float(num1)
        num2 = float(num2)

        # Compute the sum
        result = num1 + num2

        # Return response
        return {
            "statusCode": 200,
            "body": json.dumps({"result": result})
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
