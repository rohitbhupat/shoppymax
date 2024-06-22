const { PutItemCommand } = require('@aws-sdk/client-dynamodb');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { marshall } = require('@aws-sdk/util-dynamodb');
const { v4: uuidv4 } = require('uuid');

// Initialize the DynamoDB client
const dynamoDB = new DynamoDBClient({ region: 'ap-south-1' });

module.exports.createCategory = async (event) => {
    try {
        const requestBody = JSON.parse(event.body);

        // Validate required fields
        const { name } = requestBody;
        if (!name) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing required fields" }),
            };
        }

        // Generate a unique ID for the category
        const id = uuidv4();

        // Prepare item for DynamoDB
        const item = {
            id,
            name,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        const params = {
            TableName: "Categories",
            Item: marshall(item),
        };

        // Put item into DynamoDB
        await dynamoDB.send(new PutItemCommand(params));

        return {
            statusCode: 201,
            body: JSON.stringify({ message: "Category created successfully", id }),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
