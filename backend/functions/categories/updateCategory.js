const { UpdateItemCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');


module.exports.updateCategory = async (event) => {
    const { id } = event.pathParameters;
    const { name } = JSON.parse(event.body);

    const params = {
        TableName: "Categories",
        Key: {
            "id": { S: id }
        },
        UpdateExpression: "SET #name = :name",
        ExpressionAttributeNames: {
            "#name": "name",
        },
        ExpressionAttributeValues: {
            ":name": { S: name },
        },
        ReturnValues: "ALL_NEW"
    };

    try {
        const data = await dynamoDB.send(new UpdateItemCommand(params));
        return {
            statusCode: 200,
            body: JSON.stringify(data.Attributes),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
