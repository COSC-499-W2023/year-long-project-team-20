import json
import boto3

client = boto3.client('dynamodb')
ses_client = boto3.client('ses')

def lambda_handler(event, context):
    # Define the query parameters to get the latest record
    query_params = {
        'TableName': 'XXXXXXXXXXXX',
        'IndexName': '__typename-createdAt-index',
        'Limit':1,
        'KeyConditionExpression': '#pk = :pkval', # Specify your partition key condition here
        'ExpressionAttributeNames': {'#pk': '__typename'},
        'ExpressionAttributeValues': {':pkval': {'S': 'InAppMessaging'}},  # Replace 'PartitionKeyValue' with your actual partition key value
        'ScanIndexForward': False
    }
    
    # Query the DynamoDB table
    response = client.query(**query_params)
    
    # Extract the latest record from the response
    latest_record = response.get('Items', [])[-1] if response.get('Items') else {}

    toAddress = latest_record.get('to').items()
    
    for key,value in toAddress:
        if key=='S':
            toAddress=value
    print(toAddress)
    
    fromAddress = latest_record.get('from').items()
     
    for key,value in fromAddress:
        if key=='S':
            fromAddress=value
    print(fromAddress)
    
    messageBody = latest_record.get('Description').items()
    for key,value in messageBody:
        if key=='S':
            messageBody=value
    
    videoURL = latest_record.get('link').items()
    
    for key,value in videoURL:
        if key=='S':
            videoURL=value
    
    domainLink = 'https://www.cosc499team20.com/'
    
    print(messageBody)
    # Prepare and send email
    try:
        response = ses_client.send_email(
            Destination={
                'ToAddresses': [toAddress]
            },
            Message={
                'Body': {
                    'Html': {
                        'Charset': 'UTF-8',
                        'Data': f'''<!DOCTYPE html>
                                <html><body>
                                <div style="margin: auto; width: 70%; text-align: center; border: 2px solid #009D94; border-radius: 10px; padding: 10px;">
                                <h2 style="font-size: 28px;">{fromAddress} sent you a Video!</h2>
                                <p style="font-size: 18px;">{messageBody}</p>
                                <a href="{videoURL}" style="text-decoration: none; color: white;">
                                <button style="background-color: #008080; /* Turquoise */ border: none; color: white; 
                                padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; 
                                font-size: 16px; cursor: pointer; border-radius: 10px;">Watch Video</button></a>
                                <a href="{domainLink}" style="text-decoration: none; color: white;">
                                <button style="background-color: #009D94; /* Turquoise */ border: none; color: white; 
                                padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; 
                                font-size: 16px; cursor: pointer; border-radius: 10px;">Account Login</button></a></div>
                                </body></html>'''
                    }
                },
                'Subject': {
                    'Charset': 'UTF-8',
                    'Data': fromAddress + ' sent you a Video!'
                }
            },
            Source='XXXXXXXXX'  # Replace with your sender email address
        )
        print("Email sent successfully")
    except Exception as e:
        print(f"An error occurred while sending the email: {e}")
        error_message = str({e})
             # Send an email to the sender notifying them of the failure
        try:
            response = ses_client.send_email(
                Destination={
                    'ToAddresses': [fromAddress]
                },
                Message={
                    'Body': {
                        'Text': {
                            'Charset': 'UTF-8',
                            'Data': "There was an error in delivering your email notification. Please double-check the email and try again. \n Error Message:" + error_message
                        }
                    },
                    'Subject': {
                        'Charset': 'UTF-8',
                        'Data': "Error Sending Email Notification"
                    }
                },
                Source='XXXXXXXXXX'  # Replace with your sender email address
            )
            print("Email notification sent to the sender.")
        except Exception as e:
            print(f"An error occurred while sending the error email notification to the sender: {e}")
        else:
            print("Error message sent successfully!")
    
    # Prepare the response
    response_body = {
        'statusCode': 200,
        'body': json.dumps(latest_record),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
    
    return response_body
