export const Observable = () => {
    let observers = [];

    const unsubscribe = (listener) => () => {
        observers = observers.filter((subscriber) => subscriber !== listener);
    };

    return {
        notify: (data) => {
            observers.forEach((listener) => listener(data));
        },
        subscribe: (listener) => {
            observers.push(listener);
            return unsubscribe(listener);
        }
    };
};
