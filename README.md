## Implementation Details

- My implementation is a list of teachers for the test school, drilling down to a list of classes for the selected teacher, drilling down to a list of students for the selected class.
- I wanted to satisfy the "each day of the week" part of the story by displaying the day of the week above the classes on that day on the classes screen. It looks like this should be achievable by requesting lessons.period data with the classes API but the lessons data being returned for the test school is empty (as there is no data past the school year that has just ended?). I didn't find an alternative way to do this that could be done in a reasonable timescale for the exercise.
- I've used expo as it provides a simple way to set up a working environment and the router is simple.
- I've used RTK for state management. This is perhaps not necessary for such a small project, but any real RN project is likely to have some kind of state managment system.
- I've written a bit of test code, to demonstrate I've thought about it :-) Its not comprehensive.
- I've only tested on Android (I don't have a working Mac/iPhone available).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```
