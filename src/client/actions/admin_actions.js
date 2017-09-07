const UPDATE_ADMIN_PAGE = "UPDATE_ADMIN_PAGE"

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
