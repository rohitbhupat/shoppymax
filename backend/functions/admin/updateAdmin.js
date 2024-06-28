const { UpdateItemCommand } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");
const dynamoDB = require("../../dynamoDB/dbConfig");

module.exports.updateAdmin = async (event) => {
    try {
        const { id } = event.pathParameters;
        const requestBody = JSON.parse(event.body);

        // Validate required fields
        const { username, email, password } = requestBody;
        if (!id || !username || !email || !password) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing required fields" }),
            };
        }

        // Prepare update expression and attribute values
        const updateExpression =
            "SET #username = :username, email = :email, #password = :password, updatedAt = :updatedAt";
        const expressionAttributeValues = marshall({
            ":username": username,
            ":email": email,
            ":password": password,
            ":updatedAt": new Date().toISOString(),
        });

        // Use ExpressionAttributeNames for reserved keywords like 'password' and 'username'
        const expressionAttributeNames = {
            "#username": "username",
            "#password": "password",
        };

        const params = {
            TableName: "Admins",
            Key: marshall({ id: id }), // Ensure id is properly formatted
            UpdateExpression: updateExpression,
            ExpressionAttributeValues: expressionAttributeValues,
            ExpressionAttributeNames: expressionAttributeNames,
            ReturnValues: "ALL_NEW",
        };

        const result = await dynamoDB.send(new UpdateItemCommand(params));

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Admin updated successfully",
                updatedAttributes: unmarshall(result.Attributes),
            }),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
