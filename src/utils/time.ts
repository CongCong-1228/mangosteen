/*
example

import { Time } from @/utils/time.ts

const time = new Time()
time.format("YYYY-MM-DD")
time.firstDayOfMonth()
time.firstDayOfYear()
time.lastDayOfMonth()
time.lastDayOfYear()
time.add(1, 'month')

*/

export class Time {
    date: Date;
    constructor(date = new Date()) {
        this.date = date;
    }
    format(pattern = "YYYY-MM-DD") {
        // 目前支持的格式有 "YYYY MM DD HH mm ss SSS"
        const year = this.date.getFullYear();
        // 基于0的值，一年的第一个月是0
        const month = this.date.getMonth() + 1;
        const day = this.date.getDate();
        const hour = this.date.getHours();
        const minute = this.date.getMinutes();
        const second = this.date.getSeconds();
        const millisecond = this.date.getMilliseconds();
        return (
            pattern
                .replace(/YYYY/g, year.toString())
                // string.padStart(length, 'a') 产生一个新的字符串达到给定的长度
                .replace(/MM/, month.toString().padStart(2, "0"))
                .replace(/DD/, day.toString().padStart(2, "0"))
                .replace(/HH/, hour.toString().padStart(2, "0"))
                .replace(/mm/, minute.toString().padStart(2, "0"))
                .replace(/ss/, second.toString().padStart(2, "0"))
                .replace(/SSS/, millisecond.toString().padStart(3, "0"))
        );
    }
    firstDayOfMonth() {
        return new Time(
            new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0)
        );
    }
    firstDayOfYear() {
        return new Time(new Date(this.date.getFullYear(), 0, 1, 0, 0, 0));
    }
    // 下个月的第0天
    lastDayOfMonth() {
        return new Time(
            new Date(
                this.date.getFullYear(),
                this.date.getMonth() + 1,
                0,
                0,
                0,
                0
            )
        );
    }
    // 下一年的第0个月
    lastDayOfYear() {
        return new Time(new Date(this.date.getFullYear() + 1, 0, 0, 0, 0, 0));
    }
    getRaw() {
        return this.date;
    }
    add(
        amount: number,
        unit:
            | "year"
            | "month"
            | "day"
            | "hour"
            | "minute"
            | "second"
            | "millisecond"
    ) {
        const date = new Date(this.date.getTime());
        switch (unit) {
            case "year":
                date.setFullYear(date.getFullYear() + amount);
                break;
            case "month":
                // eslint-disable-next-line no-case-declarations
                const d = date.getDate();
                date.setDate(1);
                date.setMonth(date.getMonth() + amount);
                // eslint-disable-next-line no-case-declarations
                const d2 = new Date(
                    date.getFullYear(),
                    date.getMonth() + 1,
                    0,
                    0,
                    0,
                    0
                ).getDate();
                date.setDate(Math.min(d, d2));
                break;
            case "day":
                date.setDate(date.getDate() + amount);
                break;
            case "hour":
                date.setHours(date.getHours() + amount);
                break;
            case "minute":
                date.setMinutes(date.getMinutes() + amount);
                break;
            case "second":
                date.setSeconds(date.getSeconds() + amount);
                break;
            case "millisecond":
                date.setMilliseconds(date.getMilliseconds() + amount);
                break;
            default:
                throw new Error("Time.add: unknown unit");
        }
        return new Time(date);
    }
}
