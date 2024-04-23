import inquirer from "inquirer";
let isFriend = await inquirer.prompt([{
        name: "friendName",
        type: "string",
        message: "Enter your friend name:"
    }]);
if (isFriend.friendName === "Zia Khan" || isFriend.friendName === "Faisal" || isFriend.friendName === "Ameen") {
    console.log(`${isFriend.friendName} is your friend.`);
}
else {
    console.log(`${isFriend.friendName} is not your friend`);
}
