const { ScanCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');


module.exports.getCategories = async (event) => {
    const params = {
        TableName: "Categories",
    };

    try {
        const data = await dynamoDB.send(new ScanCommand(params));
        return {
            statusCode: 200,
            body: JSON.stringify(data.Items),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
