# Password_Generator

Unit 03 JavaScript Homework: Password Generator

Description
Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.
The user will be prompted to choose from the following password criteria:


Length (must be between 8 and 128 characters)


Character type:


Special characters (see examples)


Numeric characters


Lowercase characters


Uppercase characters




The application should validate user input and ensure that at least one character type is selected.
Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.
As a bonus, the user should also have the option to click a button to copy the password to their clipboard.
Your application should have a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.
Your application should be deployed to GitHub Pages.
Your application's GitHub repository should contain a README.md file explaining the purpose and functionality of the application. The README.md file should include a screenshot of the completed application as well as a link to the deployed GitHub Pages URL.


User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

Business Context
For companies that handle large amounts of sensitive data, weak passwords can pose a real security threat. An application that can generate strong passwords quickly and effortlessly saves employees time and ensures secure access to data.

Acceptance Criteria
GIVEN that a user needs a new, secure password
WHEN prompted for password criteria
THEN a password is generated


Commit Early and Often
One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:


Your commit history is a signal to employers that you are actively working on projects and learning new skills.


Your commit history allows you to revert your codebase in the event that you need to return to a previous state.


Follow these guidelines for committing:


Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.


Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.


Project:

- first added form class so i can change positioning of labels in the container
- added class for password display
- added word-break - so if password is too long, it will break at the end and create a new line
- document.getElementById () for character amount range and character amount number
- added slider for min-max number of characters
- added syncharacter amount so i can set the range upon input
- sync character amount (e) - e is the event argument
- var value = e.target.value is to set character amount equal to that value
- added id to form - so i can generate password upon click
- i added e.preventDefault() so it will stop the form from submitting and refreshing the page, how ever once i kept adding code, I could not figure out why it stopped working. 
- generatePassword (characterAmount, includeUppercase, includeNumbers, includeSymbols, includeLowercase) - incorporating all values - to get the variables for all 4, I need to pull from the values inside the page
- addeding .checked to the end is for that it tells us if its true or false when the button is pushed
- function generatePassword() - so script knows what to incorporate upon button click on generate Password
- for loop is for looping through all our different variables from low to high
- UPPERCASE_CHAR_CODES is my array of character codes - I concatinaed a new array onto it so i can add more symbols
- used defer so it starts after the HTML loads
- charCodes - the list of all the possbile character codes we can generate
- need to create a variable that will store all passwords
- used math.floor & math.random to generate random characters - it did not work
I had variables working until I started adding more code, then it went from there.