import { delay } from "../utils/delay.js";

export default class ActorService {
    constructor() {
        this.actors = [];
    }

    addActor(actor) {
        this.actors.push(actor);
    }

    getAllActors() {
        return this.actors;
    }

    async findActorById(id) {
        await delay(1000);
        const actor = this.actors.find(a => a.id === id);
        if (actor) {
            return actor;
        } else {
            return Promise.reject(`Actor with id ${id} not found`);
        }
    }
}
