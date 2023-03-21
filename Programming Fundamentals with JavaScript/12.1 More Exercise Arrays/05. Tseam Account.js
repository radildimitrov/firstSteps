function tseamAccount(arr) {
  //obtain the account
  let account = arr.shift().split(" ");
  //get the next duet of command + title
  let duetCommand = arr.shift().split(" ");
  let command = duetCommand[0];
  let title = duetCommand[1];
  while (command != "Play!") {
    //check if title is part of accounts
    if (account.includes(title) == false && command == "Install") {
      account.push(title);
    }
    if (account.includes(title) == true && command == "Uninstall") {
      let indexOf = Number(account.indexOf(title));
      account.splice(indexOf, indexOf);
    }
    if (account.includes(title) == true && command == "Update") {
      let indexOf = Number(account.indexOf(title));
      account.splice(indexOf, indexOf);
      account.push(title);
    }
    if (command == "Expansion") {
      let expansionArray = title.split("-");
      let expansionTitle = expansionArray[0];
      if (account.includes(expansionTitle) == true) {
        let indexOf = Number(account.indexOf(expansionTitle));
        let newTitle = title.replace("-", ":");
        account.splice(indexOf + 1, 0, newTitle);
      }
    }
    duetCommand = arr.shift().split(" ");
    command = duetCommand[0];
    title = duetCommand[1];
  }
  console.log(account.join(" "));
}

tseamAccount([
  "CS WoW Diablo",

  "Uninstall XCOM",

  "Update PeshoGame",

  "Update WoW",

  "Expansion Civ-V",

  "Play!",
]);
