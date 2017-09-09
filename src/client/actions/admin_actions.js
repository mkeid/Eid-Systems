const UPDATE_ADMIN_PAGE = "UPDATE_ADMIN_PAGE"


/**
* Action creator that changes the admin page status for the admin menu
*/
const updateAdminPage = currentPage => ({
    type: UPDATE_ADMIN_PAGE,
    payload: {
        currentPage
    }
})


export {
    UPDATE_ADMIN_PAGE,
    updateAdminPage
}
