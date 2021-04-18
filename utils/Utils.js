export default class Utils {
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    static later(delay) {
        return new Promise((resolve) => {
            setTimeout(resolve, delay);
        });
    }
}
//# sourceMappingURL=Utils.js.map