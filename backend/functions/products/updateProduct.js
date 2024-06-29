const { UpdateItemCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');
const AWS = require('aws-sdk');

module.exports.updateProduct = async (event) => {
    const { id } = event.pathParameters;
    const { name, image, description, price, category, quantity } = JSON.parse(event.body);

    const params = {
        TableName: "Products",
        Key: {
            "id": { S: id }
        },
        UpdateExpression: "SET #name = :name, #image = :image, #description = :description, #price = :price, #category = :category, #quantity = :quantity", // Fixed missing comma
        ExpressionAttributeNames: {
            "#name": "name",
            "#image": "image",
            "#description": "description",
            "#price": "price",
            "#category": "category",
            "#quantity": "quantity",
        },
        ExpressionAttributeValues: {
            ":name": { S: name },
            ":image": { S: image },
            ":description": { S: description },
            ":price": { N: price.toString() },
            ":category": { S: category },
            ":quantity": { N: quantity.toString() }, // Ensure quantity is converted to string as well
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
