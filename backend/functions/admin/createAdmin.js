const { PutItemCommand } = require('@aws-sdk/client-dynamodb');
const { marshall } = require('@aws-sdk/util-dynamodb');
const { v4: uuidv4 } = require('uuid'); // Importing uuid
const dynamoDB = require('../../dynamoDB/dbConfig');

module.exports.createAdmin = async (event) => {
    try {
        const requestBody = JSON.parse(event.body);

        // Log the parsed request body
        console.log("Request Body:", requestBody);

        // Validate required fields
        const { username, email, password } = requestBody;
        if (!username || !email || !password) {
            console.log("Missing required fields", { username, email, password });
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing required fields" }),
            };
        }

        // Generate a unique id using uuid
        const id = uuidv4();

        const params = {
            TableName: "Admins",
            Item: marshall({
                id: id,
                username: username,
                email: email,
                password: password,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            }),
        };

        console.log("Params:", params);

        await dynamoDB.send(new PutItemCommand(params));

        return {
            statusCode: 201,
            body: JSON.stringify({ message: "Admin created successfully", id: id }),
        };
    } catch (error) {
        console.error("Error:", error);
        if (error.name === 'ResourceNotFoundException') {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: "Table not found" }),
            };
        }
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
