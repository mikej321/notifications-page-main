import './styles/style.sass';

const notificationCounter = document.querySelector('.notification_counter');
const userNames = document.querySelectorAll('.user_name');
const userGroups = document.querySelectorAll('.user_group');
const userEvents = document.querySelectorAll('.user_event');
const readMarker = document.querySelector('.read_marker');
const notificationContainers = document.querySelectorAll('.notification_container');

class Notifications {
    constructor() {
        this.unread = notificationCounter.textContent;
    }
    
    reduceUnreadByStep() {
        const notificationCounter = document.querySelector('.notification_counter');

        this.unread--;
        notificationCounter.textContent = this.unread;
    }

    reduceUnreadToZero() {
        const notificationCounter = document.querySelector('.notification_counter');
        
        this.unread = 0;
        notificationCounter.textContent = this.unread;
    }
}

/* If you click Mark all as read, it will remove the background on the read posts
and the red dots as well. Also, make it to where if you click on the user_name or the 
user_group/user_event, it will mark it as read as well. */

// Reduces the notifications counter decreases by 1 if clicking the user_name/event

// Reduces the notifications counter decreases to 0 if clicking Mark all as read

const userNotifications = new Notifications();

// Event listener for "Mark all as read" that reduces counter to 0 by calling reduceUnreadToZero

readMarker.addEventListener('click', (e) => {
    e.preventDefault();

    userNotifications.reduceUnreadToZero();
})

// Event listeners for all of the different a tags located in the notification containers

userNames.forEach((user) => {
    // checks if the container of the clicked element has the unread attribute

    // if it does, it removes it and lessens the counter by 1
    user.addEventListener('click', (e) => {
        e.preventDefault();
        let grandParent = user.parentElement.parentElement.parentElement;
        
        if (grandParent.hasAttribute('unread')) {
            grandParent.removeAttribute('unread');
            userNotifications.reduceUnreadByStep();
        }
    })
})

userGroups.forEach((group) => {
    group.addEventListener('click', (e) => {
        e.preventDefault();
        let grandParent = group.parentElement.parentElement.parentElement;
        
        if (grandParent.hasAttribute('unread')) {
            grandParent.removeAttribute('unread');
            userNotifications.reduceUnreadByStep();
        }
    })
})

userEvents.forEach((event) => {
    event.addEventListener('click', (e) => {
        e.preventDefault();
        let grandParent = event.parentElement.parentElement.parentElement;

        if (grandParent.hasAttribute('unread')) {
            grandParent.removeAttribute('unread');
            userNotifications.reduceUnreadByStep();
        }
    })
})