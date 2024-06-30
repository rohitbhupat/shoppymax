const { ScanCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

const unmarshall = require('@aws-sdk/util-dynamodb').unmarshall;

module.exports.getProducts = async (event) => {
    const params = {
        TableName: "Products",
    };

    try {
        const data = await dynamoDB.send(new ScanCommand(params));
        const items = data.Items.map(item => unmarshall(item));
        return {
            statusCode: 200,
            body: JSON.stringify(items),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error", details: error.message }),
        };
    }
};
