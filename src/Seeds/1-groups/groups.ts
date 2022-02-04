import { getObjectId } from "mongo-seeding";

// Import Own Modules
import { IGroup } from "../../Modules/Groups/Groups.model";

const groups: Partial<IGroup>[] = [
    {
        _id   : getObjectId("direction"),
        name  : "Dirección",
        color : 0,
    },
];

module.exports = groups;
