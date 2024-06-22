const { DeleteItemCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDB = require("../../dynamoDB/dbConfig");


module.exports.deleteUser = async (event) => {
    const { id } = event.pathParameters;

    const params = {
        TableName: "Users",
        Key: {
            "id": { S: id } // Ensure id is treated as a string
        },
    };

    try {
        await dynamoDB.send(new DeleteItemCommand(params));
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "User deleted successfully" }),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
