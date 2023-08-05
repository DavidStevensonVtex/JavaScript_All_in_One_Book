const user = { username: 'funguy37', password: '123456' } ;
console.log("user: ", user);

const loginStatus = login(user) ;
console.log("loginStatus: ", loginStatus) ;
console.log("After calling login function: user: ", user);
console.warn(`The password is now ${user.password}`);

function login(userCredentials) {
    if (userCredentials.password === '123456' )
    {
        let randomString = Math.random().toString(36).slice(-16) ;
        userCredentials.password = randomString ;
        return `Terrible password. Your password has been reset to a random string.`;
    }

    return 'Logged In' ;
}

// user:  { username: 'funguy37', password: '123456' }
// loginStatus:  Terrible password. Your password has been reset to a random string.
// After calling login function: user:  { username: 'funguy37', password: '0.2fvobes48nk' }
// The password is now 0.2fvobes48nk