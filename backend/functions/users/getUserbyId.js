const { GetCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

module.exports.getUserbyId = async (event) => {
    const { id } = event.pathParameters;

    const params = {
        TableName: "Users",
        Key: { id }
    };

    try {
        const data = await dynamoDB.send(new GetCommand(params));
        if (data.Item) {
            return {
                statusCode: 200,
                body: JSON.stringify(data.Item),
            };
        } else {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "User not found" }),
            };
        }
    } catch (error) {
        console.error("DynamoDB Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
