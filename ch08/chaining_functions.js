const robot = {
    currentActivity: undefined,
    walk() {
        this.currentActivity = 'walking ';
        return this ;
    },
    talk() {
        this.currentActivity = 'talking ' ;
        return this ;
    },
    write() {
        this.currentActivity = 'writing' ;
        return this;
    }
}


let result = robot.walk().talk().write();
console.log(result.currentActivity);
// writing