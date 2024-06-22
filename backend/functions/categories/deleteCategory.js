const { DeleteItemCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

module.exports.deleteCategory = async (event) => {
    const { id } = event.pathParameters;

    const params = {
        TableName: "Categories",
        Key: {
            "id": { S: id }
        }
    };

    try {
        await dynamoDB.send(new DeleteItemCommand(params));
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Category deleted successfully" }),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
