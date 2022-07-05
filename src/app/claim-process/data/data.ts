import { KeyValue } from "../models/keyValue";

export const superClaimType: Array<KeyValue> = [
	{ code: 1, value: "התביעה אושרה" },
	{ code: 2, value: "התביעה נדחתה" },
	{ code: 4, value: "טרם התקבלה החלטה" }
];


export const claimCause: Array<KeyValue> = [
	{ code: 1, value: "תאונה" },
	{ code: 2, value: "מחלה" },
	{ code: 5, value: "תאונת עבודה" },
	{ code: 6, value: "אחר" },
];

export const submitedBy: Array<KeyValue> = [
	{ code: 1, value: 'מבוטח' },
	{ code: 2, value: 'סוכן' },
	{ code: 3, value: 'בן/בת זוג' },
];

export const injuryType: Array<KeyValue> = [
	{ code: 1, value: "אגן" },
	{ code: 2, value: "גפיים" },
	{ code: 5, value: "ראש" },
	{ code: 6, value: "גב" },
	{ code: 7, value: "לב" },
	{ code: 9, value: "נפש" },
]
export const submitionMethod: Array<KeyValue> = [
	{ code: 1, value: 'דואר' },
	{ code: 2, value: 'דיגיטל' },
	{ code: 3, value: 'פקס' },
]
export const identityTypes: Array<KeyValue> = [
	{ code: 1, value: 'ת.ז.' },
	{ code: 2, value: 'דרכון' },
	{ code: 3, value: 'מבוטח' },
	{ code: 4, value: 'מפעל' }
]