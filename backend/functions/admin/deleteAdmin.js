const { DeleteItemCommand } = require('@aws-sdk/client-dynamodb');
const { marshall } = require('@aws-sdk/util-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

module.exports.deleteAdmin = async (event) => {
    try {
        const { id } = event.pathParameters;

        const params = {
            TableName: "Admins",
            Key: marshall({ id }),
        };

        await dynamoDB.send(new DeleteItemCommand(params));

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Admin deleted successfully" }),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
