const { GetItemCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

module.exports.getProductbyId = async (event) => {
    const { id } = event.pathParameters;

    const params = {
        TableName: "Products",
        Key: {
            "id": { S: id }
        }
    };

    try {
        const data = await dynamoDB.send(new GetItemCommand(params));
        if (data.Item) {
            const product = AWS.DynamoDB.Converter.unmarshall(data.Item); // Convert to regular JSON
            return {
                statusCode: 200,
                body: JSON.stringify(product),
            };
        } else {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "Product not found" }),
            };
        }
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
