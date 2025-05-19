<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation Example</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <style>
      .animated-button {
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to My Page</h1>
    </header>

    <main>
        <section id="content">
            <p id="text-to-change">This is the initial text.</p>
            <button id="change-text-button">Change Text</button>
            <button id="change-style-button">Change Style</button>
            <button id="add-element-button">Add Element</button>
            <button id="remove-element-button">Remove Element</button>
            <div id="gallery-container"></div>
            <div id="tab-buttons-container"></div>
            <div id="tab-content-container"></div>

            <form id="registration-form" action="#" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required>

                <label for="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" placeholder="Enter your date of birth">

                <label for="gender">Gender:</label>
                <select id="gender" name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <div class="radio-group">
                    <label>
                        <input type="radio" name="program" value="btech"> B.Tech
                    </label>
                    <label>
                        <input type="radio" name="program" value="mtech"> M.Tech
                    </label>
                    <label>
                        <input type="radio" name="program" value="phd"> PhD
                    </label>
                </div>

                <div class="checkbox-group">
                    <label>
                        <input type="checkbox" id="newsletter" name="newsletter" value="yes"> Subscribe to newsletter
                    </label>
                    <label>
                        <input type="checkbox"  name="terms" value="yes" required> I agree to terms and conditions
                    </label>
                </div>

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" cols="50" placeholder="Enter your message here..."></textarea>

                <button type="submit">Register</button>
                <button type="reset">Clear Form</button>
            </form>
            <button id="local-storage-button" class = "animated-button">Save Preferences</button>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>
