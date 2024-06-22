const { DeleteItemCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

module.exports.deleteProduct = async (event) => {
    const { id } = event.pathParameters;

    const params = {
        TableName: "Products",
        Key: {
            "id": { S: id }
        }
    };

    try {
        await dynamoDB.send(new DeleteItemCommand(params));
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Product deleted successfully" }),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
