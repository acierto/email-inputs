export const createNotification = (previousInputs, newInputs) => {
    const getId = (input) => input.id;

    const previousIds = previousInputs.map(getId);
    const newIds = newInputs.map(getId);

    const added = newInputs.filter(({id}) => !previousIds.includes(id));
    const removed = previousIds.filter((id) => !newIds.includes(id));

    return {
        added,
        inputs: newInputs,
        removed
    };
};
