export const Observable = () => {
    let observers = [];

    return {
        notify: (data) => {
            observers.forEach((observer) => observer(data));
        },
        subscribe: (observer) => {
            observers.push(observer);
        },
        unsubscribe: (observer) => {
            observers = observers.filter((subscriber) => subscriber !== observer);
        }
    };
};
