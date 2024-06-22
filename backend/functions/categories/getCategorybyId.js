const { GetItemCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

module.exports.getCategorybyId = async (event) => {
    const { id } = event.pathParameters;

    const params = {
        TableName: "Categories",
        Key: {
            "id": { S: id }
        }
    };

    try {
        const data = await dynamoDB.send(new GetItemCommand(params));
        if (data.Item) {
            return {
                statusCode: 200,
                body: JSON.stringify(data.Item),
            };
        } else {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "Category not found" }),
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
