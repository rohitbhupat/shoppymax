const { ScanCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

module.exports.getUsers = async (event) => {
    const params = {
        TableName: "Users",
    };

    try {
        const result = await dynamoDB.send(new ScanCommand(params));
        return {
            statusCode: 200,
            body: JSON.stringify(result.Items),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
