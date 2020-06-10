export class ElementUtils {
    static getTranslateToMiddleX(width: number, currentPosition: number, offset: number = 0) {
        return ((width/2) - currentPosition) - offset
    }
}
