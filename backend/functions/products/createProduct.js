const { PutItemCommand } = require('@aws-sdk/client-dynamodb');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { marshall } = require('@aws-sdk/util-dynamodb');
const { v4: uuidv4 } = require('uuid');

// Initialize the DynamoDB client
const dynamoDB = new DynamoDBClient({ region: 'ap-south-1' });

module.exports.createProduct = async (event) => {
    try {
        const requestBody = JSON.parse(event.body);

        // Validate required fields
        const { name, description, price, category } = requestBody;
        if (!name || !description || !price || !category) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing required fields" }),
            };
        }

        // Generate a unique ID for the product
        const id = uuidv4();

        // Prepare item for DynamoDB
        const item = {
            id,
            name,
            description,
            price: price.toString(), // DynamoDB expects numbers as strings
            category,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        const params = {
            TableName: "Products",
            Item: marshall(item),
        };

        // Put item into DynamoDB
        await dynamoDB.send(new PutItemCommand(params));

        return {
            statusCode: 201,
            body: JSON.stringify({ message: "Product created successfully", id }),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
