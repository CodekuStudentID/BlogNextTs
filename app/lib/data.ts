export enum ROLE {
    ADMIN,
    CS,
    USER
}

export interface ContactUser {
    phone1:      number | string;
    phone2:      number | string;
    phone3?:     number | string;
}

export interface UserBank {
    id:         number;
    nama:       string;
    alamat1:    string;
    alamat2?:   string;
    is_active:  boolean;
    contact: ContactUser;
    role:       ROLE;
}

export let data: UserBank[] = [
    {
        id: 1,
        nama: 'rudi',
        alamat1: 'jln. pekanbaru',
        alamat2: '',
        is_active: true,
        contact : {
            phone1: '089993',
            phone2: '018229'
        },
        role: ROLE.ADMIN
    },
    {
        id: 2,
        nama: "andi",
        alamat1: "jln. sudirman",
        is_active: true,
        contact: {
            phone1: "081111",
            phone2: "082222"
            },
        role: ROLE.USER
    },
    {
        id: 3,
        nama: "budi",
        alamat1: "jln. melati",
        is_active: false,
        contact: {
            phone1: "083333",
            phone2: "084444"
            },
        role: ROLE.CS
    },
    {
        id: 4,
        nama: "candra",
        alamat1: "jln. anggrek",
        is_active: true,
        contact: {
            phone1: "085555",
            phone2: "086666"
            },
        role: ROLE.USER
    },
    {
        id: 5,
        nama: "dedi",
        alamat1: "jln. kenanga",
        is_active: true,
        contact: {
            phone1: "087777",
            phone2: "088888"
            },
        role: ROLE.ADMIN
    },
    {
        id: 6,
        nama: "eko",
        alamat1: "jln. flamboyan",
        is_active: false,
        contact: {
            phone1: "089999",
            phone2: "081010"
            },
        role: ROLE.USER
    },
    {
        id: 7,
        nama: "fajar",
        alamat1: "jln. cempaka",
        is_active: true,
        contact: {
            phone1: "082020",
            phone2: "083030"
            },
        role: ROLE.CS
    },
    {
        id: 8,
        nama: "gilang",
        alamat1: "jln. merdeka",
        is_active: true,
        contact: {
            phone1: "084040",
            phone2: "085050"
            },
        role: ROLE.USER
    },
    {
        id: 9,
        nama: "hendra",
        alamat1: "jln. diponegoro",
        is_active: false,
        contact: {
            phone1: "086060",
            phone2: "087070"
            },
        role: ROLE.ADMIN
    },
    {
        id: 10,
        nama: "indra",
        alamat1: "jln. kartini",
        is_active: true,
        contact: {
            phone1: "088080",
            phone2: "089090"
            },
        role: ROLE.USER
    },
    {
        id: 11,
        nama: "joko",
        alamat1: "jln. gatot subroto",
        is_active: true,
        contact: {
            phone1: "0811111",
            phone2: "0822222"
            },
        role: ROLE.CS
    }
];
