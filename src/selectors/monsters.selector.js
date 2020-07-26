export default (monsters, text) => {
    return monsters.filter((monster) => {
        const textMatch = monster.name.trim().toLowerCase().includes(text.trim().toLowerCase());

        return textMatch;
    });
};