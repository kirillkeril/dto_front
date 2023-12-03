import {ICourse} from "./types.ts";

export type RequestType = "GET" | "POST" | "DELETE" | "PATCH";

const COURSES: ICourse[] = [
    {
        id: 1,
        name: "Название курса",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut doloremque error expedita nam officia quo similique unde voluptate?"
    },
    {
        id: 2,
        name: "Название курса",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut doloremque error expedita nam officia quo similique unde voluptate?"
    },
    {
        id: 3,
        name: "Название курса",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut doloremque error expedita nam officia quo similique unde voluptate?"
    },
    {
        id: 4,
        name: "Название курса",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut doloremque error expedita nam officia quo similique unde voluptate?"
    },
    {
        id: 5,
        name: "Название курса",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut doloremque error expedita nam officia quo similique unde voluptate?"
    },
];

class API {
    getCourses(): Promise<ICourse[]> {
        return new Promise((resolve) => {
            return resolve(COURSES)
        })
    }

    getCourseById(id: number): Promise<ICourse> {
        return new Promise((resolve) => {
            return setTimeout(() => resolve(COURSES.filter(item => item.id === id)[0]), 1000)
        })
    }
}

export const api = new API();