//Logger util class to log only in dev mode
export function consoleLog(text: String) {
    if (__DEV__) {
        console.log(text);
    }
}