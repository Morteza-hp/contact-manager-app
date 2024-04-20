import { z } from "zod";

export const requiredString = (min: number, fieldName: String) =>
  z
    .string()
    .nonempty({
      message: `${fieldName} ضروری است`,
    })
    .min(min, {
      message: `وارد کردن حداقل ${min} کرکتر ضروری است`,
    });

export const requiredNumber = (min: number, max: number, fieldName: String) =>
  z.coerce
    .number()
    .min(min, {
      message: `حداقل عدد مجاز ${min} است`,
    })
    .max(max, {
      message: `حداکثر عدد مجاز ${max} است`,
    });

export const requiredEmail = (fieldName: String) =>
  z
    .string()
    .nonempty({
      message: `${fieldName} ضروری است`,
    })
    .email({ message: "آدرس ایمیل معتبر نیست" })
    .min(7, {
      message: "وارد کردن حداقل 7 کرکتر ضروری است",
    });
