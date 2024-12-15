This is my final project for my Mobile App Development class. I created a fitness mobile app.

What is it?
My fitness app helps users track their daily exercise routines with features like a visual progress bar to show their achievements, a rest timer, and the ability to add additional notes for workouts. Users can input their desired workouts, edit their entries as needed, and enjoy a confetti animation upon completing their tasks. The app is designed to keep fitness tracking engaging and user-friendly.

Who is it for?
This app is for anyone looking to track their fitness goals step-by-step and stay on course. It’s perfect for those who want a clear, visual representation of their progress and the time it will take to reach their goals. Unlike other fitness apps that focus on workout routines or promote merchandise, this app is solely dedicated to helping users focus on completing their personal fitness tasks.

User Story/Functionalities
As someone who wants to stay healthy but is often forgetful, I want an app that helps me track my workout goals so I can stay motivated and on track. I need a tool that allows me to manage my tasks with features to create, edit, and delete entries, while also providing a visual progress bar to show my progress. Additionally, I want space to write personal notes about my workouts and a timer to ensure I take proper rest between sets. This app would help me stay organized and focused on achieving my fitness goals.

Developer Checklist
As a developer
-I know I want to implement task management functionalities: Create, Edit, and Delete workout tasks.
-Develop a visual progress bar to track user progress dynamically. There would be a function to increment a possibility to add and decrease the completed reps. 
-Add functionality for users to input and manage personal notes for workouts.
-Include a rest timer for intervals between sets.
-Add confetti animations for task completion.
-Provide space for users to add personalized notes for context and motivation.

Revised Checklist
-I included everything I wanted from the developer’s checklist
-I made it so there’s a status update for each routine creation in the Index Screen
-“let’s start” when there is 0 reps completed
-”in-progress” when the rep is above 0, but below the totalReps goal
-”completed” when we reached our goal
-I updated the CreateScreen to only accept numbers for the Set, Rep, and Weight fields. I added an alert to notify users if they input letters, otherwise it caused a NaN error when calculating total reps.
-I included another alert in-case there are empty inputs. I needed numerical inputs otherwise I can’t work the Progress bar. 

