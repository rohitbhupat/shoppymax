const { UpdateItemCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

module.exports.updateSeller = async (event) => {
    const { id } = event.pathParameters;
    const { firstname, lastname, username, email, contact, password, confirmpassword } = JSON.parse(event.body);

    const params = {
        TableName: "Sellers",
        Key: {
            "id": { S: id }
        },
        UpdateExpression: "SET #firstname = :firstname, #lastname = :lastname, #username = :username, #email = :email, #contact = :contact, #password = :password, #confirmpassword = :confirmpassword",
        ExpressionAttributeNames: {
            "#firstname": "firstname",
            "#lastname": "lastname",
            "#username": "username",
            "#email": "email",
            "#contact": "contact",
            "#password": "password",
            "#confirmpassword": "confirmpassword",
        },
        ExpressionAttributeValues: {
            ":firstname": { S: firstname },
            ":lastname": { S: lastname },
            ":username": { S: username },
            ":email": { S: email },
            ":contact": { S: contact },
            ":password": { S: password },
            ":confirmpassword": { S: confirmpassword },
        },
        ReturnValues: "ALL_NEW",
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
