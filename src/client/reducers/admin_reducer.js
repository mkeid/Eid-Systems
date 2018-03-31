import { UPDATE_ADMIN_PAGE } from "../actions/admin_actions";

const initState = {
    currentPage: null
};

export default (state = initState, action) => {
    switch (action.type) {
        // Updated the current admin page
        case UPDATE_ADMIN_PAGE:
            const { currentPage } = action.payload;
            return {currentPage};

        default:
            return state;
    }
};
