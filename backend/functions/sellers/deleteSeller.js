const { DeleteItemCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

module.exports.deleteSeller = async (event) => {
    const { id } = event.pathParameters;

    const params = {
        TableName: "Sellers",
        Key: {
            "id": { S: id }
        }
    };

    try {
        await dynamoDB.send(new DeleteItemCommand(params));
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Seller deleted successfully" }),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
