const { ScanCommand } = require('@aws-sdk/client-dynamodb');
const { unmarshall } = require('@aws-sdk/util-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

module.exports.getAdmin = async (event) => {
    try {
        const params = {
            TableName: "Admins",
        };

        const { Items } = await dynamoDB.send(new ScanCommand(params));

        const admins = Items.map(item => unmarshall(item));

        return {
            statusCode: 200,
            body: JSON.stringify(admins),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
