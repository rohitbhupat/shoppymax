const { UpdateItemCommand } = require('@aws-sdk/client-dynamodb');
const { marshall } = require('@aws-sdk/util-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

module.exports.updateAdmin = async (event) => {
    try {
        const { id } = event.pathParameters;
        const requestBody = JSON.parse(event.body);

        // Validate required fields
        const { username, email, password } = requestBody;
        if (!username || !email || !password) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing required fields" }),
            };
        }

        // Prepare update expression and attribute values
        const updateExpression = 'SET #username = :username, #email = :email, #password = :password, updatedAt = :updatedAt';
        const expressionAttributeNames = {
            '#username': 'username',
            '#email': 'email',
            '#password': 'password',
        };
        const expressionAttributeValues = marshall({
            ':username': username,
            ':email': email,
            ':password': 'password',
            ':updatedAt': new Date().toISOString(),
        });

        const params = {
            TableName: "Admins",
            Key: marshall({ id }),
            UpdateExpression: updateExpression,
            ExpressionAttributeNames: expressionAttributeNames,
            ExpressionAttributeValues: expressionAttributeValues,
        };

        await dynamoDB.send(new UpdateItemCommand(params));

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Admin updated successfully" }),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
