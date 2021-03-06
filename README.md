# README

Remember the Bacon is a place to store of your to-do list and get things done! It was inspired by [Remember the Milk](https://www.rememberthemilk.com). But unlike the oringial, it delivers a smoother user experience through Rails, PostgreSQL, React.js, and Redux. This project was planned and implemented in about 11 days.

[Design Document](https://github.com/walterhwan/remember_the_bacon/wiki)

# Features

+ Secure user authentication
  + User password was stored as salted hash(BCrypt)
+ Create tasks and organize them into lists so you remember to do them
+ Add task details like estimated time to do the task
+ Smooth and interactive navigation

## List CRUD

![list-curd](https://i.imgur.com/Nt497MR.gif)

List of tasks are the core feature of this app. The design of the app should give user a intuitive way to create, edit, and delete a list.

The list form modal is a single component that can create or edit list, because they both have similar structures. They were all rendered at the beginning with `hidden` class name and will show up once the right button was clicked.

## Task CRUD

![task-curd](https://i.imgur.com/L6umJzH.gif)

Smooth manipulation of Task is also a very important feature. The idea is to make every action(except deleting) one click away. This will saves user's time and effort and let them want to use it more often.

When editing the task, there is no submit button anywhere. Since every time user finish changing the update `ajax` was already sent. This is because we don't want user to do an extra step of submitting the edit. Thus making a more intuitive user experience.

## Good animation

![menu_animation](https://i.imgur.com/8ugZIEV.gif)

![add_task](https://i.imgur.com/kxgrwH6.gif)

![search](https://i.imgur.com/XcHruBv.gif)

Good animation that feels intuitive and interactive is very crucial for website design. Our mind rely on those visual clue to help understanding the site. Sometimes these visual design is more important than the actual feature. Since a badly designed UI might discourage its usage no mater how good your feature is.

The best solution for this project is CSS animation using `transition` and use javascript to trigger those effects. Since the animation is not too complicated css transition effects is the fastest and the lightweight choice.

The actual implementation is simple. First, you define the starting position (such as height, absolute position etc) of the DOM elements and then define the ending position in the same selector plus an additional class such as `extend`.

```css
.side-lists-nav.extend {
  top: -350px;
}
.side-lists-nav {
  top: 0px;
}
```

 Then, in javascript, you can query all the elements you want to move and add/remove `extend` class depend on the situation. Note that although it looks like some element 'disappeared' they were actually been moved outside of its parent elements and was hidden by `overflow: hidden` property.

 ```js
 ...
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
 ...
 ```

## Search

![search](https://i.imgur.com/gkC9wRo.gif)

After finishing list and tasks, doing search is much easier. Since it reuse all components of task index. The search itself is handled on database level, although after the frontend gets the data it can present in whatever order that is required(or select some part of the tasks).

```js
// filter tasks depend on whether incomplete or completed tabs user selected previously
let displayTasks = tasks.slice().filter((el) => {
  return this.props.showCompleted === el.completed;
});
// sort the task by update time or other options
displayTasks = displayTasks.sort(byUpdateTime);
```


## Challenge

The real challenging part of this project is how to organize the structure of html in order to achieve various CSS animation effects but also maintain responsiveness of the website. Knowing many tools/tricks and trying out each of them to find out the best solution is the key to polishing the final product.

The hardest part is probably the task navigation component(the middle section of the app with white background), since it has most moving elements and doing most of the work. The content showing in the task index was generated by different part of the app. So knowing the state of other part of the components become important.



# Improvements

 - [ ] Muti-selection
 - [ ] Drag and Drop Tasks for ordering
 - [ ] Different Sorting methods for list and tasks (sort by creation time, alphabetically, or by user drag and drop )
 - [ ] More fields for task details like due date, tag, and location
 - [ ] Inbox-like list where all of your tasks area organized by due date
 - [ ] Assign tasks to other user

<!--
+ Brief description
+ any CRUD functionality it may have
+ screenshot of feature
+ challenge
+ why you did it that way
+ how? one code snippet -->
