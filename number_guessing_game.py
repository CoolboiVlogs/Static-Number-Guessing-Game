import random

def static_number_guess_game():
    # Define the number the user has to guess (e.g., let's say the fixed number is 50)
    number_to_guess = 50
    guess_limit = 5
    attempts = 0

    print("Welcome to the Static Number Guessing Game!")
    print(f"You need to guess a number between 1 and 100.")
    print(f"You have {guess_limit} attempts to guess the correct number.\n")

    while attempts < guess_limit:
        try:
            user_guess = int(input(f"Attempt {attempts + 1}/{guess_limit}: Enter your guess: "))

            if user_guess == number_to_guess:
                print(f"Congratulations! You guessed the correct number {number_to_guess}.")
                break
            elif user_guess < number_to_guess:
                print("Your guess is too low.")
            else:
                print("Your guess is too high.")
            
            attempts += 1

        except ValueError:
            print("Please enter a valid number!")

    if attempts == guess_limit and user_guess != number_to_guess:
        print(f"Sorry! You've used all your attempts. The correct number was {number_to_guess}.")
    
    print("Thank you for playing!")

# Run the game
static_number_guess_game()
