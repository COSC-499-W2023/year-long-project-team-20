import json
import boto3

def handler(event, context):
    print('received event:')
    print(event)

    # Create a Cognito client
    client = boto3.client('cognito-idp')

    # Get the query from the event
    query = event['queryStringParameters']['query']

    # Call the list_users function
    response = client.list_users(
        UserPoolId='ca-central-1_l0PoGCD2F', 
        Filter=f'username ^= "{query}"',
    )

    # Extract the usernames from the response
    usernames = [user['Username'] for user in response['Users']]

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(usernames)
    }