export class StringUtils {
    static isNumeric(value: string): boolean {
        return /^-{0,1}\d+$/.test(value);
    }

    static getZeroString(value: string): string {
        let zeroString = ""
        const letters = value.split("")
        letters.forEach((letter) => {
            zeroString += this.isNumeric(letter) ? "0" : letter
        })
        return zeroString
    }

    static getNumberWithComma(value: number | string): string {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
