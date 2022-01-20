# Starbucks Rewards Page Clone

## Intro

I'm a newbie/still-studying developer and I need some practice to do, aside of the bootcamp i'm already participating in, so...

Since I'm having some new year's holidays i thought to keep practicing with web development cloning [this beautiful page](https://www.starbucks.com/rewards "the original starbuck's page") from the Starbuck's website.<br>

I tried being as accurate as possible, and I think it's kind of a good result, even if it differs a bit in some containers width and some animations.<br>
*and probably something more*.

```
NOTICE: I deliberately decided not to use any framework for css, not even for responsiveness,
to increase the challenge and to practice with an "harder css" (and media queries).
However, I opted for the use of scss, because it's okay to want to challenge yourself
but we must not exaggerate haha
```

## Actual State

I decided to put this page on Github just when I finished it for having it as a reference for me in the times to come, and maybe collecting some tips.

#### Responsiveness

I have finished the mobile responsiveness, now I'll start working on the tablet and laptop one (since I did start from a 1920x1080 screen).

#### Code and CSS "cleanliness"

I'm always been a "code cleanliness" supporter, but probably in this codebase I haven't been that clean, that's why I'm trying to use new features as SCSS (whit is mixins ecc ecc) so I'm kind of exploring many ways of doing things.

PS: I'm not a big fan of css-utility-class, because it's definitely true that keep the css code clean, but it's also true that dirties the html code; And also logically, i think it's better to have one unique place where finding the css of an element, instead of going around trough different sections of different scss files.

## ToDo List

Some things that I'd like to improve / implement and I have some clue on how doing it.

- Responsiveness
  - I've done the mobile version, I do miss tablet and Laptop ones (I did it on a 1920x1080 screen, so for some screens it could be too big).
- improving the accuracy of sizes related to the original page.
- cleaning the code and refactoring where it's possible, reducing code repetitions.
- I had to put some fixed heights for every single accordeon-FAQ-section (on mobile) to make it transition from 0 to is height, and not make it just suddenly switch from o to 100%.


### Known issues

###### Things that I know aren't working properly but I have no idea why or what to do

- fixing the insert-code animation when the input:text get/lose the focus *(any suggestion about this would really be appreciated)*.
- I Haven't been able to make the mobile navigation close automatically when the size of the screen is bigger than 780px *(any suggestion about this would really be appreciated)*.
- For some reason, that probably I'll never understand, the opacity transition on the "reedem carousel" has stopped working, now the image change suddenly and with no fade-in-out.


##### My name is Francesco, I'm from Italy and as you can clearly see, I'm a noob!

