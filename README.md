# README

Remember the Bacon is a place to store of your to-do list and get things done! It was inspired by [Remember the Milk](www.rememberthemilk.com). But unlike the oringial, it delivers a smoother user experience through Rails, PostgreSQL, React.js, and Redux. This project was planned and implemented in about 11 days.

# Features

+ Secure user authentication
  + User password was stored as salted hash(BCrypt)
+ Create tasks and organize them into lists so you remember to do them
+ Add task details like estimated time to do the task
+ Smooth and interactive navigation

## List CRUD

![list-curd](https://i.imgur.com/Nt497MR.gif)

List of tasks are the core feature of this app. The design of the app should give user a intuitive way to create, edit, and delete a list.

## Task CRUD

![task-curd](https://i.imgur.com/L6umJzH.gif)

Smooth manipulation of Task is also a very important feature. The idea is to make every action(except deleting) one click away. This will saves user's time and effort and let them want to use it more often.

## Good animation

![menu_animation](https://i.imgur.com/8ugZIEV.gif)

![add_task](https://i.imgur.com/Ju9EzTC.gif)

Good animation that feels intuitive and interactive is very crucial for website design. Our mind rely on those visual clue to help understanding the site. Sometimes these visual design is more important than the actual feature. Since a badly designed UI might discourage its usage no mater how good your feature is.

The best solution for this project is CSS animation using `transition` and use javascript to trigger those effects. Since the animation is not too complicated css transition effects is the fastest and require less resources.

The actual implementation is simple. First, you define the starting position (such as height, absolute position etc) of the DOM elements and then define the ending position in the same selector plus an additional class such as `extend`.

```css
.side-lists-nav.extend {
  top: -350px;
}
.side-lists-nav {
  top: 0px;
}
```

 Then, in javascript, you can query all the elements you want to move and add/remove `extend` class depend on the situation. The

 ```js
 const eleClassNames = [
   '.menu-icon-div',
   '.side-lists-nav',
   '.task-list-details-section',
   '.search-form',
 ];
 const elements = document.querySelectorAll(
   eleClassNames.join(', ')
 );
 if (elements[0].classList.contains('extend')) {
   for (const el of elements) {
     el.classList.remove('extend');
   }
 } else {
   for (const el of elements) {
     el.classList.add('extend');
   }
 }
 ```


# Improvements

 - [ ] Muti-selection
 - [ ] Drag and Drop Tasks for ordering
 - [ ] Different Sorting methods for list and tasks (sort by creation time, alphabetically, or by user drag and drop )
 - [ ] More fields for task details like due date, tag, and location
 - [ ] Inbox-like list where all of your tasks area organized by due date
 - [ ] Assign tasks to other user

<!--

 The challenge is to organize the structure

+ Brief description
+ any CRUD functionality it may have
+ screenshot of feature
+ challenge
+ why you did it that way
+ how? one code snippet -->
