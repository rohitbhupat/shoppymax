const { PutItemCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');
const { v4: uuidv4 } = require('uuid');

module.exports.createSeller = async (event) => {
    try {
        const requestBody = JSON.parse(event.body);
        
        // Validate required fields
        const { firstname, lastname, username, email, contact, password, confirmpassword } = requestBody;
        if (!firstname || !lastname || !username || !email || !contact || !password || !confirmpassword) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing required fields" }),
            };
        }

        // Generate a unique ID for the seller
        const id = uuidv4();

        // Prepare item for DynamoDB
        const params = {
            TableName: "Sellers",
            Item: {
                "id": { S: id },
                "firstname": { S: firstname },
                "lastname": { S: lastname },
                "username": { S: username },
                "email": { S: email },
                "contact": { S: contact },
                "password": { S: password },
                "confirmpassword": { S: confirmpassword },
                "createdAt": { S: new Date().toISOString() },
                "updatedAt": { S: new Date().toISOString() }
            }
        };

        // Put item into DynamoDB
        await dynamoDB.send(new PutItemCommand(params));

        return {
            statusCode: 201,
            body: JSON.stringify({ message: "Seller created successfully", id }),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
