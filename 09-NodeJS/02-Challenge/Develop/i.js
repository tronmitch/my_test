const inquirer = require('inquirer');

function promptItems(items = []) {
  const questions = [
    {
      type: 'input',
      name: 'item',
      message: 'Enter an item (leave empty to finish):',
    }
  ];

  inquirer.prompt(questions)
    .then(answers => {
      const newItem = answers.item.trim();

      if (newItem !== '') {
        items.push(newItem);
        // Recursively call promptItems for the next input
        promptItems(items);
      } else {
        // Process the collected items
        console.log('List of items:', items);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

promptItems();
