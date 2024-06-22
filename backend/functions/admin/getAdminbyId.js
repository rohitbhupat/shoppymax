const { GetItemCommand } = require('@aws-sdk/client-dynamodb');
const { marshall, unmarshall } = require('@aws-sdk/util-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

module.exports.getAdminbyId = async (event) => {
    try {
        const { id } = event.pathParameters;

        const params = {
            TableName: "Admins",
            Key: marshall({ id }),
        };

        const { Item } = await dynamoDB.send(new GetItemCommand(params));

        if (!Item) {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: "Admin not found" }),
            };
        }

        const admin = unmarshall(Item);

        return {
            statusCode: 200,
            body: JSON.stringify(admin),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
