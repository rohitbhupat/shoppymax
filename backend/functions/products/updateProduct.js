const { UpdateItemCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

module.exports.updateProduct = async (event) => {
    const { id } = event.pathParameters;
    const { name, description, price, category } = JSON.parse(event.body);

    const params = {
        TableName: "Products",
        Key: {
            "id": { S: id }
        },
        UpdateExpression: "SET #name = :name, #description = :description, #price = :price, #category = :category",
        ExpressionAttributeNames: {
            "#name": "name",
            "#description": "description",
            "#price": "price",
            "#category": "category"
        },
        ExpressionAttributeValues: {
            ":name": { S: name },
            ":description": { S: description },
            ":price": { N: price.toString() },
            ":category": { S: category }
        },
        ReturnValues: "ALL_NEW"
    };

    try {
        const data = await dynamoDB.send(new UpdateItemCommand(params));
        const updatedAttributes = AWS.DynamoDB.Converter.unmarshall(data.Attributes); // Convert to regular JSON
        return {
            statusCode: 200,
            body: JSON.stringify(updatedAttributes),
        };
    } catch (error) {
        console.error("Error updating product:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
