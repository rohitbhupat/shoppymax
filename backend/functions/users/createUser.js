const { PutCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');
const { v4: uuidv4 } = require('uuid');

module.exports.createUser = async (event) => {
    console.log('Event:', event);
    const { firstname, lastname, username, email, contact, password, confirmpassword } = JSON.parse(event.body);

    const params = {
        TableName: "Users",
        Item: {
            id: uuidv4(), // Assign uuidv4() to the id field
            firstname,
            lastname,
            username,
            email,
            contact,
            password,
            confirmpassword,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
    };

    try {
        console.log('Params:', params);
        await dynamoDB.send(new PutCommand(params));
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "User created successfully" }),
        };
    } catch (error) {
        console.error('DynamoDB Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
