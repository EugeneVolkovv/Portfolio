export default function (state=null,action) {
    switch (action.type) {
        case "CAR_SELECTED":
            return action.payload;
            break;
        case "CAR_DELITED":
            return action.payload;
            break;
        default:
            return state;
    }
}