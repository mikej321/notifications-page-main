import './styles/style.sass';

const notificationCounter = document.querySelector('.notification_counter');
const userNames = document.querySelectorAll('.user_name');
const userGroups = document.querySelectorAll('.user_group');
const userEvents = document.querySelectorAll('.user_event');
const readMarker = document.querySelector('.read_marker');
const notificationContainers = document.querySelectorAll('.notification_container');

// How long I want the animation to take, in ms
const animationDuration = 2000;

// Calculate how long each 'frame' should last
const frameDuration = 1000 / 60;

// Use that to calculate how many frames to complete the animation
const totalFrames = Math.round(animationDuration / frameDuration);

// An ease-out function that slows the count as it progresses
const easeOutQuad = t => t * (2 - t);

class Notifications {
    constructor() {
        this.unread = notificationCounter.textContent;
    }
    
    reduceUnreadByStep() {
        const notificationCounter = document.querySelector('.notification_counter');
        let notificationValue = Number(notificationCounter.textContent)

        if (notificationValue > 0) {
            this.unread--;
            animateCountDownByOne(notificationCounter, this.unread);
        }
    }
    
    reduceUnreadToZero() {
        const notificationCounter = document.querySelector('.notification_counter');
        let notificationValue = Number(notificationCounter.textContent);
        
        if (notificationValue > 0) {
            animateCountDownToZero(notificationCounter, this.unread)
            this.unread = 0;
            // notificationCounter.textContent = this.unread;
            notificationContainers.forEach(container => container.removeAttribute('unread'));
        }
    }
}

/* If you click Mark all as read, it will remove the background on the read posts
and the red dots as well. Also, make it to where if you click on the user_name or the 
user_group/user_event, it will mark it as read as well. */

// Reduces the notifications counter decreases by 1 if clicking the user_name/event

// Reduces the notifications counter decreases to 0 if clicking Mark all as read

const userNotifications = new Notifications();

function animateCountDownByOne(el, diff) {
    let countTo = parseInt(diff, 10);
    // Start the animation running 60 times per second
    const counter = setInterval(() => {
        // If the current count has changed, update the element
    
        el.textContent = countTo--;
        clearInterval(counter)
    }, 150);
}

function animateCountDownToZero(el, diff) {
    let countTo = parseInt(diff, 10);
    for (let i = countTo; i >= 0; i--) {
        const counter = setInterval(() => {
            el.textContent = countTo--;
            clearInterval(counter)
        }, 200)
    }
}



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

// make it so that the counter reduces slower like in my last project instead of instantly