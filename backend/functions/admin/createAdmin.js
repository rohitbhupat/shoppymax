const { PutItemCommand } = require('@aws-sdk/client-dynamodb');
const { marshall } = require('@aws-sdk/util-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

module.exports.createAdmin = async (event) => {
    try {
        const requestBody = JSON.parse(event.body);

        // Validate required fields
        const { username, email, password } = requestBody;
        if (!username || !email || !password) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing required fields" }),
            };
        }

        // Generate a unique id using timestamp or UUID
        const id = generateId(); // Replace with your ID generation logic

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

function generateId() {
    // Implement your custom ID generation logic here, e.g., using timestamp or UUID
    return Date.now().toString(); // Example: using timestamp as ID
}
